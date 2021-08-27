import { ReactComponent as Icon } from '../assets/icon-suggestions.svg';
import { ReactComponent as Plus } from '../assets/icon-plus.svg';

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
			<button>
				<Plus /> Add Feedback
			</button>
		</div>
	);
};

export default Header;
