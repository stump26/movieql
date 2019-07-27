import React from 'react'
import { Query } from "react-apollo"
import { Link } from 'react-router-dom'

import MovieCard from './MovieCard'
import { MOVIE_DETAILS } from './queries'

const DetailMovieInfo =({ 
	data:{title, medium_cover_image, rating, description_intro}
})=>{
	return(
		<>
			<h1>{title}</h1>
			<h4>{rating}</h4>
			<div id="movie-poster">
				<img src={medium_cover_image} alt={title}/>
			</div>
			<div id="description">
				{description_intro}
			</div>
		</>
	);
}

const Detail = ({
	match: {
		params:{ movieId }
	} 
})=>{
	return (
		<Query query={MOVIE_DETAILS} variables={{ movieId: Number(movieId) }}> 
			{
				({loading, error,data})=>{
					if(loading) return <span>loading</span>;
					if(error){ 
						console.log(error);
						return <span>something happend</span>;
					}
					if(data){
						console.log(data)
						const { detailMovie, suggestions } = data
						console.log(suggestions)
						const suggestionsList=suggestions.map(movie=>
							<Link to={`/details/${movie.id}`}>
								<MovieCard 
									key={movie.id} 
									title={movie.title} 
									rating={movie.rating}
									image_url={movie.medium_cover_image}
								/>
							</Link>
						)
						return (
						<>
							<DetailMovieInfo 
								data={detailMovie}
							/>
							<div id="suggestions-list">
								<h1>suggestions</h1>
								{ suggestionsList }
							</div>
						</>
						)
					}
				}
			}
		</Query>
	)
}


export default Detail;