import './University.css';
import React, {useEffect, useState} from 'react';
//To use modal windows, it installed: npm i @material-ui/core
import {Modal, TextField, Button} from '@material-ui/core';
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

 


//Table style
const useStyles = makeStyles((theme) => ({
    modal:{
        position: 'relative',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxshadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos:{
        cursor: 'pointer'
    },
    inputMaterial:{
        width: '100%'
    },
    table:{
        marginLeft: '200',
     
    },
    tableContainer:{
        borderRadius: 30    
    },
    tableHeaderCell:{
        fontWeight: 'bold',
        width: '500px'  
    }

}))


const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#f85103',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      width: 300
    },
    body: {
     
    },
}))(TableCell);

//End Table Style



export default function StatesEU({univs}) {
    console.log(univs);
    const styles = useStyles();
    const states = ['New Mexico','Florida', 'New York', 'Texas', 'Illinois', 'Colorado','Nebraska', 'New York'];
    const imageStates = ['../New Mexico.png']
    const [datasingle, setDatasingle] = useState({
        name: ""
    });
    const[univsSingle,setUnivsSingle] =  useState(null)
    const [modaldat, setModaldat] = useState(false);

    const openclosemodalDat=()=>{
        setModaldat(!modaldat)
    }

//Display Data State's Universities

    function handleState(st){
        const univfilter =  univs.filter((uns) => uns.location == st);
        setDatasingle(univfilter);
        setUnivsSingle(st);
        openclosemodalDat();
    }

    function handleComments(uni){
        alert(uni);
    }

    let displayData=''

    if(modaldat){console.log('DATASINGLE');
        displayData= (
            <div className={styles.modal}>
                <h2 className="h2margin">{univsSingle}</h2>
                    <td className="colmargin" >
                        {datasingle.map((tp) =>
                            <tr>{tp.name} <button className="button" onClick={() => handleComments(tp.id)}>Comments</button></tr>
                        )}
                    </td>
                    <td>
                </td>
                <div align="right">  
                    <Button color="Primary" onClick={()=>openclosemodalDat()}>CLOSE</Button>
                </div>
            </div>
        )
    }
    //End Display Data State's Universities


    const state_single = states.map((st)=>{
        return (
        <div >
            <div onClick={() => handleState(st)}>
                <h1>{st}</h1>
                <img className= "imagestate" src="./images/NewMexico.png" ></img>
            </div>
        </div>)
    })

    return(
        <div className="grid-container">
            {state_single}
            <Modal  open={modaldat}  onclose={openclosemodalDat}>{displayData}</Modal>
        </div>
    )
}