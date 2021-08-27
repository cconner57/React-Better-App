import { useState } from 'react';
import Header from '../components/Header';
import Roadmap from '../components/Roadmap';
import CategoryList from '../components/CategoryList';
import Banner from '../components/Banner';
import FeedbackItem from '../components/FeedbackItem';
import NoFeedback from '../components/NoFeedback';

import data from '../data.json';
console.log(
	data[0].productRequests.filter((item) => item.category === 'feature')
);

const Home = () => {
	const [category, setCategory] = useState('all');
	const [sort, setSort] = useState('Most Upvotes');

	const sortListItems = (sortType: string): any => {
		if (sortType === 'Most Upvotes') {
			return (a: { upvotes: number }, b: { upvotes: number }): any =>
				b.upvotes - a.upvotes;
		} else if (sortType === 'Least Upvotes') {
			return (a: { upvotes: number }, b: { upvotes: number }): any =>
				a.upvotes - b.upvotes;
		} else if (sortType === 'Most Comments') {
			return (a: any, b: any): any => b?.comments.length - a?.comments.length;
		} else if (sortType === 'Least Comments') {
			return (a: any, b: any): any => a?.comments.length - b?.comments.length;
		}
	};
	console.log(sortListItems(sort));
	return (
		<div className='Home'>
			<aside>
				<Banner />
				<CategoryList category={category} setCategory={setCategory} />
				<Roadmap planned={2} inProgress={3} live={1} />
			</aside>
			<main>
				<Header
					totalSuggestions={data[0].productRequests.length}
					setSort={setSort}
				/>
				{category === 'all' ? (
					data[0].productRequests.sort(sortListItems(sort)).map((item): any => {
						return (
							<FeedbackItem
								key={item.id}
								itemData={item}
								setCategory={setCategory}
							/>
						);
					})
				) : data[0].productRequests.filter((item) => item.category === category)
						.length !== 0 ? (
					data[0].productRequests
						.filter((item) => item.category === category)
						.map((item): any => {
							return (
								<FeedbackItem
									key={item.id}
									itemData={item}
									setCategory={setCategory}
								/>
							);
						})
				) : (
					<NoFeedback />
				)}
			</main>
		</div>
	);
};

export default Home;
