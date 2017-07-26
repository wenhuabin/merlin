<style lang="scss" scoped>
@import '~scss/component/datepicker';
</style>

<template>
  <div class="cov-vue-date" :class="option.wrapperClass ? option.wrapperClass : {}">
      <div class="input-box">
          <input type="text" title="input date" class="cov-datepicker" readonly="readonly" :placeholder="option.placeholder" v-model="fullTime" :required="required" @click="showCalendar" />
      </div>
      <div class="cov-date-body" :style="calendarStyle" @mouseleave="showCalendar">
          <div class="cov-date-header">
              <div class="cov-date-previous" @click="nextMonth('pre')"></div>
              <div class="cov-date-year">
                  <div class="year" @click="showYear" v-bind:style="yearHoverStyle">{{checked.year}}</div>
                  <ul class="date-list year-list" id="yearList" v-if="showInfo.year" @mouseleave="showYear">
                      <li class="date-item"  v-for="yearItem,index in library.year" :class="{yearChecked : checked.year == yearItem}" :key="index" @click="setYear(yearItem)">{{yearItem}}</li>
                  </ul>
              </div>
              <div class="cov-date-month">
                  <div class="month" @click="showMonth" v-bind:style="monthHoverStyle">{{displayInfo.month}}</div>
                  <ul class="date-list month-list" v-if="showInfo.month" @mouseleave="showMonth">
                      <li class="date-item" v-for="monthItem,index in library.month" :class="{monthChecked : displayInfo.month == monthItem}" :key="index" @click="setMonth(monthItem)">{{monthItem}}</li>
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
          <div class="cov-time-box" v-if="ifTime">
              <div class="time-list-box" v-if="this.showInfo.time" @mouseleave="showTime()">
                <ul class="hour-list time-list">
                    <li class="hour-item" v-for="h, index in hourList" :class="{hourChecked : hour == h}" :key="h" @click="setHour(h)">{{h}}</li>
                </ul>
                <ul class="minute-list time-list">
                    <li class="minute-item" v-for="m, index in minuteList" :class="{minuteChecked : minute == m}" :key="m" @click="setMinute(m)">{{m}}</li>
                </ul>
              </div>
              <div class="hour-box">
                  <div class="hour" @click="showTime()">{{hour}}</div>
              </div>
              <div class="time-colon">:</div>
              <div class="minute-box">
                  <div class="minute" @click="showTime()">{{minute}}</div>
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
          //week: ['日', '一', '二', '三', '四', '五', '六'],
          //month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
    },
    ifTime: {
      type: Boolean,
      default: false,
      required: false 
    },
  },
  data () {
    return {
        time: this.date ? moment(this.date).format(this.option.format) : moment().format(this.option.format),
        hour: this.date ? moment(this.date).format(this.option.format + ' HH:mm').substring(11,13) : moment().format(this.option.format+ ' HH:mm').substring(11,13),
        minute: this.date ? moment(this.date).format(this.option.format + ' HH:mm').substring(14) : moment().format(this.option.format+ ' HH:mm').substring(14),
        calendarStyle: {display: "block"},
        yearHoverStyle: {},
        monthHoverStyle: {},
        showInfo: {
            day: true,
            month: false,
            year: false,
            time: false,
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
        selectedDays: [],
        hourList: ['00','01','02','03','04','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
        minuteList: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','37','38','39','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'],
      }
  },
  watch: {
      date: function(new_date){
          console.log('change ', new_date)
          this.time = moment(new_date).format(this.option.format)
          this.hour = moment(new_date).format(this.option.format + ' HH:mm').substring(11,13)
          this.minute = moment(new_date).format(this.option.format + ' HH:mm').substring(14)
          this.checked.oldtime = moment(new_date)
          this.checked.currentMoment = moment(new_date)
          this.checked.year = moment(new_date).format('YYYY')
          this.checked.month = moment(new_date).format('MM')
          this.checked.day = moment(new_date).format('DD')
          this.showDay()
      },
  },
  beforeMount(){
      this.showDay()
  },
  computed: {
      fullTime: function(){
          return this.ifTime ? this.time + ' ' + this.hour + ':' + this.minute : this.time
      },
  },
  methods: {
      showTime(){
          if(!this.showInfo.time){
            this.showInfo.year = false 
            this.showInfo.month = false 
            this.yearHoverStyle = {} 
            this.monthHoverStyle = {} 
          }
          this.showInfo.time = this.showInfo.time? false : true; 
      },
      setHour(hour){
          this.hour = hour
          this.$emit('onPick', this.fullTime)
      },
      setMinute(minute){
          this.minute = minute
          this.$emit('onPick', this.fullTime)
      },
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
          for (let i = year + 20; i > year - 30; --i) {
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
      showCalendar () {
          //this.calendarStyle = this.calendarStyle.display === "block" ? {display: "none"} : {display: "block"} 
          if(this.calendarStyle.display === "none"){
              this.showInfo.year = false
              this.showInfo.month = false
          }else{
              this.checked.oldtime = this.time? moment(this.time) : moment()
              this.checked.currentMoment = this.time? moment(this.time) : moment()
              this.showDay()
          }
      },
      picked () {
        let ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day
        this.checked.currentMoment = moment(ctime, 'YYYY-MM-DD')
        this.time = moment(this.checked.currentMoment).format(this.option.format)
        this.$emit('onPick', this.ifTime ? this.fullTime : this.time)
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
