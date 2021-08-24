import { ReactComponent as Chat } from '../assets/icon-comments.svg';

const CommentTotal = ({ comments }: any) => {
	return (
		<div className='CommentTotal'>
			<Chat />
			<p>{comments}</p>
		</div>
	);
};

export default CommentTotal;
