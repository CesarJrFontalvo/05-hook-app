import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarReact } from './NavbarReact'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavbarReact />
      <hr />

      <Outlet />
    </UserProvider>
  )
}
