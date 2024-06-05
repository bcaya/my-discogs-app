import React from 'react'
import { Link, NavLink } from "react-router-dom"
import '../assets/StylesMain'

export default function Header(){
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
}
  return(
    <header>
      <Link className="site-logo" to="/">Bobby.Works</Link>
      <nav>
        <cluster-l justify="center">
        <NavLink
          to="/about"
          style={({isActive}) => isActive ? activeStyles : null}
          >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({isActive}) => isActive ? activeStyles : null}
          >
          Projects
        </NavLink>
        <NavLink
          to="/contact-us"
          style={({isActive}) => isActive ? activeStyles : null}
          >
            Contact
          </NavLink>
          </cluster-l>
      </nav>
    </header>
  )
}