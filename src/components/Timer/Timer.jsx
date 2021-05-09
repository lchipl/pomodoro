import React, { useState } from 'react';
import './Timer.css';

export const Timer = () =>{
    const [stopWatch, setStopWatch] = useState({
        minutes:1,
        seconds:0,
        active:'active',
        status:0
    })
    const [interval,setInterv] = useState()
    React.useEffect(()=>{
        clearInterval(interval)
        setStopWatch((state)=>{
            return{
                ...state,
                minutes:1,
                seconds:0,
            }
        })
    },[stopWatch.active])
    const handleTask = (event) =>{
        
       
    }
    // const handleStart = () =>{
    //  let  timer =   setInterval(()=>
    //         setTask(()=>{
                
    //             task.work +=1
    //         }),1000
    //     )
    // }
    let  
    updMinutes = stopWatch.minutes,
    updSeconds = stopWatch.seconds,
    updActive =  stopWatch.active

    
    const handleRun = () =>{
        
        
            if(updSeconds===0){
                updMinutes--;
                updSeconds=59
            }
            else{
                updSeconds--
            }
    
            if(updMinutes ===0&&updSeconds===0){
                    
                        updActive = 'done'
                    
                    
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