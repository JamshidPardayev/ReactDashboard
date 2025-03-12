import React from 'react'
import { Outlet } from 'react-router-dom'

function AutheLayout() {
 

  return (
    <section>
      <Outlet/>
    </section>
  )
}

export default AutheLayout