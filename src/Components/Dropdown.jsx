import React, { useState } from 'react'

const Dropdown = () => {

    const [option, setOption] = useState("");

  return (
    <div className='ml-3'>
        <select
            defaultValue="Select option"
            value={option}
            onChange={(e)=>{setOption(e.target.value)}}
            className="my-2"
        >
            <option value="">Select option</option>
            <option value="Jan">Jan-Apr</option>
            <option value="May">May-Aug</option>
            <option value="Sept">Sep-Dec</option>
        </select>

        {option && <div>
        
            <div className='flex my-3'>
                <p>{option} :</p>
                <input 
                    type="number"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

            <div className='flex my-3'>
                <p>{(option==="Jan"&& "Feb") || (option==="May"&& "June") || (option==="Sept"&& "Oct")} :</p>
                <input 
                    type="number"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

            <div className='flex my-3'>
                <p>{(option==="Jan"&& "Mar") || (option==="May"&& "July") || (option==="Sept"&& "Nov")} :</p>
                <input 
                    type="number"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

            <div className='flex my-3'>
                <p>{(option==="Jan"&& "Apr") || (option==="May"&& "Aug") || (option==="Sept"&& "Dec")} :</p>
                <input 
                    type="number"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

        </div>}
    </div>
  )
}

export default Dropdown
