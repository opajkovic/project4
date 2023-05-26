import React from 'react';
import { styled } from 'styled-components';

const ButtonUI = styled.button`
{
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  border-radius: 4px;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
}
&:hover,
&:active {
  background: #741188;
  border-color: #741188;
}
&:focus {
  outline: none;
}
`

const Button = (props) => {
  return (
    <ButtonUI type={props.type || 'button'} style={{padding: '0.5rem 1rem', font:'inherit'}}>
      {props.children}
    </ButtonUI>
  )
}

export default Button;
