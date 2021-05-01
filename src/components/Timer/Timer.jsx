import React from 'react';

export const Timer = () =>{
    return(
        <div className='Timer'>
            <h3>25:00</h3>
            <button>Старт</button>
            <button>Стоп</button>
            <form>
            <input type='text' />
            <button>Сохранить</button>
            </form>
        </div>
    )
}