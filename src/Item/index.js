import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Badge from 'react-bootstrap/Badge';

const Item = ({ data }) => {

  let classnameBadge = 'danger';
  if (data.averageScore > 40 && data.averageScore < 70) classnameBadge = 'warning';
  if (data.averageScore >= 70) classnameBadge = 'success';

  return (
    <Card>
      <Card.Img variant="top" src={ data.coverImage.large }/>
      <Card.Body>
        <Card.Title>{ data.title.english } <Badge variant={ classnameBadge }>{ data.averageScore }/100</Badge></Card.Title>
        <Card.Subtitle className="text-muted">{ data.title.romaji }</Card.Subtitle>
      </Card.Body>
      <ListGroup>
        <ListGroupItem><strong>Episodes:</strong> { data.episodes }</ListGroupItem>
        <ListGroupItem>{ data.genres.map(genre => <Badge pill variant='info'>{ genre }</Badge>) }</ListGroupItem>
      </ListGroup>
    </Card>
)};

export default Item;
