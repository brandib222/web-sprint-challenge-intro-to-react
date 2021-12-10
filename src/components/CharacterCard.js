import React from 'react';

const CharacterCard = (props) => {

    return(
    <div className='card-container'>
        <h1 className='name'>{props.data.name}</h1>
        <h2 className='birth-year'>{props.data.birth_year}</h2>
        <h2 className='films'>{props.data.films}</h2>
    </div>

    )
}

export default CharacterCard;