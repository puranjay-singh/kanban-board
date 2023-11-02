import React, { useEffect } from 'react'
import './Styles/App.css';
import NavBar from './Components/NavBar';
// import Card from './components/Card/Card';
import DashBoard from './Components/DashBoard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';


function App() {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])
  return allTickets && (
    <div style={{paddingTop : "10px"}} >
      <NavBar/>
      <hr style={{marginTop : "10px"}} />
      <DashBoard/>
    </div>
  );
}

export default App;
