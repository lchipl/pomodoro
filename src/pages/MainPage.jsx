import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './MainPage.css';
import { Timer } from '../components/Timer/Timer';

export const MainPage = () =>{
    return(
        <React.Fragment>
      <Container maxWidth="lg">
        <section    className='SectionWrapper'>
            <div    className='SectionBox'>
                <Timer />
            </div>
            <div    className='SectionBox'>
                день
            </div>
            <div    className='SectionBox'>
                иконка и цели на день
            </div>
        </section>
      </Container>
    </React.Fragment>
    )
}