// import UpArrow from '../assets/icon-arrow-up.svg';
import { ReactComponent as UpArrow} from '../assets/icon-arrow-up.svg'

const Upvote = ({ votes }: any) => {
	return (
		<div className='Upvote'>
			<UpArrow />
			<p>{votes}</p>
		</div>
	);
};

export default Upvote;
