import { Box, Button, Flex, Grid, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext'

const container={
    width:"50%",
    margin:"auto",
    height:"900px",
    marginBottom:"100px"
}
const account={
    borderBottom:"1px solid lightgrey",
    width:"100%",
    height:"50px",
    textAlign:"left",
    paddingLeft:"40px",
    paddingTop:"12px",
    fontWeight:"500",
    cursor:"pointer"

}
function Profile({setToggle}) {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const handleClick=()=>{
        auth.handleLogout()
        setToggle(false)
        navigate("/login")
    }
  return (
    <Box style={container}>
        <Heading textAlign="left" fontSize="24px">Your Account</Heading>
     <Grid gridTemplateColumns={"repeat(2,1fr)"} mt="10px" gap="40px" >
        {/* account section */}
       <Box borderRadius="12px" backgroundColor="#FEFEFE" w="100%" h="120px">
       <Flex>
        <Box  w="40%" h="120px">
            <Img w="50px" ml="18px" mt="12px" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" />
        </Box>
        <Box w="100%" textAlign="left" lineHeight="6" pl="8px" h="120px">
            <Heading fontSize="24px" fontWeight="500" mt="12px">Guest</Heading>
            <Text fontSize="13px">guest@gmail.com</Text>
            <Text fontSize="13px">+91 9999998384</Text>
        </Box>
       </Flex>
       </Box>
       {/* Rewards */}
       <Box borderRadius="12px" backgroundColor="#FEFEFE" w="600px" h="120px">
        <Flex>
            <Box  margin="auto" w="30%" h="80px" mt="16px">
                <Img ml="60px" src="https://www.netmeds.com/msassets/images/icons/payment_history.svg" />
                 <Text cursor="pointer">Payment Methods</Text>
            </Box>
            <Box  margin="auto" w="30%" h="80px" mt="16px">
            <Img ml="60px" src="https://www.netmeds.com/msassets/images/icons/medicine_orders.svg" />
                 <Text cursor="pointer">Medicine Orders</Text>
            </Box>
            <Box  margin="auto" w="30%" h="80px" mt="16px">
            <Img ml="60px" src="https://www.netmeds.com/msassets/images/icons/rewards.svg" />
                 <Text cursor="pointer">My Rewards</Text>            
            </Box>
        </Flex>
       </Box>
       {/* Account Settings */}
       <Box borderRadius="12px" backgroundColor="#FEFEFE" w="100%" h="700px">
        <Box style={account}>
            <Text>Account Information</Text>
        </Box>
        <Box style={account}>
            <Text>My Wallet</Text>
        </Box>
        <Box style={account}><Text>My WishList</Text></Box>
        <Box style={account}><Text>Offers</Text></Box>
        <Box style={account}><Text>Netmeds First</Text></Box>
        <Box style={account}><Text>Delivery Addresses</Text></Box>
        <Box style={account}><Text>My Prescription</Text></Box>
        <Box style={account}><Text>My Subscription</Text></Box>
        <Box style={account}><Text>Refer & Earn</Text></Box>
        <Box style={account}><Text>Help?</Text></Box>
        <Box style={account}><Text>Legal Information</Text></Box>
        <Box style={account}><Text>Contact us</Text></Box>
        <Box style={account}><Text>Rate Us</Text></Box>
        <Box style={account}><Text onClick={handleClick}>Logout</Text></Box>
       </Box>
       <Box borderRadius="12px" backgroundColor="#FEFEFE" w="600px" h="300px">
        <Flex>
            <Box  textAlign="left" pl="10px" lineHeight="20px" w="100%" h="300px">
            <Text mt="20px" color="grey">LOGIN INFORMATION</Text><br/>
            <Text color="#32AEB1">Email</Text>
            <Text>guest@gmail.com</Text><br/>
            <Text color="#32AEB1">Moblie Nuumber</Text>
            <Text>+91-9999998384</Text>
            </Box>
            <Box textAlign="left" pl="10px" lineHeight="20px" w="100%" h="300px">
            <Text mt="20px" color="grey">PERSONAL INFORMATION</Text><br/>
            <Text color="#32AEB1">FULL NAME</Text>
            <Text>Guest</Text><br/>
            <Text color="#32AEB1">GENDER</Text>
            <Text>Male</Text>
            <Text color="#32AEB1">AGE</Text>
            <Text>30</Text>
            <Button ml="180px" mt="50px" color="red">Modify</Button>
            </Box>
        </Flex>
       </Box>
     </Grid>
    </Box>
  )
}

export default Profile