
import React, {useEffect, useState} from 'react';
import DisplayUnivCar from './DisplayUnivCar.js';
import {Modal, TextField, Button, Box} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
       Table,
       TableBody, 
       TableCell, 
       TableContainer, 
       TableHead, 
       TableRow, 
       Paper
} from '@material-ui/core';
import DisplayReview from './DisplayReview.js';


export default function Career({careers, chsetCareerIds, carUnivs, careerIds }){
    const BASE_URL="http://127.0.0.1:3000/";

    const [careerName, setCareerName] = useState(null);
    const [changeCareer, setChangeCareer] = useState(false);
    
  
 
    

console.log('Careerid de Componente Career')

    const onChangeComboCar = (e) =>{
        const selvalueid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        //setCareerName(e.target.options[index].text);//get text of selected option
        chsetCareerIds(selvalueid);
        setChangeCareer(true);
        console.log("entre a barra")
    }


    //Modal Control Open Close 
    //const [modalCarUniv, setmodalCarUniv] = useState(false);
   // const openclosemodalCarUniv=()=>{
        //setmodalCarUniv(!modalCarUniv)
    //}

    //let bodyCarUniv='';
    //if(modalCarUniv){
       // bodyCarUniv = ( <h1>hi</h1>
        //)}

    function filteredUnivCar(){
         //Looking at universities through careers
        // openclosemodalCarUniv();
        return(
           // <Modal  open={modalCarUniv}  onclose={openclosemodalCarUniv}>{bodyCarUniv}</Modal>
           <DisplayUnivCar careerIds={careerIds} carUnivs={carUnivs} />
          
        )
    }

    function verification(){
        carUnivs &&  filteredUnivCar()   
    }

    return(
        <div className="comp">
            <div className="comboboxpos" >
                <tr>
                    <td>Career :</td>
                    <td>
                        <select className="comboboxfont" onChange={(e)=>{
                            onChangeComboCar(e)}} >
                            <option value='0'>--Choose Career--</option>
                            {careers.map((ctm) =>
                                <option key={ctm.id} value={ctm.id}>{ctm.career_name}</option>         
                            )}
                        </select>
                    </td>
                </tr>
            </div>
           {verification()} 
  
        </div>
    )
}