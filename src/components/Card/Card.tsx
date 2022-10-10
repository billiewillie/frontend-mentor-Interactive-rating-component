import { useState } from "react";
import styles from "./Form.module.css";

interface CardProps {
	amount: number;
	submitHandler: (el: number) => void;
}

const Card = ({ amount, submitHandler }: CardProps) => {
	const [activeEl, setActiveEl] = useState<number | null>(null);

	const elementHandler = (i: number): void => {
		setActiveEl(i);
		submitHandler(i);
	};

	const renderInputs = (): JSX.Element[] => {
		let arr = [];
		for (let i = 1; i <= amount; i++) {
			arr.push(
				<div
					className={i === activeEl ? [styles.Ranking__el, styles.Active].join(" ") : styles.Ranking__el}
					key={i}
					onClick={() => elementHandler(i)}>
					{i}
				</div>
			);
		}
		return arr;
	};

	console.log(activeEl);

	return (
		<div className='card'>
			<div className='star'></div>
			<h1 className='title'>Title</h1>
			<p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tenetur.</p>
			<div className={styles.Form}>
				<div className={styles.Ranking}>{renderInputs()}</div>
				{typeof activeEl === "number" ? (
					<button className='button' onClick={() => submitHandler(activeEl)}>
						Submit
					</button>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Card;
