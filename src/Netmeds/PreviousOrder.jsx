import { Box, Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const PreviousOrder = () => {
  return (
    <div>
     
  <Grid templateColumns='repeat(2, 1fr)' gap={6} width="90%" margin="auto" marginBottom = "30px"> 
  <GridItem w='100%' h='120px' >  
    <Flex alignItems="left" justifyContent="space-between">

      <Box align="left">
      <Text  fontSize="2xl" as="b" style={{marginBottom : "30px"}}>Previous Orders</Text>
      <Text >Your previously ordered products</Text>
      <Button  variant='ghost' color="#24aeb1" style={{marginTop : "25px"}} >View Orders</Button>
      </Box>
     <Image  src='https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg'/>

    </Flex>
    
  
  </GridItem>
    
  <GridItem w='100%' h='120px'>  
    <Flex alignItems="left" justifyContent="space-between">

      <Box align="left">
      <Text  fontSize="2xl" as="b" style={{marginBottom : "30px"}}>Beauty Products</Text>
      <Text color="green">Save Upto 40% off</Text>
      <Button bg="#24aeb1" color="white" style={{marginTop : "25px"}}>Explore Beauty</Button>
      </Box>
     <Image  src='https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg'/>

    </Flex>
    
  
  </GridItem>

  </Grid>
  
    </div>
  )
}
