interface RoadmapProps {
	planned: number;
	inProgress: number;
	live: number;
}

const Roadmap = ({ planned, inProgress, live }: RoadmapProps) => {
	return (
		<div className='Roadmap'>
			<section>
				<h1>Roadmap</h1>
				<p>View</p>
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
