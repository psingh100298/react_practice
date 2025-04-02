import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
     let pass = "";
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     if(number) str+="0123456789";
     if(character) str+="!@#$%^&*()~";
     for(let i=1;i<=length;i++){
      let char = str[Math.floor(Math.random()*str.length+1)];
      pass+=char;
     }
     setPassword(pass);
  }, [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    passwordGenerator();
  },[length, character, number, passwordGenerator]);


  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg over-flow-hidden mb-4 bg-white">
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
      <input type="range"
       min={8}
       max={50}
       value={length}
       className='cursor-pointer'
       onChange={(e)=>{
            setLength(e.target.value);
       }}
       />
       <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={number}
        id='numberInput'
        onChange={()=>{
          setNumber((prev)=> !prev);
        }}
        />
        <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={character}
        id='characterInput'
        onChange={()=>{
          setCharacter((prev)=> !prev);
        }}
        />
        <label>Characters</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
