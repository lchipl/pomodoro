import React from 'react';
import './ListItem.css';

export const ListItem = ({elem}) =>{
    return(
        <div className='ListItemWrapper'>
            <div    className='ListItem' >{elem.date}</div>
            <div    className='ListItem'>{elem.value}</div>
        </div>
    );
}