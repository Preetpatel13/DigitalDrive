import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Register() {
const navigate = useNavigate();

    return (
    <div>
    <div>
      <StyledButton onClick={()=> navigate('/login')}> login </StyledButton>
      </div>

    </div>
  )
}

export default Register


const StyledButton = styled.button`

margin-top:10px;
color:red;
background-color:blue; 



`
