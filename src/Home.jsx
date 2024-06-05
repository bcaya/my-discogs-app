import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import './assets/StylesMain'

export default function Home(){
  return(
    <box-l padding="var(--s4)">
      <stack-l>
          <h1>My name is Bobby, I am a <span>Full-Stack Developer</span></h1>
        <box-l>
          <p>Creating responsive and acessible websites. View my projects for more info!</p>
        </box-l>
        <box-l><div className="home-container">
        <cluster-l>
            <p>Currently available for hire</p>
            <Link to="records">My Record Collection </Link>
          </cluster-l>
          </div></box-l>
        <About />
      </stack-l>
      </box-l>
      
  )
}