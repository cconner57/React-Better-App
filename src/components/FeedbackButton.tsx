import { ReactComponent as Plus } from '../assets/icon-plus.svg';
import { Link } from 'react-router-dom';

const FeedbackButton = ({ type, itemID }: { type: string; itemID?: number }) => {
	return (
		<>
			{type === 'add' && (
				<Link className='NewButton' to='/new'>
					<Plus /> Add Feedback
				</Link>
			)}
			{type === 'edit' && (
				<Link className='EditButton' to={`/edit/${itemID}`}>
					Edit Feedback
				</Link>
			)}
		</>
	);
};

export default FeedbackButton;
