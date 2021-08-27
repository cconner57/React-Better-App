import { ReactComponent as Empty } from '../assets/illustration-empty.svg';
import { ReactComponent as Plus } from '../assets/icon-plus.svg';

const NoFeedback = () => {
    return (
        <div className='NoFeedback'>
            <Empty />
            <h1>There is no feedback yet.</h1>
            <p>Got a suggestion? Found a bug that needs to be squashed?</p>
            <p>We love hearing abour new ideas to imrpove our app</p>
            <button>
				<Plus /> Add Feedback
			</button>
        </div>
    )
}

export default NoFeedback
