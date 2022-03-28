import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);
		let pizza = Math.floor(count / 1000)
		let football = Math.floor(count / 100)
		let basketball = Math.floor(count / 10)
		let credit = Math.floor(count / 1)
	return (
		<div>
			<h1>{pizza % 10}</h1>
			<h1>{football % 10}</h1>
			<h1>{basketball % 10}</h1>
			<h1>{credit % 10}</h1>
		</div>
	);
};
export default Home;
