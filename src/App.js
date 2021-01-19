import React, { useState, memo, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setcount] = useState(1)
  const [countforMemo, setcountforMemo] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="d-flex">
          <button className="btn btn-success mx-2" onClick={() => setcount(count+1)}>Click here</button>
          <button className="btn btn-success mx-2" onClick={() => setcountforMemo(countforMemo+1)}>Click here to render Memoized Component</button>
        </div>
        <div className="d-flex mt-2">
          <div className="mx-4">
            <Component1 count={count}/>
          </div>
          <div className="mx-4">
            <Component2 countforMemo={countforMemo} />
          </div>
        </div>
      </header>
    </div>
  );
}
const Component1 = () => {
  useEffect(()=>{
    console.log("Component 1 renders every time any state changes")
  })
  return (
    <div>{`Component 1`}</div>
  )
}

const Component2 = memo(({
  countforMemo
}) => {
  useEffect(()=>{
    console.log(`Component 2 renders only when the "countforMemo" prop changes`)
  })
    return(
      <div>{`Component 2`}</div>
  )
})

export default App;
