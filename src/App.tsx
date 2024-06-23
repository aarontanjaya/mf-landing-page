import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App font-sans">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="bg-white flex text-center mt-20 h-[580px] max-w-[1200px] mx-auto">
        <div className="top m-auto">
          <h1>Lorem Ipsum Dolor Sit</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
    </div>
  )
}

export default App
