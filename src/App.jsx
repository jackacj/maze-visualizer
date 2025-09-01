import { useState } from 'react'
import Grid from './components/Grid.jsx'
import './App.css'

function App() {
  // Render App - Uses Placeholder Values for Grid Props
  return (
    <>
      <header className="bg-sky-200 text-3xl font-bold">
        Title Goes Here
      </header>

      <div>
        <Grid rows={4} cols={5}/>
      </div>
      <div>
        <p>Buttons Go Here</p>
      </div>

      <footer>
        Sources Go Here
      </footer>
    </>
  )
}

export default App