import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddComment from '../components/AddComment';
import BackButton from '../components/BackButton';
import CommentItem from '../components/CommentItem';
import FeedbackButton from '../components/FeedbackButton';
import FeedbackItem from '../components/FeedbackItem';

import data from '../data.json';

interface ParamProps {
	id: string;
}

interface CommentProps {
	id: number;
	content: string;
	replies?: ReplyProps[];
	user: UserProps;
}

interface ReplyProps {
	content: string;
	replyingTo: string;
	user: UserProps;
}

interface UserProps {
	image: string;
	name: string;
	username: string;
}

const Details = () => {
	const [category, setCategory] = useState('all'); //Remove when Context is implemented

	const { id } = useParams<ParamProps>();

	const itemDetails = data[0].productRequests.find(
		(item) => item.id === Number(id)
	);

	return (
		<div className='Details'>
			<header>
				<div className='TopHeader'>
					<BackButton color='Secondary' />
					<FeedbackButton type='edit' />
				</div>
				<FeedbackItem
					type='FeedbackDetails'
					itemData={itemDetails}
					setCategory={setCategory}
				/>
			</header>
			<main>
				<h3>
					{itemDetails?.comments?.length || 0} Comment
					{(itemDetails?.comments?.length === undefined ||
						itemDetails?.comments?.length > 1) &&
						's'}
				</h3>
				{itemDetails?.comments?.map((item: CommentProps, key: number) => {
					return (
						<div key={key}>
							<CommentItem comment={item} />
							{itemDetails?.comments?.length > 1 &&
								itemDetails?.comments?.length - 1 !== key && <hr />}
						</div>
					);
				})}
			</main>
			<AddComment />
		</div>
	);
};

export default Details;
