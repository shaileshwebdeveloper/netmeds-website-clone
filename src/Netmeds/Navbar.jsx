import { Box, HStack, Img, Input, InputGroup, InputLeftAddon,Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Heading,
  Text,
  Flex, } from '@chakra-ui/react'
import { useContext } from 'react';

// import React, { useContext } from 'react'
import {FaSearchLocation} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
// import { AuthContext } from '../day-3/AuthContext/AuthContext';


const NavContainer={
 display : "flex",
 width:"100%",
 height:"100px",
 backgroundColor:"#32AEB1",
 position:"fixed",
 color:"#fff",
 zIndex:"20"
}
const modal={
  marginLeft:"-125px",
  
}
const textStyle={
  display:"flex",
  color:"#EE4280",
  marginTop:"12px",
  gap:"10px"
}
function Navbar({toggle}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const auth = useContext(AuthContext)
  // console.log("toggle:",toggle)
  
return (
  <>
  <Box style={NavContainer}>
  <HStack width="60%" margin="auto" gap="60px" mt="20px">
  <NavLink to="/"><Img w="500px" h="60px" src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" /></NavLink>
  <InputGroup>
  <InputLeftAddon width="150px" height="50px" cursor="pointer" fontWeight="700" backgroundColor="#fff" color="black" children="Deliver to 110094" onClick={onOpen}/>
  <Modal  isOpen={isOpen} onClose={onClose}>
      <ModalContent style={modal}>
        <ModalBody>
          <Heading fontSize="18px">Enter Pincode</Heading>
          <Text fontSize="12px">Select pincode to see product availability.</Text>
          <Input type="text" placeholder="Enter Pincode" />
          <Text style={textStyle}><FaSearchLocation style={{width:"20px",height:"20px" ,fontWeight:"100"}}/>Detect my location</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  <Input backgroundColor="#fff" height="50px"  width="00px" type="text" placeholder="Search for medicine & wellness products..." color="lightgrey" />
  </InputGroup>
  <Button variant="link" color="#fff"><i className="fa-solid fa-scroll">&nbsp;</i>Upload</Button>
  <NavLink to="/cart"><Button variant="link" color="#fff"><i className="fa-solid fa-cart-shopping">&nbsp;</i>Cart</Button></NavLink>

  {toggle === true ? <NavLink to="/profile"><Button variant="link" color="#fff"><i className="fa-solid fa-user"></i>&nbsp; Guest</Button></NavLink> : <NavLink to="/login"> <Button variant="link" color="#fff"><i className="fa-solid fa-user"></i>&nbsp; Sign in/Sign up</Button> </NavLink>}

  </HStack>
  </Box>
  </>
)
}

export default Navbar