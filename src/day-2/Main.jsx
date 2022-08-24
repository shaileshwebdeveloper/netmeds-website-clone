import React from 'react'
import HealthLibrary from './HealthLibrary'
import { Footer } from './Footer'
import Navbar from './Navbar'
import LowerNav from './LowerNav'


export const Main = () => {
  return (
    <div>
  
    <Navbar/>
    <LowerNav/>
    <HealthLibrary/>
    <Footer/>

    </div>
  )
}
