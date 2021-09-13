
import React, {useEffect, useState} from 'react'
import University from './University.js'



export default function UniversityContainer() {
    const BASE_URL="http://127.0.0.1:3000/" 

    const[univs,setUnivs] =  useState(null)
    

    useEffect(()=>{
        fetch(BASE_URL + 'universities')
            .then (res => res.json())
            .then (json => setUnivs(json))
    },[])

  
    function alluniversities(){
       return (
            <University univs={univs}/> )
    }
    
    return (
        <div>
            {univs && alluniversities()}
        </div>
    )
}
