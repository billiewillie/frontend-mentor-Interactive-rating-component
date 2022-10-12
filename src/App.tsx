import { useState } from "react";
import Card from "./components/Card/Card";
import Thank from "./components/Thank/Thank";
import "./App.css";

function App() {
	const [selected, setSelected] = useState<number | null>(null);
	const [isThank, setIsThank] = useState(false);
	const amount = 5;

	const submitHandler = () => {
		if (typeof selected === "number") {
			setIsThank(true);
		}
	};

	const toggleRanking = (el: number): void => {
		setSelected(el);
	};

	return (
		<div className='App'>
			{!isThank && <Card amount={amount} selected={selected} submitHandler={submitHandler} toggleRanking={toggleRanking} />}
			{isThank && typeof selected === "number" && <Thank amount={amount} selected={selected} />}
		</div>
	);
}

export default App;
