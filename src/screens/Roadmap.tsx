import BackButton from '../components/BackButton';
import AddFeedbackButton from '../components/FeedbackButton';

import data from '../data.json';
import RoadmapItem from '../components/RoadmapItem';

const Roadmap = () => {
	return (
		<div className='Roadmap'>
			<header>
				<div>
					<BackButton color='Primary' />
					<h1>Roadmap</h1>
				</div>
				<AddFeedbackButton type='add' />
			</header>
			<div className='Container'>
				<div className='RoadmapColumn'>
					<div className='ColumnTitle'>
						<h3>Planned (2)</h3>
						<p>Ideas prioritized for research</p>
					</div>
					{data[0].productRequests
						.filter((item) => item.status === 'planned')
						.map((item, key) => (
							<RoadmapItem
								key={key}
								status={item.status}
								title={item.title}
								description={item.description}
								feature={item.category}
								upvote={item.upvotes}
								comments={item.comments?.length || 0}
							/>
						))}
				</div>
				<div className='RoadmapColumn'>
					<div className='ColumnTitle'>
						<h3>In-Progress (2)</h3>
						<p>Currently being developed</p>
					</div>
					{data[0].productRequests
						.filter((item) => item.status === 'in-progress')
						.map((item, key) => (
							<RoadmapItem
								key={key}
								status={item.status}
								title={item.title}
								description={item.description}
								feature={item.category}
								upvote={item.upvotes}
								comments={item.comments?.length || 0}
							/>
						))}
				</div>
				<div className='RoadmapColumn'>
					<div className='ColumnTitle'>
						<h3>Live (2)</h3>
						<p>Released features</p>
					</div>
					{data[0].productRequests
						.filter((item) => item.status === 'live')
						.map((item, key) => (
							<RoadmapItem
								key={key}
								status={item.status}
								title={item.title}
								description={item.description}
								feature={item.category}
								upvote={item.upvotes}
								comments={item.comments?.length || 0}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
