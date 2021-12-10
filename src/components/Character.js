// Write your Character component here
import React from 'react';

export default function Character(props) {
    return (
        <div className='character-container'>
            <button className='name'>{props.name}</button>
        </div>
    )
}