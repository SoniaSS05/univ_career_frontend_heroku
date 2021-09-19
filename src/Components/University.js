import './University.css';
import React, {useState} from 'react';
import ReactScrollableFeed from 'react-scrollable-feed';
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
import Alphabet from './Alphabet'


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
    slstyle:{
        overflowY:'scroll',
        height:'450px',
        textAlign: 'left',
        backgroundColor: 'whitesmoke',
        margin: '0px 10px 0px 10px',
        paddingLeft: '5px'
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



export default function StatesEU({univs, revs}) {
 
    console.log(univs);
    const styles = useStyles();
    const allstates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
                       'Dakota del Norte', 'Dakota del Sur', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 
                       'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
                       'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
                        'Nevada', 'New Jersey', 'New York', 'New Hampshire', 'New México', 'North Carolina', 'Ohio',
                        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'Tennessee', 'Texas', 
                        'Utah', 'Vermont', 'Virginia', 'Washington', 'Wisconsin', 'Wyoming'];  

    const [letter, setLetter] = useState('A');

    const imageStates = ['../New Mexico.png']
    const [datasingle, setDatasingle] = useState({
        name: ""
    });
    const [reviewsingle, setReviewsingle] = useState({
        comment: ""
    })
    const[univsSingle,setUnivsSingle] =  useState(null)
    const [modaldat, setModaldat] = useState(false);
    const [modalrev, setModalrev] = useState(false);

    const openclosemodalDat=()=>{
        setModaldat(!modaldat)
    }

    const openclosemodalRev=()=>{
        setModalrev(!modalrev)
    }

    //Display Data State's Universities

    function handleState(st){
        const univfilter =  univs.filter((uns) => uns.location == st);
        setDatasingle(univfilter);
        setUnivsSingle(st);
        openclosemodalDat();
    }

    let displayData=''

    if(modaldat){
        displayData= (
            <div className={styles.modal}>
                <h2 className="tituniv">{univsSingle}</h2>
                 

                <div className="slstyle">   
                    <ReactScrollableFeed >
                         <tr>
                            {datasingle.map((tp,i) => {
                                return(
                                <tr style={{backgroundColor: i % 2 == 0?  'whitesmoke':'white', minHeight:'50px'}} key={i}>
                                    <td >{tp.name}</td>
                                    <td><button className="button" onClick={() => handleComments(tp.id)}>Comments</button></td>
                                </tr>)
                            })}
                        </tr>
                    </ReactScrollableFeed >
                </div>
                <div align="right">  
                    <Button color="Primary" onClick={()=>openclosemodalDat()}>CLOSE</Button>
                </div>
            </div>
        )
    }
    //End Display Data State's Universities

    //Display Data Review

    function handleComments(rev){
        const reviewfilter = revs.filter((revi) => revi.university_id == rev);
        setReviewsingle(reviewfilter);
        openclosemodalRev();
    }
    let displayRev=''

    if(modalrev){
        console.log('comen')
        console.log(reviewsingle)
        displayRev= (
            <div className={styles.modal}>
                <h2 className="title">Comments</h2>
                <div className={styles.slstyle}>    
                    <ReactScrollableFeed >
                        {reviewsingle.map((tp,i) =>
                                <tr style={{height: '50px', paddingTop: '120px', backgroundColor: i % 2 == 0?  'whitesmoke':'white'}} key={i}>{tp.comment}</tr>
                        )}
                    </ReactScrollableFeed>

                </div>
                <div align="right">  
                    <Button color="Primary" onClick={()=>openclosemodalRev()}>CLOSE</Button>
                </div>
            </div>
        )
    }
    //End Display Data Review
    const states = allstates.filter(sta => sta[0] == letter );
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
        <div>
            <div>
                <Alphabet setLetter={setLetter} />
            </div>
            <div className="grid-container">{state_single}</div>
            <Modal  open={modaldat}  onclose={openclosemodalDat}>{displayData}</Modal>
            <Modal  open={modalrev}  onclose={openclosemodalRev}>{displayRev}</Modal>
        </div>
    )
}