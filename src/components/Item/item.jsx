import './item.css'

import React from 'react';

export const Item = ({info}) =>{
    return(
        <a href='' className='product'>
            <img src={info.image} alt="" />
            <p>{info.tittle}</p>
        </a>
    );
}