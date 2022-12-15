import { useState } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';

function App() {

  const [year1, setYear1] = useState(false)


  return (
    <div className="App">

      <div>
        <div className='flex'>
          <input type="checkbox" name="2021" value={year1} onChange={()=>{setYear1(!year1)}}/>
          <p className=' ml-2'>2021</p>
        </div>
        {year1 && <Dropdown />}
      </div>
      
    </div>
  );
}

export default App;
