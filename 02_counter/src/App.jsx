import { useState } from 'react'
import './App.css'

function App() {

  const [val , setVal] = useState(0);

  const increaseFunction = function(){
    setVal((val) => {
      return val+1;
    })
  }

  // Here SetVal is a cal val 
  const DecreaseFunction = function(){
    if(val>0){
      setVal((val) => {
        return val-1;
      })
    }
    
  }

  return (
    <>
      <h1>{val}</h1>
      <button onClick={increaseFunction}> Increase value </button>
      <br/>
      <button style={{margin : "20px"}} onClick={DecreaseFunction}>Decrease value</button>
    </>
  )
}

export default App
