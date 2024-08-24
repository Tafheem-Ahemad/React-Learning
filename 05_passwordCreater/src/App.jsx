import React, { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  let [password , setPassWord] = useState("");
  let [length , setLength] = useState(8);
  let [isNumberAllowed , setIsNumberAllowed] = useState(false);
  let [isCharAllowed , setIsCharAllowed] = useState(false);

  function getRandomValue(len) {
    return Math.floor(Math.random() * len);
  }

  const passwordGenerator = useCallback(() => {

    let pass="";

    let s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    console.log(isCharAllowed);
    console.log(isNumberAllowed);
    
    if(isNumberAllowed){
      s+="1234567890";
    }
    if(isCharAllowed){
      s+="!@#$%^&*-_+={}~`";
    }


    for(let i=0;i<length;i++){
      pass+=s.at(getRandomValue(s.length))
    }

    setPassWord(pass);
  },[length,isCharAllowed,isNumberAllowed,setPassWord])
    


  useEffect(() => {
    passwordGenerator();
  },[length,isCharAllowed,isNumberAllowed,passwordGenerator])


  let refarance=useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    refarance.current?.select();
    refarance.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className='w-full h-screen bg-black text-white flex  items-center'>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              value={password}
              ref={refarance}
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >copy</button>
          
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            id="numberInput"
            onChange={() => {
              setIsNumberAllowed((prev) => !prev);
            }}
            defaultChecked={isNumberAllowed}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              onChange={() => {
                setIsCharAllowed((prev) => !prev);
              }}
              defaultChecked={isCharAllowed}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>

      <div className='flex justify-center items-center p-4'>
        <button 
        className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={passwordGenerator}
        >New Password</button>
      </div>
    </div>


    </div>
  )
}

export default App
