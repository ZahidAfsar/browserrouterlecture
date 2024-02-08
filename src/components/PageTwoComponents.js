import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


export default function PageTwoComponents() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This is page two
      </p>
      <Link to={'/'} >
        Go to Home Page
      </Link>
    </header>
  </div>
  )
}
