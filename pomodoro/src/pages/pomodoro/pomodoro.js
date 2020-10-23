import React,{Component} from 'react';
import './pomodoro.css';
import {Timer} from '../../components/timer/timer';
export class Pomodoro extends Component{


    render(){
        
        return(
            <div className='main'>
                
                <Timer className='timer'/>
                Помидорка, детка
            </div>
        )
    }
}