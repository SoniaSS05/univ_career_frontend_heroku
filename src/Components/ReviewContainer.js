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

  function delReview(review){
    fetch(BASE_URL + `reviews/${review.id}`, {
      method: "DELETE",
    });
    const updReviews = revs.filter((filreviews) => filreviews.id != review.id);
    setRevs(updReviews);
  }


  function updateReview(upreview){
    console.log("ENTRE A UPDATE")
    console.log(upreview)
    const config = {
      method: "PATCH",
      headers: {
        "Accept":"application/json",
        "Content-type":  "application/json"
      },
      body: JSON.stringify(upreview)
    }
    let urlComplete = BASE_URL +  `reviews/${upreview.id}`
    fetch(urlComplete,config)
      .then(response => response.json())
      .then(updReview =>{
        console.log(updReview);
        const updRev = revs.map(revm => {
          if(revm.id === updReview.id){
            return updReview;
          }
          return revm;
        })   

        setRevs(updRev);
      })
    } 

  function createReview(newReview){
    console.log('ENTRE A CREATE')
    console.log(newReview)
    const config = {
      method: "POST",
      headers: {
        "Content-type":  "application/json",
      },
      body: JSON.stringify(newReview)
    }
    let urlComplete = BASE_URL + 'reviews'   
    fetch(urlComplete,config)
      .then(response => response.json())
      .then(newReview =>{
        const newReviews =[...revs, newReview];
        setRevs(newReviews);
      })

  }

  function alluniv(){
    return (
      <Review univs={univs}  revs={revs} delReview={delReview} updateReview={updateReview} createReview={createReview}/>
    )
  }
  
  return (
    <div>
      {univs && alluniv()}
    </div>
  )
}