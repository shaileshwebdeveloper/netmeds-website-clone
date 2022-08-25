import React from 'react'
import HealthLibrary from './HealthLibrary'
import { Footer } from './Footer'
import Navbar from './Navbar'
import LowerNav from './LowerNav'
import Refill from './Refill'
import { SliderAds } from './SliderAds'
import { Category } from './Category'
import { PaymentOffers } from './PaymentOffers'
import { PreviousOrder } from './PreviousOrder'
import { Trending } from './Trending'


export const Main = () => {
  return (
    <div>
     
    <Navbar/>
    <LowerNav/>
    <SliderAds/>
    <Category/>
    <PaymentOffers/>
    <PreviousOrder/>
    <br />
    <Trending/>
    <Refill/>
    <HealthLibrary/>
    <Footer/>

    </div>
  )
}
