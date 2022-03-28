import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);

	return (
		<div>
			<h1>{count}</h1>
		</div>
	);
};
export default Home;
