import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import SearchForm from './SearchForm/index';
import List from './List/index';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
});

function App() {

  const [searchTerm, setSearchTerm] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <ApolloProvider client={client} className="App">
      <Container>
        <SearchForm 
          value={ searchTerm }
          handleInputChange={ handleInputChange }
          handleFormSubmit={ handleFormSubmit }
        />

        { isSubmitted ? (
          <List 
            title={ searchTerm }
          />
        ) : (
          <Jumbotron>
            <h1>React front-end fetching data from <a href="https://anilist.co/">Anilist</a> using GraphQL</h1>
            <p>Thanks to Anilist for providing their <a href="https://anilist.gitbook.io/anilist-apiv2-docs/">API</a>.</p>
          </Jumbotron>
        )}
      </Container>
    </ApolloProvider>
  );
}

export default App;
