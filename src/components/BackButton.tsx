import { ReactComponent as BackIcon } from '../assets/icon-arrow-left.svg';
import { useHistory } from 'react-router-dom';

const BackButton = ({ color }: { color: string }) => {
	const history = useHistory();

	return (
		<div className='BackButton' onClick={() => history.goBack()}>
			<BackIcon className={color === 'Primary' ? 'Primary' : ''} />
			<h4
				style={
					color === 'Primary'
						? { color: 'hsl(0,0%,100%)' }
						: { color: 'hsl(224,20%,49%)' }
				}>
				Go Back
			</h4>
		</div>
	);
};

export default BackButton;
