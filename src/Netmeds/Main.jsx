
import HealthLibrary from './HealthLibrary'
import { Footer } from './Footer'
import Refill from './Refill'
import { SliderAds } from './SliderAds'
import { Category } from './Category'
import { PaymentOffers } from './PaymentOffers'
import { PreviousOrder } from './PreviousOrder'
import { Trending } from './Trending'
import { ShopByCategory } from './ShopByCategory'
import { Limited } from './Limited'


export const Main = () => {


  return (
    <div>
     
    <SliderAds/>
    <Category/>
    <PaymentOffers/>
    <PreviousOrder/>
    <br />
    <Trending/>
    <Limited/>
    <br />
    <ShopByCategory/>
    <br />
    <Refill/>
    <HealthLibrary/>
    <Footer/>
    

    </div>
  )
}
