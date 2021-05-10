import React from 'react';
import { ListItem } from '../ListItem/ListItem';

export const TimerList = ({items}) =>{
    return(
        <div>
            {items.map((elem,index)=><li key={index}><ListItem elem={elem}/></li>)}
        </div>
    )
}