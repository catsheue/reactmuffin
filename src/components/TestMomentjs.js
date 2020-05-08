import React from 'react';
import moment from 'moment';

class TestMomentjs extends React.Component {
	state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
	};

	componentDidMount() {

		// const a = moment().format();
		// const b = moment().startOf('day').format();
		// const c = moment();
		//
		// console.log(a);
		// console.log(b);
		// console.log(c);

		const before = moment().subtract(3, 'days').startOf('day').format('x');
		const after = moment().subtract(1, 'days').endOf('day').format('x');

		console.log(before);
		console.log(after);

		const yes = moment().subtract(3, 'days').startOf('day');
		const no = moment().subtract(1, 'days').endOf('day');

		console.log(yes);
		console.log(no);

		const a = moment().subtract(3, 'days').startOf('day').format();
		// 2020-05-03T00:00:00+08:00
		const b = moment().subtract(1, 'days').endOf('day').format();
		// 2020-05-05T23:59:59+08:00
		// 昨天一天，到昨天要過完為止的時間段

		console.log(a);
		console.log(b);
	}

	componentWillUnmount() {

	}

	render() {

		return (
			<div className="momentjs">
				132141234
			</div>
		);
	}
}

export default TestMomentjs;
