import React from "react";
import  "./header.css";

export const Header = () =>{
    return(
        <header className='header'>
            <ul className='headerList'>
                <li>Главная</li>
                <li className='headerReadOnly'>ReadOnly</li>
                <li className='headerLoginIn'>Login In</li>
            </ul>
        </header>
    )
}