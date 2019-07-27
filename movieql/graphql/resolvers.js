import { getMovies, getMovieById, getSuggestionsById } from "./db"; 

const resolvers = {
	Query: {
		Movies: (_,{rating, limit})=>getMovies(limit, rating),
		detailMovie:(_,{id})=>getMovieById(id),
		suggestions:(_,{id})=>getSuggestionsById(id),
	},
};

export default resolvers; 