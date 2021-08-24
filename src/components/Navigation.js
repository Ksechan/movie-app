import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
  return (
    <div className="link-container">
      <Link to="/" className="link-home">home</Link>
      <Link to="/about" className="link-about">about</Link>
    </div>
  )
}

export default Navigation;