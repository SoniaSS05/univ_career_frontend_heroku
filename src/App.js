import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
import UniversityContainer from './Components/UniversityContainer'
import ReviewContainer from './Components/ReviewContainer'

function App() {
  return(
<div className="app">
     <BrowserRouter>
       <NavBar />
       <Switch> 
         <Route path="/UniversityContainer" > 
           <UniversityContainer />
         </Route>
         <Route exact path="/" >   
         </Route>
         <Route path="/ReviewContainer" > 
           <ReviewContainer />
         </Route> 
       </Switch> 
      </BrowserRouter>    
 </div>
  )
}

export default App;
