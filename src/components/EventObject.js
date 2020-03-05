import React from 'react';

const numbers = [1, 2, 3, 4, 5];

class EventObject extends React.Component {

	onClickItem = (e, key) => {
		console.log(e);
		console.log(key);
	}

	render() {
		return (
			<ul className="test">
				{numbers.map((item, key) => (<li onClick={(e) => this.onClickItem(e, key)}>{item}</li>))}
			</ul>
		);
	}
}

export default EventObject;
