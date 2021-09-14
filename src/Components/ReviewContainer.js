import React, {useEffect, useState } from "react";
import Review from './Review.js'

export default function ReviewContainer() {

  const BASE_URL="http://127.0.0.1:3000/" 
  const[univs,setUnivs] =  useState(null)
  const[revs,setRevs] =  useState(null)
  

  useEffect(()=>{
      fetch(BASE_URL + 'universities')
        .then (res => res.json())
        .then (json => setUnivs(json))
  },[])

  useEffect(()=>{
    fetch(BASE_URL + 'reviews')
      .then (res => res.json())
      .then (json => setRevs(json))
  },[])

  

  function alluniv(){
    return (
      <Review univs={univs}  revs={revs}/>
    )
  }
  
  return (
    <div>
      {univs && alluniv()}
    </div>
  )
}



