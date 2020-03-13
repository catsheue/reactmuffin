import React, { useState }  from 'react';
import { of } from 'rxjs';

// https://www.bitovi.com/blog/rxjs-with-react-pt-1
const source = ['Adam', 'Brian', 'Christine'];
// create an Observable called names$, whose value is the source array:
const names$ = of(source);


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
