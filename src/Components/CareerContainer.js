import React, {useEffect, useState} from 'react';
import Career from './Career.js';

export default function CareerContainer(){
    //const BASE_URL="http://127.0.0.1:3000/" local
    const BASE_URL="https://boiling-retreat-81427.herokuapp.com/" 


    const [careers, setCareers] = useState(null);
    const [univs, setUnivs] = useState(null);
    const [carUnivs, setCarUnivs] = useState(null);
    const [careerIds, setCareerIds] = useState(null)
  

    useEffect(()=>{
        fetch(BASE_URL + 'careers')
          .then (res => res.json())
          .then (json => setCareers(json))
    },[]);

//let dir = BASE_URL + 'careers' +'/21/universities'
    useEffect(()=>{
      fetch( BASE_URL + 'careers/' + careerIds + '/universities')
      .then (res => res.json())
      .then (json => setCarUnivs(json))
    },[careerIds])

console.log('Carunivs')
    console.log(carUnivs)
    function chsetCareerIds(idc){
      console.log('career change');
      setCareerIds(idc);
    }


    function allcar(){
        return (
          <Career careers={careers} chsetCareerIds={chsetCareerIds} carUnivs={carUnivs} careerIds={careerIds}/>
        )
    }
    
    return (
      <div>
         {careers && allcar()}
      </div>
    )
}

