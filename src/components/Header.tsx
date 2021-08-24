import { ReactComponent as Icon } from '../assets/icon-suggestions.svg';
import { ReactComponent as Plus } from '../assets/icon-plus.svg';

const Header = ({ totalSuggestions }: any) => {
	return (
		<div className='Header'>
			<Icon />
			<p>{totalSuggestions} Suggestions</p>
			<div className='Selection'>
				<p>Sort by:</p>
				<select name='' id=''>
					<option value=''>Most Upvotes</option>
					<option value=''>Least Upvotes</option>
					<option value=''>Most Comments</option>
					<option value=''>Least Comments</option>
				</select>
			</div>
			<button>
				<Plus /> Add Feedback
			</button>
		</div>
	);
};

export default Header;
