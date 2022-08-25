import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./paymentoffer.module.css"

export const PaymentOffers = () => {
  return (
    <>
<Box marginBottom="15px">
<Text fontSize='2xl' as="b" marginRight="70%">Payment Partner Offers</Text>
</Box>
<Box>
<Grid templateColumns='repeat(3, 1fr)' gap={4} className={style.test} >

  <GridItem w='100%' h='80px' className={style.inner}> 
     
     <Image width="50px" src="https://www.netmeds.com/images/cms/offers/1656602758_Simpl_Icon.png"/>

      <div>
      <Text fontSize='12px' as="b"> Get up to Rs. 1000 Simpl Cashback* (5%)!</Text>
      <Text fontSize='12px'>Get up to Rs. 1000 Simpl Cashback (5%) on your FIRST-EVER payment via Simpl for ANY purchases*</Text>
      </div>

  </GridItem>

  <GridItem w='100%' h='80px' className={style.inner}> 
     
     <Image width="50px" src="https://www.netmeds.com/images/cms/offers/1659280854_1616682689_paytm.png"/>

      <div>
      <Text fontSize='12px' as="b"> Get up to Rs. 500 Paytm Cashback!</Text>
      <Text fontSize='12px'>Get Paytm Cashback between max. Rs. 500 and min. Rs. 50 on a minimum purchase of ANY products*</Text>
      </div>

  </GridItem>

  <GridItem w='100%' h='80px' className={style.inner}> 
     
     <Image width="50px" src="https://www.netmeds.com/images/cms/offers/1660838140_twid.png"/>
      <div>
      <Text fontSize='12px' as="b">Use Pay with Rewards, Get max. Rs. 1000 Cashback!</Text>
      <Text fontSize='12px'>Get assured cashback of max. Rs. 1000, when you pay using the “Pay with Rewards” payment option </Text>
      </div>

  </GridItem>


  </Grid>

  </Box>

    </>
  )
}
