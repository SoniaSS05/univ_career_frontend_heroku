
import React, {useState} from 'react';
import DisplayUnivCar from './DisplayUnivCar.js';


export default function Career({careers}){
    

    const [careerName, setCareerName] = useState(null);
    const [changeCareer, setChangeCareer] = useState(false);
    const [careerIds, setCareerIds] = useState(1)
  
 
    //let dir = BASE_URL + 'careers' +'/21/universities'
   

console.log('Careerid de Componente Career')
console.log(careerIds)
    const onChangeComboCar = (e) =>{
        const selvalueid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        //setCareerName(e.target.options[index].text);//get text of selected option
        setCareerIds(selvalueid);
        //setChangeCareer(true);
    }

    function filteredUnivCar(){
         //Looking at universities through careers
        console.log("I am here component Career");
        console.log(careerIds);
        return(
          
            <DisplayUnivCar careerIds={careerIds} />
        )
   
        
    }

    return(
        <div className="comp">
            <div className="comboboxpos" >
                <tr>
                    <td>Career :</td>
                    <td>
                        <select className="comboboxfont" onChange={(e)=>{
                            onChangeComboCar(e)}} >
                            <option value='1'>--Choose Career--</option>
                            {careers.map((ctm) =>
                                <option key={ctm.id} value={ctm.id}>{ctm.career_name}</option>         
                            )}
                        </select>
                    </td>
                </tr>
            </div>
            {careerIds && filteredUnivCar() }               
        </div>
    )
}