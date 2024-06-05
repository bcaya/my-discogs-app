import React from "react"
import {Outlet} from "react-router-dom"

import './assets/StylesMain'

export default function Layout(){
  return(

      <box-l padding="0">
      <main>
        <Outlet/>
      </main>
      </box-l>


  )
}