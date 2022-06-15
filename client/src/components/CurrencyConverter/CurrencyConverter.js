import React, { useEffect, useState } from 'react';

import {FormControl, Button, Paper, Select, TextField} from '@material-ui/core'
import Axios from 'axios';

import './CurrenyConverter.css';
import { getDataFromTree } from '@apollo/client/react/ssr';



const CurrencyConverter = () => {

    // const fixer_url = () => { 
    //     const url = 'https://data.fixer.io/api/latest ? access_key = API_KEY'
    // }
    const [text1, setText1] = useState(1);
    const [text2, setText2] = useState(2);
    const [country, setCountry] = useState([])
    const [country2, setCountry2] = useState([])
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);

    useEffect(()=> {
        getData();
    }, [])
    async function getData() {
        //const result = await Axios.get(`https://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FIXER_API}`) 
       // console.log(result.data)
   
   
       //    var myHeaders = new Headers();
    //    myHeaders.append("apikey", `${process.env.REACT_APP_FIXER_API}`);

    //    var requestOptions = {
    //    method: 'GET',
    //    redirect: 'follow',
    //    headers: myHeaders
    //    };

    //  //  fetch("https://api.apilayer.com/fixer/convert?to=gbp&from=eur&amount=50", requestOptions)
    //    .then(response => response.text())
    //    .then(result => console.log(result))
    //    .catch(error => console.log('error', error));
    

    }



    const convert = () => {}

    return(
        <div>
            <Paper className='paper'>
                <h3>Currency Converter</h3>
                <form onSubmit={convert}>
                <div>
                    <TextField variant='outlined' value={text1 || ""} onChange={(e)=>setText1(e.target.value)} autoComplete='off'/>
                    <FormControl className='dropdown' variant='outlined'  onChange={(e)=>setValue1(e.target.value)} >
                    <Select native>
                        <option>abc</option>
                    </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField variant='outlined'  value={text2 || ""}/>
                    <FormControl className='dropdown'  variant='outlined'   onChange={(e)=>setValue2(e.target.value)}>
                    <Select native>
                        {Object.keys(country).map((value, index) => {
                            <option key={index} value={country[value]}></option>
                        })}
                        <option>abc</option>
                    </Select>
                    </FormControl>
                </div>
                <Button className='currency-submit-button' type="submit" variant="contained">Convert</Button>
                </form>
            </Paper>
        </div>
    )
}

export default CurrencyConverter;