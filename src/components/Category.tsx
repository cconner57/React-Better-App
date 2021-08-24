import { useState } from 'react';

const Category = () => {
	const [category, setCategory] = useState('All');

	return (
		<div className='Category'>
			<div
				className={`${category === 'All' && 'Active-Category'}`}
				onClick={() => {
					setCategory('All');
				}}>
				<h1>All</h1>
			</div>
			<div
				className={`${category === 'UI' && 'Active-Category'}`}
				onClick={() => {
					setCategory('UI');
				}}>
				<h1>UI</h1>
			</div>
			<div
				className={`${category === 'UX' && 'Active-Category'}`}
				onClick={() => {
					setCategory('UX');
				}}>
				<h1>UX</h1>
			</div>
			<div
				className={`${category === 'Enhancement' && 'Active-Category'}`}
				onClick={() => {
					setCategory('Enhancement');
				}}>
				<h1>Enhancement</h1>
			</div>
			<div
				className={`${category === 'Bug' && 'Active-Category'}`}
				onClick={() => {
					setCategory('Bug');
				}}>
				<h1>Bug</h1>
			</div>
			<div
				className={`${category === 'Feature' && 'Active-Category'}`}
				onClick={() => {
					setCategory('Feature');
				}}>
				<h1>Feature</h1>
			</div>
		</div>
	);
};

export default Category;
