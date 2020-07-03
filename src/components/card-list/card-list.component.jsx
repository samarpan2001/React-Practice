import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList=props=>{
   return  <div className='card-list'>
    {
        props.books.map(book=>(
            <Card key={book.id} book={book}/>))
    }
    </div>
}

/* Props is any attribute that is defined as an attribute in  the  JSX file   */