import React,{useState} from "react"
import randomColor from "randomcolor"
function App(){


  let [count,setCount] = useState(0)
  let [color,setColor] = useState()
  function incrementHandler(){
    setCount((prevCount)=>{
      return prevCount+1
    })
    setColor(randomColor())
  }
  function decrementHandler(){
    setCount((prevCount)=>{
      return prevCount-1
    })
    
  }
  
  
  return(
    <div>
      <h1 style={{color}}>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default App