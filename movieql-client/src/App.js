import React, { Component } from 'react';
import { HashRouter , Route} from "react-router-dom"; 
import { ApolloProvider } from 'react-apollo';
import client from "./apolloClient";
import Home from "./Home";
import Details from "./Details";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Details} />
        </HashRouter>
      </ApolloProvider>
    )
  }
}
