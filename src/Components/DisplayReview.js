import './Review.css'
import ReactScrollableFeed from 'react-scrollable-feed';


export default function DisplayReview({filterrev, delReview}) {
    console.log('Display')
    console.log(filterrev)
    return(
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
                        <button className='butt'>Update</button>
                        </td>
                    </tr>
                </div>
            )
            })
        }
    </ReactScrollableFeed>
</div>
    )

}