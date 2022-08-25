import { Box, Button, Flex, Grid, Img, Input, InputRightElement, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'


const footerContainer={
  height:"650px",
  width:"100%",
  backgroundColor:"#FFF",
  marginTop:"100px",
  aspectRatio:"1"
}
export const Footer = () => {
  return (
    <Box style={footerContainer}>
      <SimpleGrid rows={3}>
        {/* upper */}
        <Box h="100px" w="80%" margin="auto" >
        <Flex  h="100%">
          <Box  w="30%">
            <Img ml="70px" mt='22px' w='170px' src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" />
          </Box>
          <Box fontWeight="500" paddingRight="300px" color="grey"  w="90%">
           <Text textAlign="left" mt="20px">Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.</Text>
          </Box>
        </Flex>
        </Box>

        {/* middle */}
        <Box h="462px" borderTop="1px solid lightgrey" borderBottom="1px solid lightgrey" w="80%" margin="auto" >
          <Flex fontSize="14px" columns={4}>
            <Box textAlign="left" pt="10px" pl="20px" width="100%" height="462px">
            <Text fontWeight="500">COMPANY</Text><br/>
            <NavLink to="/about">About Netmeds</NavLink> <br/> <br/>
            <NavLink to="#">Customer Speak</NavLink> <br/> <br/>
            <NavLink to="#">In the News</NavLink> <br/> <br/>
            <NavLink to="#">Career</NavLink> <br/> <br/>
            <NavLink to="/terms">Terms and Conditions</NavLink> <br/> <br/>
            <NavLink to="#">Provacy Policy</NavLink> <br/> <br/>
            <NavLink to="#">Fees adn Payments Policy</NavLink> <br/> <br/>
            <NavLink to="#">Shipping nad Delivery Policy</NavLink><br /> <br/>
            <NavLink to="#">Return,Refund and Cancellation Policy</NavLink> <br/> <br/>
            <NavLink to="#">Contact</NavLink>
            </Box>

            <Box pt="10px" pl="20px" textAlign="left" width="100%" height="462px">
             <Text fontWeight="500">SHOPPING</Text><br/>
             <NavLink to="#">Browse A-Z</NavLink><br/> <br/>
             <NavLink to="#">Browse by Manufacturers</NavLink><br/><br/>
             <NavLink to="#">Health Articles</NavLink><br/><br/>
             <NavLink to="#">Offers / Cuppons</NavLink><br/><br/>
             <NavLink to="#">FAQs</NavLink>
            </Box>
            
            <Box pt="10px" pl="20px" textAlign="left" width="100%" height="462px">
              <Text fontWeight="500">Social</Text><br/>
              <NavLink to="#">Patients Alike</NavLink><br/><br/>
              <NavLink to="#">Facebook</NavLink><br/><br/>
              <NavLink to="#">Twitter</NavLink><br/><br/>
              <NavLink to="#">LinkedIn</NavLink><br/><br/>
              <NavLink to="#">Youtube</NavLink><br/><br/>
              <NavLink to="#">Refer & Earn</NavLink><br/><br/>
            </Box>

            <Box  width="100%" height="462px">
             <SimpleGrid rows={2} gap="20px" pt="80px">
             <Box textAlign="left" height="100px">
              <Text fontWeight="500">SUBSCRIBE TO OUR NEWSLETTER</Text> <br/>
              <Text>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</Text>
             </Box>
              <Box height="150px">
                <Input w="70%" variant="flushed" type="text" placeholder="Enter your email address" />
                <Button variant="ghost"><svg xmlns="http://www.w3.org/2000/svg" color="#5AC2C4" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></Button>
               <br/>
               <Flex mt="12px">
                <Img w="160px" src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png" />
                <Img w="160px" src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png" />

               </Flex>
              </Box>
             </SimpleGrid>
            </Box>
          </Flex>
        </Box>

        {/* Bottom */}
        <Box fontSize="14px" lineHeight=" 64px" h="80px" w="80%" margin="auto" >
          <Flex  textAlign="center" justifyContent="space-evenly">
            <Text>Medicine</Text>
            <Text>Wellness</Text>
            <Text>Lab Test</Text>
            <Text>Beauty</Text>
            <Text>Copyright© 2022. All Rights Reserved.</Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Footer