import React from 'react';
import { fromEvent } from 'rxjs';

class TestRxjs extends React.Component {
	state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
	};

	componentDidMount() {
		fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
	}

	componentWillUnmount() {

	}

	render() {


		return (
			<div className="testrxjs">
				23234423414
			</div>
		);
	}
}

export default TestRxjs;
