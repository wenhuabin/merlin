export const lineOptions = {
    responsive: false, //to set a fix width and height
    maintainAspectRatio: false,
	scales: {
        yAxes: [{
          gridLines: {
            display: true 
          },
          ticks: {
              beginAtZero: true,
              callback: function(value) {if (value % 1 === 0) {return value;}}
              // Include a dollar sign in the ticks
              //callback: function(value, index, values) {
              //}
          }
        }],
        xAxes: [{
          gridLines: {
            display: true 
          }
        }]
    },
	legend: {
	    display: true,
		position: 'top',
	    labels: {
	        fontColor: '#444'
	    }
	},
	title: {
    	display: true,
		text: '新增车辆统计',
		fontSize: 18,
		fontFamily: "sans-serif",
	},
	tooltips: {
		width: 1000,
		backgroundColor: "#fff",
		titleFontColor: "#444",
		titleFontSize: 16,
		bodyFontColor: "#444",
		titleMarginBottom: 15,
		bodySpacing: 30,
		footerMarginTop: 20,
		xPadding: 10,
		yPadding: 10,
	},
    animation: {
        easing: 'easeInOutSine',
    },
	steppedLine: true,
};

export const barOptions = {
    responsive: false, //to set a fix width and height
    maintainAspectRatio: false,
	scales: {
		xAxes: [{
			barThickness: 25,
			categoryPercentage: 0.8,
			gridLines: {
			    offsetGridLines: true
			},
		}],
	},
	legend: {
	    display: true,
		position: 'top',
	    labels: {
	        fontColor: '#444'
	    }
	},
	title: {
    	display: true,
		text: '测试组件',
		fontSize: 18,
		fontFamily: "sans-serif",
	},
	tooltips: {
		width: 1000,
		backgroundColor: "#fff",
		titleFontColor: "#444",
		titleFontSize: 16,
		bodyFontColor: "#444",
		titleMarginBottom: 15,
		bodySpacing: 30,
		footerMarginTop: 20,
		xPadding: 10,
		yPadding: 10,
	},
};
				
export const pieOptions = {
    responsive: false, //to set a fix width and height
    maintainAspectRatio: false,
	//cutoutPercentage: 50,
	//rotation: -0.5 * Math.PI,
	//circumference: 2,
	legend: {
	    display: true,
		position: 'top',
	    labels: {
	        fontColor: '#444'
	    }
	},
	title: {
    	display: true,
		text: '上报平台分布',
		fontSize: 18,
		fontFamily: "sans-serif",
	},
	tooltips: {
		width: 1000,
		backgroundColor: "#fff",
		titleFontColor: "#444",
		titleFontSize: 16,
		bodyFontColor: "#444",
		titleMarginBottom: 15,
		bodySpacing: 30,
		footerMarginTop: 20,
		xPadding: 10,
		yPadding: 10,
	},
    animation: {
        easing: 'easeInOutSine',

    }
};
