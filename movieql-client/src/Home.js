import React from 'react'
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom'

import MovieCard from './MovieCard'
import { HOME_PAGE } from './queries';

const Detail = ()=>{
	return (
		<Query query={ HOME_PAGE }>
			{
				({ loading, data, error })=>{
					if(loading)  return <span>loading</span>;
					if(error){ 
						console.log(error);
						return <span>something happend</span>;
					}
					if(data){
						return (
							data.Movies.map(movie => {
								return(
									<Link to={`details/${movie.id}`}>
										<MovieCard 
											key={movie.id} 
											title={movie.title} 
											rating={movie.rating}
											image_url={movie.medium_cover_image}
										/>
									</Link>
								)
							}	
						));
					}
				}
			}
		</Query>	
	)
}

export default Detail;