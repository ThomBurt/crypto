import React, { useEffect, useState } from 'react';

import './ExchangeRate.css';

import Rates from './Rates/Rates';


const ExchangeRate = () => {

    const [exchangeRate, setExchangeRate] = useState({})


    useEffect(()=> {
        var requestURL = 'https://api.exchangerate.host/latest?base=USD';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
        var response = request.response;
        //console.log(response);

        setExchangeRate({
            data: response.rates
        })
      }
    }, [])
    // async function getData() {
  
        
    // }
 //   console.log(exchangeRate.data.rates)
    // const ratesJSON = JSON.stringify(exchangeRate.data.rates)
    // console.log(ratesJSON)

    console.log(exchangeRate.data)
     var result = exchangeRate
    //  var newResult = Object.entries(result)

    //  console.log(newResult)

    //  let searchResults = newResult?.map(e => <Rates key={e._id} rates={e}/>);

    


    return(
        <div className='exchange-rates-div'>
           {/* {searchResults} */}
        </div>
    )
}

export default ExchangeRate;