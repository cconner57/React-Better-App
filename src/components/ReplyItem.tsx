interface ReplyProps {
	content: string;
	replyingTo: string;
	user: {
		image: string;
		name: string;
		username: string;
	};
}

const ReplyItem = ({ reply }: any) => {
	return (
		<div className='ReplyItem'>
			<img src={process.env.PUBLIC_URL + `${reply.user.image}`} alt='Profile' />
			<div className='ReplyItem-Container'>
				<div className='ReplyItem-Header'>
					<div className='ReplyItem-Contact'>
						<h3>{reply.user.name}</h3>
						<p>@{reply.user.username}</p>
					</div>
					<p>Reply</p>
				</div>
				<p>
					<span>@{reply.replyingTo}</span> {reply.content}
				</p>
			</div>
		</div>
	);
};

export default ReplyItem;
