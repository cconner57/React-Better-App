import { ReactComponent as Plus } from '../assets/icon-plus.svg';
import { Link } from 'react-router-dom';

const FeedbackButton = ({ type }: { type: string }) => {
	return (
		<>
			{type === 'add' && (
				<Link className='NewButton' to='/new'>
					<Plus /> Add Feedback
				</Link>
			)}
			{type === 'edit' && (
				<Link className='EditButton' to='/edit'>
					Edit Feedback
				</Link>
			)}
		</>
	);
};

export default FeedbackButton;
