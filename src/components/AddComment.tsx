import { useState } from 'react';

const AddComment = () => {
	const [wordLength, setWordLength] = useState(250);
	const [form, setForm] = useState('');

	const handleSubmit = (e: any) => {
		setForm(e.target.value);
	};

	console.log(form);

	return (
		<form className='AddComment' onSubmit={handleSubmit}>
			<h3>Add Comment</h3>
			<textarea
				name=''
				id=''
				maxLength={250}
				placeholder='Type your comment here'
				onChange={(e) => setWordLength(() => 250 - e.target.value.length)}
			/>
			<div className='Submission'>
				<p>{wordLength} Characters left</p>
				<button>Post Comment</button>
			</div>
		</form>
	);
};

export default AddComment;
