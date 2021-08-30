// import UpArrow from '../assets/icon-arrow-up.svg';
import { ReactComponent as UpArrow } from '../assets/icon-arrow-up.svg';

const Upvote = ({ votes, direction }: { votes: number; direction: string }) => {
	return (
		<div className={`Upvote ${direction === 'row' ? 'Row' : 'Column'}`}>
			<UpArrow />
			<p>{votes}</p>
		</div>
	);
};

export default Upvote;
