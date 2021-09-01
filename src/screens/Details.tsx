import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import FeedbackButton from '../components/FeedbackButton';
import FeedbackItem from '../components/FeedbackItem';

import data from '../data.json';

interface ParamProps {
	id: string;
}

const Details = () => {
	const [category, setCategory] = useState('all'); //Remove when Context is implemented
	const [comment, setComment] = useState('');

	const { id } = useParams<ParamProps>();

	const itemDetails = data[0].productRequests.find(
		(item) => item.id === Number(id)
	);
	console.log(itemDetails);

	return (
		<div className='Details'>
			<header>
				<BackButton color='Secondary' />
				<FeedbackButton type='edit' />
			</header>
			<main>
				<FeedbackItem itemData={itemDetails} setCategory={setCategory} />
				<div>
					<h1>{itemDetails?.comments?.length} Comments</h1>
					
				</div>
			</main>
		</div>
	);
};

export default Details;
