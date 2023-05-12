import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/home';
import LoginPage from './components/pages/login';
import AddProduce from './components/pages/addproduce';

import style from "./components/Style/Style.css";
//style for 404 page

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});
// Construct our main GraphQL API endpoint


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//route and app builder

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
<div  className="fullPage">
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/addproduce' element={< AddProduce />} />
            <Route path='*' render={() => <h1>404 Error!</h1>} />
          </Routes>
          </div>
          <Footer /></div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
