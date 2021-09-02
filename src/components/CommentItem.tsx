import ReplyItem from './ReplyItem';

interface CommentProps {
	id: number;
	content: string;
	replies?: ReplyProps[];
	user: UserProps;
}

interface ReplyProps {
	content: string;
	replyingTo: string;
	user: {
		image: string;
		name: string;
		username: string;
	};
}

interface UserProps {
	image: string;
	name: string;
	username: string;
}

const CommentItem = ({ comment }: any) => {
	return (
		<div className='CommentItem'>
			<div className='CommentImage'>
				<img
					src={process.env.PUBLIC_URL + `${comment.user.image}`}
					alt='Profile'
				/>
				{comment.replies && <div className='ReplyLine' />}
			</div>
			<div className='CommentItem-Container'>
				<div className='CommentItem-Header'>
					<div className='CommentItem-Contact'>
						<h3>{comment.user.name}</h3>
						<p>@{comment.user.username}</p>
					</div>
					<p>Reply</p>
				</div>
				<p>{comment.content}</p>
				{comment.replies &&
					comment.replies.map((reply: ReplyProps, key: number) => {
						return <ReplyItem key={key} reply={reply} />;
					})}
			</div>
		</div>
	);
};

export default CommentItem;
