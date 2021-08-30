import { Link } from 'react-router-dom';

interface RoadmapProps {
	planned: number;
	inProgress: number;
	live: number;
}

const Roadmap = ({ planned, inProgress, live }: RoadmapProps) => {
	return (
		<div className='RoadmapModule'>
			<section>
				<h1>Roadmap</h1>
				<Link to='roadmap'>View</Link>
			</section>
			<section className='Filter'>
				<div className='Dot' />
				<p>Planned</p>
				<p>{planned}</p>
			</section>
			<section className='Filter'>
				<div className='Dot' />
				<p>In-Progress</p>
				<p>{inProgress}</p>
			</section>
			<section className='Filter'>
				<div className='Dot' />
				<p>Live</p>
				<p>{live}</p>
			</section>
		</div>
	);
};

export default Roadmap;
