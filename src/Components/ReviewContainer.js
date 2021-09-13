
import React, {useEffect, useState} from 'react'
import University from './University.js'



export default function ReviewContainer() {
  const BASE_URL="http://127.0.0.1:3000/" 

  const[revs,setRevs] =  useState(null)
  

  useEffect(()=>{
      fetch(BASE_URL + 'reviews')
          .then (res => res.json())
          .then (json => setRevs(json))
  },[])

    return (
        <div>
            hola
        </div>
    )
}

   
