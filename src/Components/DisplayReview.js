import './Review.css';
import React, {useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed';


export default function DisplayReview({filterrev, delReview, universityName, updateReview}) {


//Display  Data One Review
const [dataUpdReview,setdataUpdReview]= useState({
    comment: ""
})

//Modal Update Review
//Get data to update
//function handleChangeUpd(event) {
  //  const updatevalue={...udatasingleplayer}
    //updatevalue[event.target.name] = event.target.value
 //   setuDatasinglePlayer({...updatevalue})
 //}

function handleUpdateReview(id){
    //event.preventDefault();
    console.log(id);

    //updateReview(udatasingleplayer);
    //openclosemodalUpplay();
}
//End Update Player




    return(
        <div>
            <div>
            <h1 className="title">{universityName}</h1>
            </div>
            <div className="scrollstyle">    
                <ReactScrollableFeed >
                    {filterrev.map((tp,i) => {
                        return(
                            <div>
                                <tr>
                                    <td className="comrow">
                                        <p style={{backgroundColor: i % 2 == 0?  'whitesmoke':'white', minHeight:'50px'}} key={i}>{tp.comment}</p>
                                    </td>
                                    <td style={{ backgroundColor: i % 2 == 0?  'whitesmoke':'white'}} key={i}>
                                        <button className='butt' onClick={()=>delReview(tp)}>Delete</button>
                                    </td>
                                    <td style={{ backgroundColor: i % 2 == 0?  'whitesmoke':'white'}} key={i} >
                                    <button className='butt' onClick={()=>handleUpdateReview(tp)}>Update</button>
                                    </td>
                                </tr>
                            </div>
                        )
                        })
                    }
                </ReactScrollableFeed>
            </div>
        </div>
    )

}