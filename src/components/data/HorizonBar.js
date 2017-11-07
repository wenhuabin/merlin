export const horizonBarData = {
	labels: ["项目1", "项目2", "项目3", "项目4"],
    datasets: [{
        label: "",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [200, 300, 156, 500],
      }
    ]
};

export const horizonBarOptions = {
	legend: { display: false },
    title: {
      display: true,
      text: '水平柱状图'
    },
    scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          barThickness: 35,
        }],
        xAxes: [{
          gridLines: {
            display: false 
          },
		  ticks: {
    	      beginAtZero: true,
              callback: function(value) {if (value % 1 === 0) {return value;}}
    	  }
        }]
    },
    tooltips: {
        mode: 'y',
        intersect: false,
    },
    //tooltips: {
    //    callbacks: {
    //        label: function(tooltipItem, data) {
    //            var allData = data.datasets[tooltipItem.datasetIndex].data;
    //            var tooltipLabel = data.labels[tooltipItem.index];
    //            var tooltipData = parseInt(allData[tooltipItem.index]);
    //            var total = 0;
    //            for (var i in allData) {
    //                total += parseInt(allData[i]);
    //            }
    //            var tooltipPercentage = Math.round((tooltipData / total) * 100);
    //            return tooltipData + ' (' + tooltipPercentage + '%)';
    //        }
    //    }	
} // options
