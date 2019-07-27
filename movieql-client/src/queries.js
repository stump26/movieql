import gql from 'graphql-tag';

export const HOME_PAGE = gql`
	{
		Movies(limit: 50, rating:7){
			id
			title
			genres
			rating
			medium_cover_image
		}
	}
`;

export const MOVIE_DETAILS = gql`
	query getMovieDetails($movieId: Int!){
		detailMovie(id:$movieId){
			id
			title
			rating
			language
			genres
			year
			runtime
			description_intro
			medium_cover_image
		}
		suggestions(id:$movieId){
			id
			title
			rating
			medium_cover_image
		}
	}
`;