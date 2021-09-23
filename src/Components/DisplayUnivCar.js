import React, {useEffect, useState } from "react";


export default function DisplayUnivCar({careerIds, carUnivs}){
    return(
        <div>
            <h1>hi</h1>
            {carUnivs.map((tp) => {
                        return(
                            <div>{tp.name}</div>
                        )})
            }
        </div>
    )
}
