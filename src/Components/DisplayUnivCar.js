import React, {useEffect, useState } from "react";
import DisplayUnivCar1 from './DisplayUnivCar1.js';


export default function DisplayUnivCar({careerIds}){
    const BASE_URL="http://127.0.0.1:3000/";
    const [carUnivs, setCarUnivs] = useState(null);
   
    useEffect(()=>{
        fetch( BASE_URL + 'careers/' + '1' + '/universities')
        .then (res => res.json())
        .then (json => setCarUnivs(json))
    },[])

console.log('Carunivs');
console.log(carUnivs);

    return(
        <div>
            <DisplayUnivCar1 carUnivs={carUnivs} />
        </div>
    )
   
}
