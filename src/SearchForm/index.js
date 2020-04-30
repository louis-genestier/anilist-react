import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const SearchForm = ({ value, handleInputChange, handleFormSubmit }) => {
  return (
    <Form onSubmit={ handleFormSubmit }>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter the anime you want to search"
          aria-label="Enter the anime you want to search"
          type="text"
          value={ value } 
          onChange={ handleInputChange }
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit" disabled={ !value }>Search !</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default SearchForm;