import './Review.css';
import './DisplayReview.css';
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


export default function DisplayReview({filterrev, delReview, universityName, universityId, updateReview, createReview}) {

const styles = useStyles();
//Display  Data One Review
const [dataUpdReview,setdataUpdReview]= useState({
    comment: ''
})

const [dataCreReview,setdataCreReview]= useState({
    comment: '',
    university_id:'',
    user_id: ''

})

 //Modal Control Open Close 
const [modalReview, setmodalReview] = useState(false);
const openclosemodalReview=()=>{
   setmodalReview(!modalReview)
}

const [modalCreateReview, setmodalCreateReview] = useState(false);

const openclosemodalCreateReview=()=>{
   setmodalCreateReview(!modalCreateReview)
}

function handleChangeUpd(event) {
    const updatevalue={...dataUpdReview}
    updatevalue[event.target.name] = event.target.value
    setdataUpdReview({...updatevalue})
 }

function handleSubmit(event){
    event.preventDefault();
    updateReview(dataUpdReview);
    openclosemodalReview();
}

//Create Review
function handleChangeCre(event) {
    const createvalue={...dataCreReview}





    
    console.log('changecre')
    console.log(event.target)
    createvalue[event.target.name] = event.target.value
    createvalue[createvalue.university_id] = universityId
    createvalue[createvalue.user_id] = 1
    setdataCreReview({...dataCreReview})
 }

function handleCreateSubmit(event){
    event.preventDefault();
    createReview(dataCreReview);
    openclosemodalReview();
}

//Update Review
let bodyUpdReview=''
if (modalReview){
    bodyUpdReview = (
        <div className={styles.modal}>
            <h3>Update Review</h3>            
            <form  onSubmit={handleSubmit}>
                <input type="text" name="comment" defaultValue={dataUpdReview.comment} onChange={handleChangeUpd}/>     
                <input type="submit" value="Submit"/>
            </form>
            <div align="right">  
                <Button color="Primary" onClick={()=>openclosemodalReview()}>CLOSE</Button>
            </div>
        </div>
    )
}

let bodyCreReview='';
if(modalCreateReview){
    bodyCreReview = (
        <div className={styles.modal}>
            <h3>Create Review</h3>            
            <form  onSubmit={handleCreateSubmit}>
                <input type="text" name="comment"  onChange={handleChangeCre}/>     
                <input type="submit" value="Submit"/>
            </form>
            <div align="right">  
                <Button color="Primary" onClick={()=>openclosemodalCreateReview()}>CLOSE</Button>
            </div>
           
        </div>
    )

}

//End Modal Control  Open Close 


function handleUpdateReview(review){
    setdataUpdReview(review);
    openclosemodalReview();
}
//End Update Review


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
            <button className='but' onClick={()=>openclosemodalCreateReview()}>Create</button>
            <Modal  open={modalCreateReview}  onclose={openclosemodalCreateReview}>{bodyCreReview}</Modal>
            
        </div>
    )

}