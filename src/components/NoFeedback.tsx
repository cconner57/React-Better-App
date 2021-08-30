import AddFeedbackButton from './AddFeedbackButton';

import { ReactComponent as Empty } from '../assets/illustration-empty.svg';

const NoFeedback = () => {
	return (
		<div className='NoFeedback'>
			<Empty />
			<h1>There is no feedback yet.</h1>
			<p>Got a suggestion? Found a bug that needs to be squashed?</p>
			<p>We love hearing abour new ideas to imrpove our app</p>
			<AddFeedbackButton />
		</div>
	);
};

export default NoFeedback;
