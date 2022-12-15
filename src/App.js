import { useState } from 'react';
import Dropdown from './Components/Dropdown';

function App() {

  const [year1, setYear1] = useState(false)
  const [year2, setYear2] = useState(false)
  const [year3, setYear3] = useState(false)


  return (
    <div className="p-8 border">

      <div>
        <div className='flex'>
          <input type="checkbox" name="2021" value={year1} onChange={()=>{setYear1(!year1)}}/>
          <p className=' ml-2'>2021</p>
        </div>
      </div>

      <div className='my-4'>
        <div className='flex'>
          <input type="checkbox" name="2022" value={year2} onChange={()=>{setYear2(!year2)}}/>
          <p className=' ml-2'>2022</p>
        </div>
      </div>

      <div>
        <div className='flex'>
          <input type="checkbox" name="2023" value={year3} onChange={()=>{setYear3(!year3)}}/>
          <p className=' ml-2'>2023</p>
        </div>
      </div>

        {year1 && <Dropdown />}
        {year2 && <Dropdown />}
        {year3 && <Dropdown />}
    </div>
  );
}

export default App;
