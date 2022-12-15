import React, { useState } from 'react'

const Dropdown = () => {

    const [option, setOption] = useState("");

    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(0);

    const [disable1, setDisable1] = useState(false)
    const [disable2, setDisable2] = useState(false)
    const [disable3, setDisable3] = useState(false)
    const [disable4, setDisable4] = useState(false)

    const [calculateNo, setCalculateNo] = useState(0)
    const [calculated, setCalculated] = useState(false)

    const handleInput1 = (e) => {
        setInput1(e.target.value)
        setCalculateNo(e.target.value)
        if(!calculated){
        setDisable2(true)
        setDisable3(true)
        setDisable4(true)
        }
    }
    const handleInput2 = (e) => {
        setInput2(e.target.value)
        setCalculateNo(e.target.value)
        if(!calculated){
        setDisable1(true)
        setDisable3(true)
        setDisable4(true)
        }
    }
    const handleInput3 = (e) => {
        setInput3(e.target.value)
        setCalculateNo(e.target.value)
        if(!calculated){
        setDisable1(true)
        setDisable2(true)
        setDisable4(true)
        }
    }
    const handleInput4 = (e) => {
        setInput4(e.target.value)
        setCalculateNo(e.target.value)
        if(!calculated){
        setDisable1(true)
        setDisable2(true)
        setDisable3(true)
        }
    }

    const handleCalculate = () => {

        // var num = calculateNo -  -100
        // console.log(num)
        setCalculated(true)

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min)
        }
        // console.log(calculateNo)

        if(!input1){
            setInput1(getRandomInt(calculateNo-100, calculateNo- -100))
            console.log(input1)
        }
        if(!input2){
            setInput2(getRandomInt(calculateNo-100, calculateNo- -100))
            console.log(input2)
        }
        if(!input3){
            setInput3(getRandomInt(calculateNo-100, calculateNo- -100))
            console.log(input3)
        }
        if(!input4){
            setInput4(getRandomInt(calculateNo-100, calculateNo- -100))
            console.log(input4)
        }

        setDisable1(false)
        setDisable2(false)
        setDisable3(false)
        setDisable4(false)

    }

    const handleReset = () => {
        setInput1(0)
        setInput2(0)
        setInput3(0)
        setInput4(0)
        setCalculateNo(0)
        setCalculated(false)

        setDisable1(false)
        setDisable2(false)
        setDisable3(false)
        setDisable4(false)
    }

  return (
    <div className='ml-4 md:ml-8 w-[19rem] rounded-md shadow-lg my-4 border p-3'>
        <div className='flex justify-between '>
            <select
                defaultValue="Select option"
                value={option}
                onChange={(e)=>{setOption(e.target.value)}}
                className="my-2 outline-none border p-1"
            >
                <option value="">Select option</option>
                <option value="Jan">Jan-Apr</option>
                <option value="May">May-Aug</option>
                <option value="Sept">Sep-Dec</option>
            </select>

            <button 
                onClick={handleReset} 
                className={`hover:text-[#003979] ${option? "inline-block" : "hidden"} font-semibold inline-block text-red-700`}
            >
                Reset
            </button>

        </div>

        {option && <div className='flex flex-col justify-center items-center'>
        
            <div className='flex my-3'>
                <p>{option}:</p>
                <input 
                    type="number"
                    value={input1}
                    onChange={handleInput1}
                    disabled={disable1}
                    name="selected"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

            <div className='flex my-3'>
                <p>{(option==="Jan"&& "Feb") || (option==="May"&& "June") || (option==="Sept"&& "Oct")}:</p>
                <input 
                    type="number"
                    value={input2}
                    onChange={handleInput2}
                    disabled={disable2}
                    name="selected"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

            <div className='flex my-3'>
                <p>{(option==="Jan"&& "Mar") || (option==="May"&& "July") || (option==="Sept"&& "Nov")}:</p>
                <input 
                    type="number"
                    value={input3}
                    onChange={handleInput3}
                    disabled={disable3}
                    name="selected"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

            <div className='flex my-3'>
                <p>{(option==="Jan"&& "Apr") || (option==="May"&& "Aug") || (option==="Sept"&& "Dec")}:</p>
                <input 
                    type="number"
                    value={input4}
                    onChange={handleInput4}
                    disabled={disable4}
                    name="selected"
                    className='px-6 h-[30px] ml-3 py-2 border rounded-md border-gray-400 outline-none focus:border-blue-400'
                />
            </div>

            <button 
                onClick={handleCalculate} 
                className={`border-2 mr-4 border-[#003979] text-[#003979] font-semibold rounded-full px-8 py-2 mt-4 inline-block hover:bg-[#003979] hover:text-white`}
            >
                Calculate
            </button>

        </div>}
    </div>
  )
}

export default Dropdown