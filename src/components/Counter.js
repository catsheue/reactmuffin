import {useState} from "react";
import React from "react";

function Counter() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);
	const [toggle, clickToggle] = useState(true);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
			<p>It is {toggle.toString()} that they have no sense of shame. </p>
			<button onClick={() => clickToggle(!toggle)}>
				Click me
			</button>
		</div>
	);
}

export default Counter;
