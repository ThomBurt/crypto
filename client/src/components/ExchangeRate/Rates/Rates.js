import React from 'react';

import './Rates.css'

const Rates = (props) => {
    //console.log(props)
    return(
        <div className='props-rates'>
        <p>{props.rates}</p>
        </div>
    )
}

export default Rates;