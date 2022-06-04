import { useEffect,useState } from 'react';
import { InfinitySpin } from  'react-loader-spinner'
import '../App.css'
import axios from 'axios';

function App() {
const [states,setStates] = useState([]) 
useEffect(() => {
  axios
    .get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then((data) => {
    setStates(data.data);
    console.log(states);
    })
    .catch((error) => {
    console.log(error);
    })
}, [])
console.log(states)
const listStates = () => {
  JSON.stringify(states).map((state,index)=>{
    <option value={state.state_id} key={index}>11111{state.state_name}</option>
  })
}
  return (
    <div className="App">
      <header className="App-header">
        Hi  Subham
        {states.length?
          {listStates}
        :
        <>
        {console.log("Loader"+JSON.stringify(states.states))}
        {/* <InfinitySpin
          height="100"
          width="100"
          color='grey'
          ariaLabel='loading'
        /> */}
        {listStates}
        </>
        }
      </header>
    </div>
  );
}

export default App;
