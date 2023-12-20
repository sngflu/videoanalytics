import React from 'react';
import './about.css'
import cctv from '../../../assets/about/cctv.svg'
import shield from '../../../assets/about/shield.svg'
function About() {
    return (
        <div className='about'>
            <img src={shield} alt="shield" className='shield' />
            <img src={cctv} alt="cam" className='cam' />

            <p className='wnva'>
                Что такое Narfu video analytics?
            </p>
            <p className='nva'>
                NVA - это локальная программа для видеоаналитики.
            </p>
        </div>
    );
}

export default About;