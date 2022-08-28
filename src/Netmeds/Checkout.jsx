import { Box, Button, Flex, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const payments={
    borderBottom:"1px solid lightgrey",
    height:"100px",
    textAlign:"left",
    paddingLeft:"10px"
}
function Checkout() {
  return (
    <Box  w="60%" borderRadius="12px" margin="auto" h="auto" mb="50px" backgroundColor="#fff">
        <Heading fontSize="22px" pl="10px" pt='8px' color="grey">Payment Details</Heading>
        <Flex w='80%' margin="auto" mt="12px" gap="20px">
            {/* Payment Methods */}
        <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" borderRadius="12px"  w="100%" h="500px">
         <SimpleGrid>
          <Box style={payments}>
            <Text color="grey">PREFERED PAYMENT</Text>
            <Flex>
                <Box  w="40%" h="78px"><Img w="50px" ml='20px' src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png" /></Box>
                <Box w="100%" h="78px" pl="8px">
                    <Text fontWeight="500" fontSize="17px">Paytm</Text>
                    <Text color="grey" fontSize="12px">Pay via Paytm wallet for orders above Rs. 899 & get guaranteed Paytm cashback up to Rs. 300. TCA.
                    </Text>
                </Box>
                <Box w="40%" h="78px" textAlign="center"><Text color="red" mt="24px" fontWeight="500"> </Text></Box>
            </Flex>
          </Box>
          {/* rewards */}
          <Box style={payments}>
            <Text color="grey">REWARDS PAY</Text>
            <Flex>
                <Box  w="40%" h="78px"><Img w="50px" ml='20px' src="https://www.netmeds.com/msassets/images/icons/TWID.png" /></Box>
                <Box  w="100%" h="78px" pl="8px">
                    <Text fontWeight="500" fontSize="17px">Pay With Rewards</Text>
                    <Text color="grey" fontSize="12px">Pay with Rewards and get cashback upto Rs 800
                    </Text>
                </Box>
                <Box  w="40%" h="78px" textAlign="center"><Text color="red" mt="24px" fontWeight="500"><input type="radio"/>  </Text></Box>
            </Flex>
          </Box>
          {/* Other payments */}
          <Box style={payments}>
          <Text color="grey">OTHER PAYMENTS</Text>
            <Flex>
                <Box  w="40%" h="78px"><Img w="50px" ml='20px' src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png" /></Box>
                <Box  w="100%" h="78px" pl="8px">
                    <Text fontWeight="500" fontSize="17px">
PhonePe</Text>
                    
                </Box>
                <Box  w="40%" h="78px" textAlign="center"><Text color="red" mt="24px" fontWeight="500"><input type="radio" /></Text></Box>
            </Flex>
          </Box>
          {/* UPI */}
          <Box style={payments}>
          <Text color="grey">UPI</Text>
            <Flex>
                <Box  w="40%" h="78px"><Img w="50px" ml='20px' src="https://www.netmeds.com/assets/pgicon/googlepaylogo.png" /></Box>
                <Box  w="100%" h="78px" pl="8px">
                    <Text fontWeight="500" fontSize="17px">Google Play</Text>
                    
                </Box>
                <Box  w="40%" h="78px" textAlign="center"><Text color="red" mt="24px" fontWeight="500"><input type="radio" /></Text></Box>
            </Flex>
          </Box>
          {/* Cash on delivery */}
          <Box style={payments}>
          <Text color="grey">CASH ON DELIVERY</Text>
            <Flex>
                <Box  w="40%" h="78px"><Img w="50px" ml='20px' src="https://www.netmeds.com/assets/pgicon/COD.png" /></Box>
                <Box  w="100%" h="78px" pl="8px">
                    <Text fontWeight="500" fontSize="17px">Cash on Delivery</Text>
                    <Text color="grey" fontSize="12px">Hold On! Pay online and get flat 20% off + get NMS SuperCash up to Rs. 4000. TCA
                    </Text>
                </Box>
                <Box w="40%" h="78px" textAlign="center"><Text color="red" mt="24px" fontWeight="500"><input type="radio"/></Text></Box>
            </Flex>
          </Box>
         </SimpleGrid>
        </Box>
        {/* Amount */}
        <Box  textAlign='left' w="55%" h="230px" padding="10px" borderRadius="12px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
            <Text fontWeight="500" color='grey'>PAYMENT DETAILS</Text>
            <Box mt="20px" lineHeight="40px" height="80%" >
          <Flex gap="135px"><Text>MRP </Text><Text>Rs.395.00</Text></Flex>
          <Flex gap="110px"><Text>Discount</Text><Text>Rs.39.50</Text></Flex>
          <Flex gap="120px"><Text fontWeight="500">TOTAL</Text><Text fontWeight="500">Rs.355.50</Text></Flex>
        </Box>
        </Box>
        </Flex>
        <NavLink to="/placed">
        <Button mt="50px" backgroundColor="#32AEB1" color="#fff" mb="50px" h="50px" w="80%">COMPLETE ORDER</Button>
        </NavLink>
        
    </Box>
  )
}

export default Checkout