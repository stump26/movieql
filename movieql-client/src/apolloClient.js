import ApolloClient from "apollo-boost";
import App from "./App";

const client = new ApolloClient({
    uri:"http://localhost:4000"
})

export default client;