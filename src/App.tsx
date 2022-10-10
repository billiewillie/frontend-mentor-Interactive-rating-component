import { useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
	const [selected, setSelected] = useState<number | null>(null);
	const amount = 5;

	const submitHandler = (el: number | null) => {
		setSelected(el);
	};

	return (
		<div className='App'>
			<Card amount={amount} submitHandler={submitHandler} />
			{selected}
		</div>
	);
}

export default App;
