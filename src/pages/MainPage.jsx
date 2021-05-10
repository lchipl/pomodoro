import React from 'react';
import Container from '@material-ui/core/Container';
import './MainPage.css';
import { Timer } from '../components/Timer/Timer';
import { TimerList } from '../components/TimerList/TimerList';
import { DayHistory } from '../components/DayHistory/DayHistory';

export const MainPage = () =>{
    const [pomodoroItems, setPomidoroItems] = React.useState([
        {
            date:'date',
            value: ' значение'
        }
    ])
    return(
        <React.Fragment>
      <Container maxWidth="lg">
        <section    className='SectionWrapper'>
            <div    className='SectionBox'>
                <Timer setPomidoroItems={setPomidoroItems}/>
                <TimerList items={pomodoroItems}/>
            </div>
            <div    className='SectionBox'>
                <DayHistory />
            </div>
            <div    className='SectionBox'>
                иконка и цели на день
            </div>
        </section>
      </Container>
    </React.Fragment>
    )
}