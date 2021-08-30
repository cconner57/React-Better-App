import CommentTotal from './CommentTotal';
import Upvote from './Upvote';

interface RoadmapItemProps {
	status: string;
	title: string;
	description: string;
	feature: string;
	upvote: number;
	comments: number;
}

const RoadmapItem = ({
	status,
	title,
	description,
	feature,
	upvote,
	comments,
}: RoadmapItemProps) => {
	return (
		<div
			className='RoadmapItem'
			style={
				status === 'planned'
					? { borderTop: '6px solid hsl(14, 83%, 74%)' }
					: status === 'in-progress'
					? { borderTop: '6px solid hsl(282, 83%, 52%)' }
					: { borderTop: '6px solid hsl(204, 94%, 68%)' }
			}>
			<div className='Filter'>
				<div
					className='Dot'
					style={
						status === 'planned'
							? { backgroundColor: 'hsl(14, 83%, 74%)' }
							: status === 'in-progress'
							? { backgroundColor: 'hsl(282, 83%, 52%)' }
							: { backgroundColor: 'hsl(204, 94%, 68%)' }
					}
				/>
				<p>{status}</p>
			</div>
			<h3>{title}</h3>
			<p className='Description'>{description}</p>
			<div className='CategoryItem'>
				<h1>{feature}</h1>
			</div>
			<div className='FeedbackCount'>
				<Upvote votes={upvote} direction='row' />
				<CommentTotal comments={comments} />
			</div>
		</div>
	);
};

export default RoadmapItem;
