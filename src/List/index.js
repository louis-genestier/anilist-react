import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Item from '../Item/index';
import CardColumns from 'react-bootstrap/CardColumns';
import Spinner from 'react-bootstrap/Spinner';

const GET_ANIMES = gql`
  query getAnimes($title: String!) {
    Page (page: 1 perPage: 10) {
      media(sort: POPULARITY_DESC search: $title) {
        id
        episodes
        averageScore
        genres
        title {
          english
          romaji
        }
        coverImage {
          large
          color
        }
      }
    }
  }
`;

const List = ({ title }) => {
  const { loading, error, data } = useQuery(GET_ANIMES, {
    variables: { title }
  });
  
  if (loading) return <Spinner animation="grow"/>;
  if (error) return <p>Error</p>;
  console.log(data.Page.media);

  return (
    <CardColumns>
      { data.Page.media.map(media => <Item key={ media.id } data={ media }/>) }
    </CardColumns>
  )
}

export default List;