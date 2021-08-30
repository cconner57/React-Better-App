import { ReactComponent as Plus } from '../assets/icon-plus.svg';
import { Link } from 'react-router-dom';

const AddFeedbackButton = () => {
	return (
		<Link className='NewButton' to='/new'>
			<Plus /> Add Feedback
		</Link>
	);
};

export default AddFeedbackButton;
