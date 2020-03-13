import React, { useEffect, useState } from 'react';
// https://reactgo.com/react-useeffect-hook-tutorial/
const key = 'd0333c98698e4f6b818186a29bf10625';

const useFetch = url => {
	const [data, setData] = useState(null);

	async function fetchData() {
		const response = await fetch(url);
		const json = await response.json();
		setData(json);
	}

	useEffect(() => {fetchData()},[url]);

	return data;
};

// 按到后来没有是因为没有那个json了 XD

function HookApi() {
	const [count, setCount] = useState(1);
	const data = useFetch(`https://jsonplaceholder.typicode.com/todos/${count}`);

	if (!data) {
		return <div>Loading...</div>;
	} else {
		return (
			<ul>
				<li>Count: {count}</li>
				<li>{data.id}</li>
				<li>{data.title}</li>
				<li><button onClick={() => setCount(prevCount => prevCount +1)}>Click Me!</button></li>
			</ul>
		)
	}
}

export default HookApi;
