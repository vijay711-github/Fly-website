/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainConatiner from './components/MainConatiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-pink-100 '>
      <Header />
        <MainConatiner />
        </div>
    </>
  )
}

export default App
