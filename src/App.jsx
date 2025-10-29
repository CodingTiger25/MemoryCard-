import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>     
      <h1 className='title'>Pokemon Memory Game</h1>
      <div className="card">
        <p className='instructions '>Click pokemon for a point but not same in a row</p>
       
        <h1 className='score'>SCORE</h1>

      </div>
    </>
  )
}

export default App
