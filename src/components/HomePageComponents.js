import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


export default function HomePageComponents() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This is the home page
      </p>
      <Link to={'pageTwo'} >
        Go to Page Two
      </Link>
    </header>
  </div>
  )
}
