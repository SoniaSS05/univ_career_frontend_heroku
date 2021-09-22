
import React, {useEffect, useState} from 'react';
import DisplayUnivCar from './DisplayUnivCar.js';


export default function Career({careers}){
    const BASE_URL="http://127.0.0.1:3000/";

    const [careerName, setCareerName] = useState(null);
    const [changeCareer, setChangeCareer] = useState(false);
    const [careerIds, setCareerIds] = useState(null)
    const [carUnivs, setCarUnivs] = useState(null);
    
    console.log('CARUNIVS');
    console.log(carUnivs);
    console.log('CHANGE');
    console.log(changeCareer);
    let dir = BASE_URL + 'careers' +'/21/universities'
    console.log(dir)
   // useEffect(()=>{
    //    fetch(dir)
     //     .then (res => res.json())
     //     .then (json => setCarUnivs(json))
     //    },[])

    const onChangeComboCar = (e) =>{
        const selvalueid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        setCareerName(e.target.options[index].text);//get text of selected option
        setCareerIds(selvalueid);
        setChangeCareer(true);
    }

    function filteredUnivCar(){
         //Looking at universities through careers

        

        if (carUnivs){
            return (
            <DisplayUnivCar carUnivs={carUnivs} />
            )
        }
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

            {filteredUnivCar() && carUnivs}               

        </div>
    )
}