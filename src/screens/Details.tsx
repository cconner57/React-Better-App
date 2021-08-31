import { useState } from 'react';
import BackButton from '../components/BackButton';
import EditFeedback from './EditFeedback';

const Details = () => {
	const [comment, setComment] = useState('');

	return (
		<div>
			<header>
				<BackButton color='Primary' />
				<EditFeedback />
			</header>
            <main>

            </main>
		</div>
	);
};

export default Details;
