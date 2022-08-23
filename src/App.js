import './App.css';
import {buybike,salebike,buytenbikes,actionfunction} from './redux/action/Action'
import bike from './images/KTM.jpg'
import bikes from './images/TENBIKE.jpg'
import {useDispatch,useSelector} from 'react-redux'
function App() {
   var dispatch=useDispatch()
   var select=useSelector((state)=>state.TotalNumberofBikes)
   function buybikefunction(){
    dispatch(buybike());
   }
   function salebikefunction(){
    dispatch(salebike());
   }
   function buytenbikefunction(){
    dispatch(buytenbikes());
   }
   function saletenbikefunction(){
    dispatch(actionfunction());
   }
  return (
    <div className="App">
       <div>Total Number Bike Are Available Here {select}</div>
       <div className='main'>
          <img src={bike} atl="ktm" />
          <button onClick={buybikefunction}>BUY BIKE</button>
       </div>
       <div className='main'>
          <img src={bike} atl="ktm" />
          <button onClick={salebikefunction}>SALE BIKE</button>
       </div>
       <div className='main'>
          <img src={bikes} atl="ktm_text" />
          <button onClick={buytenbikefunction}>BUY TEN BIKES</button>
       </div>
       <div className='main'>
          <img src={bikes} atl="ktm_text" />
          <button onClick={saletenbikefunction}>SALE TEN BIKE</button>
       </div>
    </div>
  );
}

export default App;
