import { useState } from 'react';
import { ReactComponent as UpArrow } from '../assets/icon-arrow-up.svg';

const Upvote = ({ votes, direction }: { votes: number; direction: string }) => {
	const [count, setCount] = useState(votes);
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (!clicked) {
			setCount(count + 1);
			setClicked(true);
		}
	};

	return (
		<div
			className={`Upvote ${clicked && 'Clicked'} ${
				direction === 'row' ? 'Row' : 'Column'
			}`}
			onClick={handleClick}>
			<UpArrow />
			<p>{count}</p>
		</div>
	);
};

export default Upvote;
