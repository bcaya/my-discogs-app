import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./components/Header"

import './assets/StylesMain'

export default function Layout(){
  return(

      <box-l padding="0">
        <Header />
      <main>
        <Outlet/>
      </main>
      </box-l>


  )
}