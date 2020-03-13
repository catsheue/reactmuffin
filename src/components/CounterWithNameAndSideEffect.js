import React, { useEffect, useState } from 'react';
// https://flaviocopes.com/react-hooks/

const CounterWithNameAndSideEffect = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('Flavio')

	useEffect(() => {
		console.log(`Hi ${name} you clicked ${count} times`)
	})

	return (
		<div>
			<p>
				Hi {name} you clicked {count} times
			</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
				Change name
			</button>
		</div>
	)
}

export default CounterWithNameAndSideEffect;
