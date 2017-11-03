// Return with commas in between
var numberWithCommas = function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var dataPack1 = [2100, 2200, 2600, 3500, 5500, 5500, 5600, 5900, 6000, 6100, 6010, 6200];
var dataPack2 = [1000, 1200, 1300, 1400, 1060, 2030, 2070, 4000, 4100, 4020, 4030, 4050];
var dataPack3 = [1200, 1400, 2300, 3400, 60, 2330, 5070, 1000, 2100, 3020, 1030, 1050];
var dataPack4 = [4300, 4800, 6200, 8300, 6620, 9860, 12740, 10900, 12200, 13140, 11070, 11300];
var dates = ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", 
  				 "May 7", "May 8", "May 9", "May 10", "May 11", "May 12"];

// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

export const stackBarData = {
    labels: dates,
    datasets: [{
      	label: 'Total',
      	data: dataPack4,
		borderColor: "#EA8182",
		backgroundColor: "transparent",
		pointBackgroundColor: '#EA8182',
      	type: 'line'
    },{
        label: 'Bowser',
        data: dataPack1,
		backgroundColor: "#3F51B5",
		hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
		hoverBorderWidth: 2,
		hoverBorderColor: 'lightgrey'
    },{
        label: 'Chrome',
        data: dataPack3,
		backgroundColor: "#FF9800",
		hoverBackgroundColor: "rgba(58, 58, 55, 0.7)",
		hoverBorderWidth: 2,
		hoverBorderColor: 'lightgrey'
    },{
        label: 'Mario',
        data: dataPack2,
		backgroundColor: "#4CAF50",
		hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
		hoverBorderWidth: 2,
		hoverBorderColor: 'lightgrey'
    }]
};

export const stackBarOptions = {
	animation: {
    	duration: 10,
    },
    tooltips: {
		  mode: 'label',
      callbacks: {
      	  label: function(tooltipItem, data) { 
      	  	return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
      	  }
      }
    },
    scales: {
      xAxes: [{ 
      	stacked: true, 
        gridLines: { display: false },
        }],
      yAxes: [{ 
      	stacked: true, 
        ticks: {
    			callback: function(value) { return numberWithCommas(value); },
 				}, 
        }],
    }, // scales
    legend: {display: true}
} // options
