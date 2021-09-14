import './Review.css'
import React, {useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed';


export default function Review({univs, revs}) {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    //University ComboBox
    const[revsfilt, setRevsfilt] = useState([])

    function getunirev(id){
        revs.map((t) => console.log('hola ' + t.university_id))
        const filtunrev = revs.filter(filreg => filreg.university_id == id);
        setRevsfilt(filtunrev);
    }


    const[tituniv,setTituniv]= useState('');
    const onChangeComboUniv = (e) =>{
        const selvalueid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        setTituniv(e.target.options[index].text);//get text of selected option
        getunirev(selvalueid);
    }

    return(
        <div className="comp">
            <div className="comboboxpos" >
                <tr>
                    <td>University :</td>
                    <td>
                        <select className="comboboxfont" onChange={(e)=>{
                            onChangeComboUniv(e)}} >
                            <option value='0'>--Choose University--</option>
                            {univs.map((utm) =>
                                <option key={utm.id} value={utm.id}>{utm.name}</option>         
                            )}
                        </select>
                    </td>
                </tr>
            </div>
            <div> 
                <h1 className="title">{tituniv}</h1>
            </div>
            <div className="scrollstyle">    
                <ReactScrollableFeed >
                    {revsfilt.map((tp,i) => {
                        return(
                            <div>
                                <tr>
                                    <td className="comrow">
                                        <p style={{backgroundColor: i % 2 == 0?  'whitesmoke':'white', minHeight:'50px'}} key={i}>{tp.comment}</p>
                                    </td>
                                    <td style={{ backgroundColor: i % 2 == 0?  'whitesmoke':'white'}} key={i}>
                                        <button className='butt'>Delete</button>
                                    </td>
                                    <td style={{ backgroundColor: i % 2 == 0?  'whitesmoke':'white'}} key={i} >
                                    <button className='butt'>Update</button>
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
