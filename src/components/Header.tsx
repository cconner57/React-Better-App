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
					<option value='1'>Most Upvotes</option>
					<option value='2'>Least Upvotes</option>
					<option value='3'>Most Comments</option>
					<option value='4'>Least Comments</option>
				</select>
			</div>
			<button>
				<Plus /> Add Feedback
			</button>
		</div>
	);
};

export default Header;
