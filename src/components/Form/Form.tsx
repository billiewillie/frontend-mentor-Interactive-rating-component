import React, { useState } from "react";
import styles from ".././Form/Form.module.css";

interface FormProps {
	amount: number;
	submitHandler: (el: number) => void;
}

const Form = ({ amount, submitHandler }: FormProps) => {
	const [activeEl, setActiveEl] = useState<number | null>(null);

	const elementHandler = (i: number): void => {
		setActiveEl(i);
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

	return (
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
	);
};

export default Form;
