import { Box, Button, Flex, Grid, Heading, Img, Input, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Container={
    height:"700px",
    width:"70%",
    margin:"auto",
    marginBottom:"50px",
    borderRadius:"15px",
    backgroundColor:"#ffffff"
}
function Cart() {
  
  return (
    <Box style={Container}>
      <Heading textAlign="left" pl="10px" pt="10px" fontSize="29px">Order Summary</Heading>
      <Box w="70%" margin="auto" mt="30px" h="600px">
        <SimpleGrid columns={2} gap="14px">
           <Box borderRadius="12px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" w="100%" h="240px">
            <Heading fontSize="22px" color="grey" textAlign="left" pl='12px'>Products</Heading>
            <Box mt="12px" h="200px">
              <Flex>
                <Box><Img w="120px" src="https://www.netmeds.com/images/product-v1/150x150/903020/the_man_company_beard_wax_almond_thyme_50_gm_0_0.jpg" /></Box>
                <Box textAlign="left" padding="12px"><Text>The Man Company Beard Wax - Almond & Thyme 50 gm</Text>
                <Text color="green" fontSize="13px">Only 10 Left In Stock</Text>
                <Text color="grey" fontSize="13px">Mkt: The Man Company</Text>
                <Text color="red">Rs. 411.75 </Text>
                <Flex mt="12px" float="right" gap="10px">
                  <Button>Remove</Button>
                  <Button>Save for later</Button>
                </Flex>
                </Box>
              </Flex>
            </Box>
           </Box>
           <Box borderRadius="12px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" pl="14px" textAlign="left" w="70%" h="120px">
            <Text color="grey" fontWeight="500">APPLY PROMOCODE / NMS SUPERCASH</Text>
            <Flex gap="20px">
              <Box h="33px" w="6%">
                <input type="radio" />
                </Box>
                <Box>
                  <Select border="none" placeholder="Apply Promo Code">
                    <option>50%</option>
                    <option>25%</option>
                    <option>10%</option>
                  </Select>
                  <Text color="grey" fontSize="13px">Get flat discount! Vouchers applicable in payment Option</Text>
                </Box>
            </Flex>
           </Box>
        </SimpleGrid>
        <br/>
        <Box borderRadius="12px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" pl="14px" textAlign="left" mt="-130px" w="35%" mr="130px" h="200px" float="right">
        <Text color="grey" fontWeight="500">PAYMENT DETAILS</Text>
        <Box  lineHeight="30px" height="80%">
          <Flex gap="130px"><Text>MRP TOTAL</Text><Text>Rs.395.00</Text></Flex>
          <Flex gap="90px"><Text>Netmeds Discount</Text><Text>Rs.39.50</Text></Flex>
          <Flex gap="90px"><Text fontWeight="500">TOTAL AMOUNT</Text><Text fontWeight="500">Rs.355.50</Text></Flex>
          <NavLink to='/checkout'><Button backgroundColor="#24AEB1" color="#fff" w="100%" mt="20px">PROCEED</Button></NavLink>
        </Box>
        
        </Box>

      </Box>
      
    </Box>
  )
}

export default Cart