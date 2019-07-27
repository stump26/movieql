import { getMovies, getById, addMovie, deleteMovie } from "./db"; 

const resolvers = {
	Query: {
		Movies: ()=>getMovies(),
		Movie: (_, { id })=>getById(id)
	},
	Mutation:{
		addMovie: (_, {name, score}) =>addMovie(name,score),
		deleteMovie:(_, {id})=> deleteMovie(id)
	}
};

export default resolvers;