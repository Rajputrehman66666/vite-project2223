import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multiply } from './component/counterslice'
import Navbar from './component/navbar'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar/>
     <div>
      <button    onClick={() => dispatch(decrement())}>-</button>
      currently count is   {count}
      <button     onClick={() => dispatch(increment())}>+</button>
      <button  onClick={() => dispatch(multiply())}>*</button>
     </div>
    </>
  )
}

export default App
