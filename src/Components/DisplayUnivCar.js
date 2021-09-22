import React, {useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed';

export default function DisplayUnivCar(carUnivs){
console.log('DisplayUniv')
console.log(carUnivs)
 console.log('ENTRE ACA')

    function display(){
        return(
            <div className="scrollstyle">    
            <ReactScrollableFeed >
                {carUnivs.map((tp,i) => {
                    return(
                        <div>
                            <tr>
                                <p style={{backgroundColor: i % 2 == 0?  'whitesmoke':'white', minHeight:'50px'}} key={i}>{tp.name}</p>
                            </tr>
                        </div>
                    )
                })
                }
            </ReactScrollableFeed>
        </div>
        )
    }

    return(
        <div>{ carUnivs && display()}</div>
        
    )
}
