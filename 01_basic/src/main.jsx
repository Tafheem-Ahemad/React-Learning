import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewEle from './one.jsx'


function NewApp() {

  return (
    <>
      <h1>Hello World</h1>
      <h1>Tafheem Ahemad</h1>
      <NewEle/>
    </>
  )
}

// My custom HTML Tag taken 
const AnotherEle =React.createElement(
  "img",
  {
    src : 'src/picture.jpg',
    height : '250px'
  }
)


// Use {} to take a variable 
//  Do use computation inside the {} , because it is a object 
const All_divs = (
   <> 
    <h1>Hi , I am Good</h1> 
    <NewApp />
    <br />
    {AnotherEle}
   </>
)



createRoot(document.getElementById('root')).render(
  // It means iT take a object , Simple
  All_divs
)
