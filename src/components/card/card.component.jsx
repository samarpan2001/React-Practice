import React from 'react';
import './card.styles.css';
export const Card=props=>(
    <div className='card-container'>
        <img alt='book' src={`https://robohash.org/${props.book.id}?set=set2`}/ >
        <h1>{props.book.name}</h1>
    </div>
);