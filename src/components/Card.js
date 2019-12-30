import React from 'react';

const Card = ({name, email, id}) => {	// destructuring or you anc write props instead just uncomment below line
	// const {name, email, id} = props;
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?200X200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
