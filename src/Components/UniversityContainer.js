
import React, {useEffect, useState} from 'react'
import University from './University.js'


export default function UniversityContainer() {
    const BASE_URL="http://127.0.0.1:3000/" 

    const[univs,setUniv] =  useState(null)

    useEffect(()=>{
        fetch(BASE_URL + 'universities')
            .then (res => res.json())
            .then (json => setUniv(json))
    },[])

console.log("UNIVERSIDADES");
console.log(univs);


    function alluniversities(){
        console.log("entre aqui")
       return (
       <University univs={univs}/>)
    }
    
    return (
        <div>
            {univs && alluniversities()}
        </div>
    )
}
