import React from 'react';
import styled from 'styled-components';

const CardUser = styled.div`
 background:white;
 box-shadow: 0 2px 8px rgba(0,0,0,0.28);
 border-radius: 10px;
 color: black;
 width:50%;
 padding:1rem;
 margin: 0 auto;
 margin-top:2rem; 
`

const Card = (props) => {
  return (
    <CardUser>
      {props.children}
    </CardUser>
  )
}

export default Card
