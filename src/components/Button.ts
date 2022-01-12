import styled from "styled-components"

export const Button = styled.button`
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  background: transparent;
  padding: 5px;
  border-radius: 2px;
  font-size: 15px;
  width: 100%;
  
  &:hover {
    cursor: pointer;
  }

`