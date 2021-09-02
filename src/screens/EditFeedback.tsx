import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

import { ReactComponent as Pen } from '../assets/icon-edit-feedback.svg';

import data from '../data.json'; //Remove when Context is implemented

interface ParamProps {
	id: string;
}

const EditFeedback = () => {
	const history = useHistory();
	const { id } = useParams<ParamProps>();

	const itemDetails = data[0].productRequests.find(
		(item) => item.id === Number(id)
	);

	const initialForm = {
		title: itemDetails?.title,
		category: itemDetails?.category,
		status: itemDetails?.status,
		description: itemDetails?.description,
	};

	const [form, setForm] = useState(initialForm);

	const onChangeHandler = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e: any) => {
		// console.log(e);
	};

	return (
		<div className='EditFeedback'>
			<BackButton color='Secondary' />
			<form onSubmit={onSubmitHandler}>
				<Pen />
				<h1>Editing '{form.title}'</h1>
				<label htmlFor='title'>
					<h4>Feedback Title</h4>
					<p>Add a short, descriptive headline</p>
				</label>
				<input
					type='text'
					name='title'
					id='title'
					value={form.title}
					onChange={onChangeHandler}
				/>
				<label htmlFor='category'>
					<h4>Category</h4>
					<p>Choose a category for your feedback</p>
				</label>
				<select
					name='category'
					id='category'
					value={form.category}
					onChange={onChangeHandler}>
					<option value='feature'>Feature</option>
					<option value='ui'>UI</option>
					<option value='ux'>UX</option>
					<option value='enhancement'>Enhancement</option>
					<option value='bug'>Bug</option>
				</select>
				<label htmlFor='status'>
					<h4>Update Status</h4>
					<p>Change feedback state</p>
				</label>
				<select name='status' id='status' value={form.status} onChange={onChangeHandler}>
					<option value='suggestion'>Suggestion</option>
					<option value='planned'>Planned</option>
					<option value='in-progress'>In-Progress</option>
					<option value='live'>Live</option>
				</select>
				<label htmlFor='detail'>
					<h4>Feedback Detail</h4>
					<p>
						Include any specific comments on what should be imporved, added,
						etc.
					</p>
				</label>
				<textarea
					name='detail'
					id='detail'
                    value={form.description}
					onChange={onChangeHandler}></textarea>
				<div className='Buttons'>
					<button type='button'>Delete</button>
					<button type='button' onClick={() => history.goBack()}>
						Cancel
					</button>
					<button type='submit'>Add Feedback</button>
				</div>
			</form>
		</div>
	);
};

export default EditFeedback;
