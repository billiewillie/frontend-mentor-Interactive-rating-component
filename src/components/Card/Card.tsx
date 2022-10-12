import { useState } from "react";
import styles from "./Form.module.css";

interface CardProps {
	amount: number;
	selected: number | null;
	submitHandler: () => void;
	toggleRanking: (el: number) => void;
}

const Card = ({ amount, selected, submitHandler, toggleRanking }: CardProps) => {
	const renderInputs = (): JSX.Element[] => {
		let arr = [];
		for (let i = 1; i <= amount; i++) {
			arr.push(
				<div className={i === selected ? [styles.Ranking__el, styles.Active].join(" ") : styles.Ranking__el} key={i} onClick={() => toggleRanking(i)}>
					{i}
				</div>
			);
		}
		return arr;
	};

	return (
		<div className='card'>
			<div className='star'></div>
			<h1 className='title'>Title</h1>
			<p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tenetur.</p>
			<div className={styles.Form}>
				<div className={styles.Ranking}>{renderInputs()}</div>
				<button className='button' onClick={submitHandler}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Card;
