import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// https://github.com/highcharts/highcharts-react

const options = {
	title: {
		text: 'Code Frequency'
	},
	series: [{
		data: [60, 150, 35, 26, 12]
	}],
	xAxis: {
		categories: ['2/12', '2/13', '2/14', '2/15', '2/17']
	},
};

const HighCharts = () => <div>
	<HighchartsReact
		highcharts={Highcharts}
		options={options}
	/>
</div>

export default HighCharts;
