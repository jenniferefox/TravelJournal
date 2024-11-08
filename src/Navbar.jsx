import React from "react"
import globe  from './assets/globe.svg';

export default function Navbar() {
  return (
    <nav>
      <img src={globe} className="logo"/>
      <h3 className="nav-div">my travel journal.</h3>
    </nav>
  )
}
