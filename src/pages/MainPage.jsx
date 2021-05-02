import React from 'react';
import Container from '@material-ui/core/Container';
import './MainPage.css';
import { Timer } from '../components/Timer/Timer';
import { TimerList } from '../components/TimerList/TimerList';
import { DayHistory } from '../components/DayHistory/DayHistory';

export const MainPage = () =>{
    return(
        <React.Fragment>
      <Container maxWidth="lg">
        <section    className='SectionWrapper'>
            <div    className='SectionBox'>
                <Timer />
                <TimerList />
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