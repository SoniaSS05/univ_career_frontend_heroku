
import React, {useState } from "react";
import DisplayUniv from './DisplayUniv.js'

export default function Career({careers, univs}) {
    
console.log('filtrando careers')
console.log(careers);
console.log('filtrando univs')
console.log(univs);

    const [careerId, setCareerId] = useState(null);
    const [careerName, setCareerName] = useState(null);

    const onChangeComboCar = (e) =>{
        const selvalueid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        setCareerName(e.target.options[index].text);//get text of selected option
        setCareerId(selvalueid);
    }

    function filteredUnivCar(){
       // const filtcar = careers.where(programs => {programs.univs.career.career_id == careerId } )
       console.log('career Id')
       console.log(careerId)
      // const filtcar = univs.includes(careers).where(univs.careers.career_id == careerId)
    
        return (
           <DisplayUniv />
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
                            <option value='0'>--Choose Career--</option>
                            {careers.map((ctm) =>
                                <option key={ctm.id} value={ctm.id}>{ctm.career_name}</option>         
                            )}
                        </select>
                    </td>
                </tr>
            </div>

            {careerId && filteredUnivCar()}

        </div>
    )
}