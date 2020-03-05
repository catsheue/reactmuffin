import React, { useState }  from 'react';

const source = ['Adam', 'Brian', 'Christine'];

function PlayRxjs() {

	const [names, setNames] = useState(source);

	return (
		<div className="App">
			<h1>RxJS with React</h1>
			<List items={names} />
		</div>
	);

}

const List = ({ items = [], loading = false }) => (
	<ul className={loading ? 'loading' : null}>
		{items.map(item => (
			<li key={item}>{item}</li>
		))}
	</ul>
);
export default PlayRxjs;
