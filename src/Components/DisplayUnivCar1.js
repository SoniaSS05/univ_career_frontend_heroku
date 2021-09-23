import React, {useEffect, useState } from "react";

export default function DisplayUnivCar1({carUnivs}){
    return(
    <div>
        {carUnivs.map((tp,i) => {
                        return(
                            <div>{tp.name}</div>
                        )})
        }
    </div>)
}