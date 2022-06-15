import React from 'react';

import ExchangeRate from '../../components/ExchangeRate/ExchangeRate';

import './Home.css';
  
const About = () => {
  return (
    <div className='home-container'>
      <div className='home-container-h1'>
        <h1>Want to make some money?</h1>
      </div>
      <div className='exchange-rate-div'>
        <ExchangeRate />
      </div>

    </div>
  );
};
  
export default About;