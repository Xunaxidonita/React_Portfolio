import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const httpLink = createHttpLink({
  url: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={MainPage} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
