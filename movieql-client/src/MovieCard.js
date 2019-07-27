import React from 'react'

const MovieCard = (props)=>{
	const {key, title, rating, image_url} = props;
	const cardSttle = {
		display:'inline-block',
		maring: '10px',
		width: '250px',
	}
	return(
		<div key={key} style={cardSttle}>
			<h2>
				{title} / {rating} 
			</h2>
			<img src={image_url} alt={title}/>
		</div>
	);
}

export default MovieCard;