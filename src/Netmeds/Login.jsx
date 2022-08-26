import { Box, Button, Flex, Heading, HStack, Img, Input, InputGroup, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
// import google from './Icons/google.png'
// import facebook from './Icons/facebook.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext';
const LoginBox={
    width:"60%",
    margin:"auto",
    height:"600px",
    marginBottom:"100px",
    backgroundColor:"#fff",
    borderRadius:"20px"
}
function Login({setToggle}) {
  
   const [user,setUser] = useState({
    email: "",
    pass: ""
   });

   const Auth = useContext(AuthContext)
   const navigate = useNavigate()
   const handleChange=(e)=>{
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value
    });
   }
   function handleSubmit(e){
    e.preventDefault();
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(user)
    })
    .then((r)=>r.json())
    .then((r)=>{
      // alert("Success");
      Auth.handleLogin(r.token);
      setToggle(true)
      navigate("/")
    })
    .catch(err=>{
      console.log("Something went wrong!!!")
    })
   }
   
  return (
    <Box style={LoginBox}>
      <Flex>
        <Box pl="40px" w="50%" h="600px">
            <Img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" />
        </Box>
        <Box w="50%" h="600px">
         <Box textAlign="left" w="70%" margin="auto" mt="80px">
         <Heading fontSize="24px" fontWeight="500" lineHeight="29px">Sign In / Sign Up</Heading>
         <Text fontSize="14px" mt="10px">Sign up or Sign in to access your orders, special offers, health tips and more!</Text>
         <br />
         {/* Email */}
         <Text fontSize="13px" color="#24AEB1" >Email</Text>
        <HStack>
        <InputGroup>
         <Input variant="flushed" pl="10px" type="text" value={user.email}  placeholder="Enter your email..."  name="email" onChange={handleChange} />
        </InputGroup>
        </HStack>
        {/* Password */}
         <Text fontSize="13px" color="#24AEB1" >Password</Text>
        <HStack>
        <InputGroup>
         <Input variant="flushed" pl="10px" type="password" value={user.pass}  placeholder="Enter your password..." name="pass" onChange={handleChange} />
        </InputGroup>
        </HStack><br/><br/>
        <Button w="100%" backgroundColor="#24AEB1" color="#ffff" onClick={handleSubmit} ><Text>Sign In</Text></Button>
         </Box>
         {/* Google Facebook Icons */}
         <Box>
            <Flex w="70%" margin="auto" mt="60px" h="80px">
                <Box  h="80px" w="50%">
                    <Button backgroundColor="#fff" w="160px" border="1px solid lightgrey">
                        <Img w="26px" src="https://cdn-teams-slug.flaticon.com/google.jpg"/> &nbsp;
                        Google
                    </Button>
                </Box>
                <Box h="80px" w="50%">
                    <Button backgroundColor="#fff" w="160px" border="1px solid lightgrey">
                        <Img w="26px" src="https://i.pinimg.com/736x/67/5c/af/675cafde751be69ba38a16504cb93e39.jpg"/> &nbsp;
                        Facebook
                    </Button>
                </Box>
            </Flex>
         </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Login