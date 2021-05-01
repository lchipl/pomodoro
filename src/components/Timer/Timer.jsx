import React, { useState } from 'react';
import './Timer.css';

export const Timer = () =>{
    const [task, setTask] = useState('')

    const handleTask = (event) =>{
        
        setTask(event.target.value)
        console.log(task)
    }
    return(
        <div className='Timer'>
            <div className='timerLogo'>
                 <h3 >25:00</h3>
            </div>
            <div style={{display:'flex'}}>
                <button className='btn'>Старт</button>
                <button className='btn'>Стоп</button>
            </div>
            <form>
            <select className='timerSelect'></select>
            <input 
                onChange={handleTask}
                className='timerInput'
                type='text'
                placeholder='что сделал'
             />
            <button className='btnSave'>Сохранить</button>
            </form>
        </div>
    )
}