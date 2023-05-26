import React, { useState } from 'react';
import Card from '../UI/Card';
import { styled } from 'styled-components';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal'

const Form = styled.form`
 {
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
}

& label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

& input {
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 1rem;
  border-radius:4px;
}

& input:focus {
  outline: none;
  border-color: #4f005f;
}
`



const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value)
  }

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age, non empty values'
      });
      return;
    }
    if (+userAge < 0) {
      setError({
        title: 'invalid age',
        message: 'Please enter a valid age'
      });
      setUserAge('')
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  }

  const errorHandler = () => {
    setError(null);
  }
  return (
    <>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card>
        <Form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={userName} onChange={userNameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="text" value={userAge} onChange={userAgeChangeHandler} />
          <Button type="submut">  Add User  </Button>
        </Form>
      </Card>
    </>
  )
}

export default AddUser
