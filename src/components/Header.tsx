import FeedbackButton from './FeedbackButton';

import { ReactComponent as Icon } from '../assets/icon-suggestions.svg';

interface HeaderProps {
	totalSuggestions: number;
	setSort: (sort: string) => void;
}

const Header = ({ totalSuggestions, setSort }: HeaderProps) => {
	return (
		<div className='Header'>
			<Icon />
			<p>{totalSuggestions} Suggestions</p>
			<div className='Selection'>
				<p>Sort by:</p>
				<select onChange={(e) => setSort(e.target.value)}>
					<option value='Most Upvotes'>Most Upvotes</option>
					<option value='Least Upvotes'>Least Upvotes</option>
					<option value='Most Comments'>Most Comments</option>
					<option value='Least Comments'>Least Comments</option>
				</select>
			</div>
			<FeedbackButton type='add' />
		</div>
	);
};

export default Header;
