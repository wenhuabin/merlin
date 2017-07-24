<style lang="scss" scoped>
@import '~scss/component/datepicker';
</style>

<template>
  <div class="cov-vue-date" :class="option.wrapperClass ? option.wrapperClass : {}">
      <div class="input-box">
          <input type="text" title="input date" class="cov-datepicker" readonly="readonly" :placeholder="option.placeholder" v-model="time" :required="required" @click="showCheck" />
      </div>
      <div class="cov-date-body" :style="calendarStyle" @mouseleave="showCheck">
          <div class="cov-date-header">
              <div class="cov-date-previous" @click="nextMonth('pre')"></div>
              <div class="cov-date-year">
                  <div class="year" @click="showYear" v-bind:style="yearHoverStyle">{{checked.year}}</div>
                  <ul class="date-list year-list" id="yearList" v-if="showInfo.year">
                    <li class="date-item" v-for="yearItem,index in library.year" :key="index" @click="setYear(yearItem)">{{yearItem}}</li>
                  </ul>
              </div>
              <div class="cov-date-month">
                  <div class="month" @click="showMonth" v-bind:style="monthHoverStyle">{{displayInfo.month}}</div>
                <ul class="date-list month-list" v-if="showInfo.month">
                  <li class="date-item" v-for="monthItem,index in library.month" :key="index" @click="setMonth(monthItem)">{{monthItem}}</li>
                </ul>
              </div>
              <div class="cov-date-next" @click="nextMonth('next')"></div>
          </div>
          <div class="cov-date-box" v-if="showInfo.day">
              <div class="week">
                  <ul>
                      <li v-for="weekie in library.week">{{weekie}}</li>
                  </ul>
              </div>
              <div class="daylist">
                  <div class="day" v-for="day,index in dayList" :key="index" @click="checkDay(day)" :class="{'checked':day.checked,'unavailable':day.unavailable,'passive-day': !(day.inMonth)}" >{{day.value}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'date-picker',
  props: {
    required: false,
    date: {
      type: String,
      default: '',
      required: false 
    },
    option: {
      type: Object,
      default () {
        return {
          type: 'day',
          SundayFirst: true,
          week: ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD',
          wrapperClass: '',
        }
      }
    },
    limit: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
        time: this.date ? this.date : moment().format(this.option.format),
        calendarStyle: {display: "none"},
        yearHoverStyle: {},
        monthHoverStyle: {},
        showInfo: {
            day: true,
            month: false,
            year: false,
        },
        displayInfo: {
            month: ''
        },
        library: {
            week: this.option.week,
            month: this.option.month,
            year: []
        },
        checked: {
            oldtime: this.date ? moment(this.date) : moment(),
            currentMoment: this.date ? moment(this.date) : moment(),
            year: this.date ? moment(this.date).format('YYYY') : moment().format('YYYY'),
            month: this.date ? moment(this.date).format('MM') : moment().format('MM'),
            day: this.date ? moment(this.date).format('DD') : moment().format('DD'),
        },
        dayList: [],
        selectedDays: []
      }
  },
  beforeMount(){
      this.showDay()
  },
  methods: {
      optionsShow(flag){
          if(!flag){
              this.yearHoverStyle = this.yearHoverStyle.background ? {} : {background: "rgba(255, 255, 255, 0.1"} 
          }else{
              this.monthHoverStyle = this.monthHoverStyle.background ? {} : {background: "rgba(255, 255, 255, 0.1"} 
          }

      },
      pad (n) {
        n = Math.floor(n)
        return n < 10 ? '0' + n : n
      },
      nextMonth (type) {
        let next = null
        this.checked.currentMoment = type === 'next' ? moment(this.checked.currentMoment).add(1, 'M') : moment(this.checked.currentMoment).add(-1, 'M')
        this.checked.year = moment(this.checked.currentMoment).format('YYYY')
        this.showDay()
      },
      checkBySelectDays (d, days) {
        this.selectedDays.forEach(day => {
            if (this.checked.year === moment(day).format('YYYY') && this.checked.month === moment(day).format('MM') && d === Math.ceil(moment(day).format('D'))) {
              days[d - 1].checked = true
            }
        })
      },
      limitWeekDay (limit, days) {
        days.map((day) => {
          if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {
            day.unavailable = true
          }
        })
        return days
      },
      limitFromTo (limit, days) {
        if (limit.from || limit.to) {
          days.map((day) => {
            if (this.getLimitCondition(limit, day)) {
              day.unavailable = true
            }
          })
        }
        return days
      },
      getLimitCondition (limit, day) {
        let tmpMoment = moment(day.moment.year() + '-' + this.pad(day.moment.month()+1) + '-' + this.pad(day.value))
        if (limit.from && !limit.to) {
          return !tmpMoment.isAfter(limit.from)
        } else if (!limit.from && limit.to) {
          return !tmpMoment.isBefore(limit.to)
        } else {
          return !tmpMoment.isBetween(limit.from, limit.to)
        }
      },
      checkDay (obj) {
          if (obj.unavailable || obj.value === '') {
              return false
          }
          if (!(obj.inMonth)) {
              this.checked.oldtime = obj.moment.format("YYYY-MM-DD")
              this.checked.currentMoment = this.checked.oldtime 
              this.showDay()
              this.picked()
              return
          }
          this.dayList.forEach((x) => {
            x.checked = false
          })
          this.checked.day = this.pad(obj.value)
          obj.checked = true
          this.picked()
      },
      showYear () {
          let year = moment(this.checked.currentMoment).year()
          this.library.year = []
          let yearTmp = []
          for (let i = year + 50; i > year - 50; --i) {
            yearTmp.push(i)
          }
          this.library.year = yearTmp
          this.showInfo.year = this.showInfo.year? false : true; 
          this.optionsShow(0)
      },
      showMonth () {
        this.showInfo.month = this.showInfo.month ? false : true; 
          this.optionsShow(1)
      },
      setYear (year) {
        this.checked.currentMoment = moment(year + '-' + this.checked.month + '-' + this.checked.day)
        this.showDay(this.checked.currentMoment)
        this.showInfo.year = false
        this.optionsShow(0)
      },
      setMonth (month) {
        let mo = (this.library.month.indexOf(month) + 1)
        if (mo < 10) {
          mo = '0' + '' + mo
        }
        this.checked.currentMoment = moment(this.checked.year + '-' + mo + '-' + this.checked.day)
        this.showDay(this.checked.currentMoment)
        this.showInfo.month = false
        this.optionsShow(1)
      },
      showCheck () {
        this.calendarStyle = this.calendarStyle.display === "block" ? {display: "none"} : {display: "block"} 
      },
      picked () {
        let ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day
        this.checked.currentMoment = moment(ctime, 'YYYY-MM-DD')
        this.time = moment(this.checked.currentMoment).format(this.option.format)
        this.$emit('onPick', this.time)
      },
      showDay () {
          this.checked.year = moment(this.checked.currentMoment).format('YYYY')
          this.checked.month = moment(this.checked.currentMoment).format('MM')
          this.checked.day = moment(this.checked.currentMoment).format('DD')
          this.displayInfo.month = this.library.month[moment(this.checked.currentMoment).month()]
          let days = []
          let currentMoment = this.checked.currentMoment
          let firstDay = moment(currentMoment).date(1).day()
          // gettting previous and next month
          // let currentMonth = moment(currentMoment)
          let previousMonth = moment(currentMoment)
          let nextMonth = moment(currentMoment)
          nextMonth.add(1, 'months')
          previousMonth.subtract(1, 'months')
          let monthDays = moment(currentMoment).daysInMonth()
          let oldtime = this.checked.oldtime
          for (let i = 1; i <= monthDays; ++i) {
            days.push({
              value: i,
              inMonth: true,
              unavailable: false,
              checked: false,
              moment: moment(currentMoment).date(i)
            })
            if (i === Math.ceil(moment(currentMoment).format('D')) && moment(oldtime, this.option.format).year() === moment(currentMoment).year() && moment(oldtime, this.option.format).month() === moment(currentMoment).month()) {
              days[i - 1].checked = true
            }
            //this.checkBySelectDays(i, days)
          }
          if (firstDay === 0) firstDay = 7
          for (let i = 0; i < firstDay - (this.option.SundayFirst ? 0 : 1); i++) {
              let passiveDay = {
                  value: previousMonth.daysInMonth() - (i),
                  inMonth: false,
                  action: 'previous',
                  unavailable: false,
                  checked: false,
                  moment: moment(currentMoment).date(1).subtract(i + 1, 'days')
              }
              days.unshift(passiveDay)
          }
          var passiveDaysAtFinal = 42 - days.length
          for (let i = 1; i <= passiveDaysAtFinal; i++) {
              let passiveDay = {
                  value: i,
                  inMonth: false,
                  action: 'next',
                  unavailable: false,
                  checked: false,
                  moment: moment(currentMoment).add(1, 'months').date(i)
              }
              days.push(passiveDay)
          }
          if (this.limit.length > 0) {
              for (let li of this.limit) {
                  switch (li.type) {
                      case 'fromto':
                        days = this.limitFromTo(li, days)
                        break
                      case 'weekday':
                        days = this.limitWeekDay(li, days)
                        break
                  }
              }
          }
          this.dayList = days
      },
  }
}
</script>
      },
  }
}
</script>
