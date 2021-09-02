import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../components/BackButton';

import { ReactComponent as NewIcon } from '../assets/icon-new-feedback.svg';

const NewFeedback = () => {
	const initialForm = {
		title: '',
		category: 'feature',
		details: '',
	};

	const [form, setForm] = useState(initialForm);
	const history = useHistory();

	const onChangeHandler = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e: any) => {
		// console.log(e);
	};

	return (
		<div className='NewFeedback'>
			<BackButton color='Secondary' />
			<form onSubmit={onSubmitHandler}>
				<NewIcon />
				<h1>Create New Feedback</h1>
				<label htmlFor='title'>
					<h4>Feedback Title</h4>
					<p>Add a short, descriptive headline</p>
				</label>
				<input type='text' name='title' id='title' onChange={onChangeHandler} />
				<label htmlFor='category'>
					<h4>Category</h4>
					<p>Choose a category for your feedback</p>
				</label>
				<select name='category' id='category' onChange={onChangeHandler}>
					<option value='feature'>Feature</option>
					<option value='ui'>UI</option>
					<option value='ux'>UX</option>
					<option value='enhancement'>Enhancement</option>
					<option value='bug'>Bug</option>
				</select>
				<label htmlFor='detail'>
					<h4>Feedback Detail</h4>
					<p>Add a short, descriptive headline</p>
				</label>
				<textarea
					name='detail'
					id='detail'
					onChange={onChangeHandler}></textarea>
				<div className='Buttons'>
					<button type='button' onClick={() => history.goBack()}>
						Cancel
					</button>
					<button type='submit'>Add Feedback</button>
				</div>
			</form>
		</div>
	);
};

export default NewFeedback;
