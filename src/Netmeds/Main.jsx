
import HealthLibrary from './HealthLibrary'
import { Footer } from './Footer'
import Refill from './Refill'
import { SliderAds } from './SliderAds'
import { Category } from './Category'
import { PaymentOffers } from './PaymentOffers'
import { PreviousOrder } from './PreviousOrder'
import { Trending } from './Trending'


export const Main = () => {


  return (
    <div>
     
    <SliderAds/>
    <Category/>
    <PaymentOffers/>
    <PreviousOrder/>
    <br />
    <Trending/>
    <br />
    <Refill/>
    <HealthLibrary/>
    <Footer/>
    

    </div>
  )
}
