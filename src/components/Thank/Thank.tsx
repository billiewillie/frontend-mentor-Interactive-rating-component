interface ThankProps {
	amount: number;
	selected: number;
}

const Thank = ({ amount, selected }: ThankProps) => {
	return (
		<div className='card'>
			<p className='selected'></p>
			<h2 className='title'>Thank you!</h2>
			<p>
				you ranked it {selected} out of {amount}
			</p>
			<p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, quidem.</p>
		</div>
	);
};

export default Thank;
