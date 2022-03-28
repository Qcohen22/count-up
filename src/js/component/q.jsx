import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
        setInterval(() => {
            setCount((count) => count + 1);
        }, 10000);
    }, []); 

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
     

export default Home;