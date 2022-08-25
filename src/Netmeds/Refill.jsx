import { Box, Button, Flex, Heading, Img, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const container={
  height:"540px",
  width:"80%",
  margin:"auto",
  marginBottom:"40px"
}
const health={
  height:"300px",
  backgroundColor:"#fff"
}
function Refill() {
  return (
    <Box style={container}>
         <Box borderBottom="1px solid lightgrey" h="150px">
            <Flex gap="20px">
               <Box h="150px" w="10%">
                <Img w="80px" ml="20px" mt="30px" src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg" />
               </Box>
               <Box h="150px" w="100%">
                <Heading textAlign="left" pl="10px" fontSize="22px">Get medicine refill every month</Heading>
                <Box textAlign="left" mt="10px" w="50%" h="80px" ml="40px">
                  <li>Subscribe and schedule next deliveries</li>
                  <li>Subscribe for 12 months and get the last month free. *T&C Apply</li>
                </Box>
               </Box>
               <Box h="150px" w="30%">
                <Button backgroundColor="#24AEB1" color='#fff' ml="150px" mt="24px">Subscribe</Button>
               </Box>
            </Flex>
         </Box>
         <Box mt="30px">
           <Heading fontSize="22px" textAlign="left">Health Concerns</Heading>
           <Box mt="15px" h="300px">
              <SimpleGrid columns={5} gap="20px">
                 <Box style={health}>
                  <Img w="130px" ml="70px" mt="30px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1"/>
                  <Heading fontSize="22px" mt="20px">Lung Care</Heading>
                 </Box>
                 <Box style={health}>
                 <Img w="130px" ml="70px" mt="30px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1"/>
                  <Heading fontSize="22px" mt="20px">Weight Care</Heading>
                 </Box>
                 <Box style={health}>
                 <Img w="130px" ml="70px" mt="30px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1"/>
                  <Heading fontSize="22px" mt="20px">Women's Care</Heading>
                 </Box>
                 <Box style={health}>
                 <Img w="130px" ml="70px" mt="30px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1"/>
                  <Heading fontSize="22px" mt="20px">Bone And Joint Pain</Heading>
                 </Box>
                 <Box style={health}>
                 <Img w="130px" ml="70px" mt="30px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1"/>
                  <Heading fontSize="22px" mt="20px">Cold Aand Fear</Heading>
                 </Box>
              </SimpleGrid>
           </Box>
         </Box>
    </Box>
  )
}

export default Refill