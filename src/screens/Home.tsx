import CommentTotal from '../components/CommentTotal';
import Header from '../components/Header';
import Upvote from '../components/Upvote';
import Roadmap from '../components/Roadmap';
import Category from '../components/Category';
import Banner from '../components/Banner';

const Home = () => {
	return (
		<div>
			<Header totalSuggestions='6'/>
			<Upvote votes='3' />
			<CommentTotal comments='4' />
			<Banner />
			<Category />
			<Roadmap planned={2} inProgress={3} live={1} />
		</div>
	);
};

export default Home;
