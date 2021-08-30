import { Link } from 'react-router-dom';

import Upvote from './Upvote';
import CategoryItem from './CategoryItem';
import CommentTotal from './CommentTotal';

interface CategoryProps {
	itemData: any;
	setCategory: (category: string) => void;
}

const FeedbackItem = ({ itemData, setCategory }: CategoryProps) => {
	return (
		<Link className='FeedbackItem' to={`/details/${itemData.id}`}>
			<Upvote votes={itemData.upvotes} direction='column' />
			<div className='Content'>
				<h3>{itemData.title}</h3>
				<p>{itemData.description}</p>
				<CategoryItem
					categoryName={itemData.category}
					setCategory={setCategory}
				/>
			</div>
			<CommentTotal comments={itemData?.comments?.length || 0} />
		</Link>
	);
};

export default FeedbackItem;
