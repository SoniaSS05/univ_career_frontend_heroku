import React, {useEffect, useState} from 'react';
import Career from './Career.js';

export default function CareerContainer(){
    const BASE_URL="http://127.0.0.1:3000/";


    const [careers, setCareers] = useState(null);
    const [univs, setUnivs] = useState(null);
  

    useEffect(()=>{
        fetch(BASE_URL + 'careers')
          .then (res => res.json())
          .then (json => setCareers(json))
    },[]);

    function allcar(){
        return (
          <Career careers={careers}/>
        )
    }
    
    return (
      <div>
         {careers && allcar()}
      </div>
    )
}

