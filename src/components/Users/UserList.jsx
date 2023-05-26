import React from 'react';
import { styled } from 'styled-components';
import Card from '../UI/Card';

const Users = styled.div`
 {
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;
  }
  
  & ul {
    list-style: none;
    padding: 1rem;
  }
  
  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 10px;
  }
`
const UserList = (props) => {
  return (
    <Users>
      <Card>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>{user.name} ({user.age} years old) </li>
          ))}
        </ul>
      </Card>
    </Users>
  )
}

export default UserList;
