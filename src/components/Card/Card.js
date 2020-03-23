import React from 'react';
import './Card.css';

const Card = ({ monster }) => {
    const { id, name, email } = monster;
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=202x180`} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

export default Card;
