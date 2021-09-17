import './Review.css';
import React, {useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed';
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
      fontSize: 20,
      width: 300,
      height:50
    },
}))(TableCell);
//End Table Style


export default function DisplayReview({filterrev, delReview, universityName, updateReview}) {

const styles = useStyles();
//Display  Data One Review
const [dataUpdReview,setdataUpdReview]= useState({
    comment: ""
})

 //Modal Control Open Close 
const [modalReview, setmodalReview] = useState(false);
const openclosemodalReview=()=>{
   setmodalReview(!modalReview)
}


function handleChangeUpd(event) {
    console.log("EVENT")
    console.log(event.target.value)
    const updatevalue={...dataUpdReview}
    console.log('updatevalue')
    console.log(updatevalue)
    

    updatevalue[event.target.name] = event.target.value
    console.log('updatevalue')
    console.log(updatevalue)
    setdataUpdReview({...updatevalue})
 }

function handleSubmit(event){
    event.preventDefault();
    updateReview(dataUpdReview);
    openclosemodalReview();
}

//Update Review
let bodyUpdReview=''
if (modalReview){
    bodyUpdReview = (
        <div className={styles.modal}>
            <h3>Update Review</h3>            
            <form  onSubmit={handleSubmit}>
                <label>
                <input type="text" name="comment" defaultValue={dataUpdReview.comment} onChange={handleChangeUpd}/>     
                </label> 
                <input type="submit" value="Submit"/>
            </form>
            <div align="right">  
                <Button color="Primary" onClick={()=>openclosemodalReview()}>CLOSE</Button>
            </div>
           
        </div>
    )
}

//End Modal Control  Open Close 


//Modal Update Review
//Get data to update
//function handleChangeUpd(event) {
  //  const updatevalue={...udatasingleplayer}
    //updatevalue[event.target.name] = event.target.value
 //   setuDatasinglePlayer({...updatevalue})
 //}

function handleUpdateReview(review){
    //event.preventDefault();
    console.log(review);
    setdataUpdReview(review);

    openclosemodalReview();

    //updateReview(udatasingleplayer);
    //openclosemodalUpplay();
}
//End Update Player


console.log('modal')
console.log(modalReview)

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
                <Modal  open={modalReview}  onclose={openclosemodalReview}>{bodyUpdReview}</Modal>
            </div>

            
        </div>
    )

}