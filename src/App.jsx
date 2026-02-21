import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ludoBoard from '/ludoboard.webp'
import './App.css'
import { Pawn } from '../components/pawn'

function App() {

  return (
    <div className='flex items-center justify-center h-screen p-8'>
      <img src={ludoBoard}/>
      <Pawn/>
    </div>
  )
}

export default App
