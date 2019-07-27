import { getMovies } from "./db"; 

const resolvers = {
	Query: {
		Movies: (_,{rating, limit})=>getMovies(limit, rating),
	},
};

export default resolvers; 