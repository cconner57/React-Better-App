import React from 'react';

import UpArrow from '../assets/icon-arrow-up.svg';

const Upvote = ({ votes }: any) => {
	return (
		<div className='Upvote'>
			<img src={UpArrow} alt='Up Arrow' />
			<p>{votes}</p>
		</div>
	);
};

export default Upvote;
