// Write your Character component here

import React from 'react';
import styled from 'styled-components';
import '../App.css';

const StyledCharacter = styled.div
`
button {
    font-size: 50px;
    width:500px;
    color:white;
    border-radius: 10px;
    padding:10%;
    background-image: url('https://images.unsplash.com/photo-1530508777238-14544088c3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3V0ZXIlMjBzcGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    background-size: cover;
    display:flex;
    margin: 3% 0%;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 30px;
}
`
export default function Character(props) {

    return (
        <StyledCharacter>
            <div className='btn-container'>
                <button className='name'>{props.name}</button>
            </div>
        </StyledCharacter>
        )
    }