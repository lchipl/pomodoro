import React, { useState } from 'react';
import './Timer.css';

export const Timer = (props) =>{
    const [stopWatch, setStopWatch] = useState({
        minutes:0,
        seconds:10,
        active:'active',
        status:0
    })
    const [interval,setInterv] = useState()
    const [listElement, setlistElement] = useState('')
  
    let  
    updMinutes = stopWatch.minutes,
    updSeconds = stopWatch.seconds,
    updActive =  stopWatch.active

    
    const handleRun = () =>{
        
            if(updMinutes ===0&&updSeconds===0){
                clearInterval(interval)
               
                
            }
            else if(updSeconds===0){
                updMinutes--;
                updSeconds=59
            }
            else{
                updSeconds--
            }
        return setStopWatch({minutes:updMinutes,   seconds:updSeconds,  active:updActive})
        
    }
    
    const handleStart  =() =>{
        
       
       
        clearInterval(interval)
        setInterv(setInterval(handleRun,1000))
    }

    const handleStop = () =>{
        clearInterval(interval)
    }

    const handleChange = (event) =>{
        console.log(listElement)
        setlistElement(event.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(listElement.trim()){
        props.setPomidoroItems(({arr})=>{
            const newArr = [...arr];
            newArr.push({
                date:Date.now(),
                value:listElement
            })
            setlistElement('')
            return {
                arr:newArr
            }
        })
    }
    }
    return(
        <div className='Timer'>
            <div className='timerLogo'>
                <h3 >
                     {stopWatch.minutes>=10?stopWatch.minutes:'0'+stopWatch.minutes}
                     :
                     {stopWatch.seconds>=10?stopWatch.seconds:'0' + stopWatch.seconds} 
                     <br />
                     {stopWatch.active}
                </h3>
            </div>
            
            <div style={{display:'flex'}}>
            <button  className='btn'    onClick={handleStart}>Старт</button>
            <button className='btn' onClick={handleStop}>Стоп</button>
            </div>
           
           
            
            <form onSubmit={handleSubmit}>
            <select className='timerSelect'></select>
            <input
                value={listElement}
                onChange={handleChange}
                className='timerInput'
                type='text'
                placeholder='что сделал'
             />
            <button className='btnSave'>Сохранить</button>
            </form>

        </div>
    )
}