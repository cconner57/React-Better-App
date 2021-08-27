import { ReactComponent as Chat } from '../assets/icon-comments.svg';

const CommentTotal = ({ comments }: { comments: number }) => {
	return (
		<div className='CommentTotal'>
			<Chat />
			<p>{comments}</p>
		</div>
	);
};

export default CommentTotal;
