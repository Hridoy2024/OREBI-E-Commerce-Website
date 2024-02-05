import React from 'react'
import Navigation from './Navigation'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Navigation/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout