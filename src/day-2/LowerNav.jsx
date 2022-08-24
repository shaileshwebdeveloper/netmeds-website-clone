import { Box, Grid, Img, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import medicine from './icons/medicine.png';
import wellness from './icons/wellness.png';
import lab from './icons/test-tube.png'
import spray from './icons/spray.png'
import book from './icons/book.png'
import { NavLink } from 'react-router-dom';


const menuItem={
    // border:"1px solid red",
    width:"100%",
    paddingTop:"100px",
    
  }
  const itemBox={
    // border:"1px solid red",
    width:"80%",
    display:"flex",
    gap:"8px",
    color:"#fff",
    cursor:"pointer"
  }
  const menuImg={
    border:"1px solid lightgrey",
    backgroundColor:"#43CED1",
    width:"32px",
    borderRadius:"100%"
  }
  const uppermenu={
     height:"120px",
  }

function LowerNav() {
  return (
    <Box style={menuItem}>
    <Grid style={uppermenu}>
      <Box backgroundColor="#32AEB1" height="100%" cursor="pointer">
       <SimpleGrid columns={5} width="60%" margin="auto">
        {/* Medicine */}
        <Box style={itemBox}>
          <Img style={menuImg} src={medicine} />
          <Popover>
           <PopoverTrigger>
           <Select mt="7px" variant="unstyled" placeholder="Medicine"></Select>
           </PopoverTrigger>
           <PopoverContent>
           <PopoverArrow  />
            <PopoverCloseButton />
            <PopoverBody color="black" cursor="pointer">
              <option>All Medicine</option>
              <option>Previously Ordered</option>
            </PopoverBody>
            </PopoverContent>

          </Popover>
        </Box>
{/* Wellness */}
        <NavLink to="/wellness"><Box style={itemBox}>
          <Img style={menuImg} src={wellness} />
          <Text mt="7px">Wellness</Text>
        </Box></NavLink>
{/* Lab Test */}
        <NavLink to="/health-packages">
        <Box style={itemBox}>
          <Img style={menuImg} src={lab} />
          <Text mt="7px">Lab Tests</Text>
        </Box>
        </NavLink>
          {/* Beauty */}
             
          <Box style={itemBox}>
          <Img style={menuImg} src={spray} />
          <Popover>
           <PopoverTrigger>
           <Select mt="7px" variant="unstyled" placeholder="Beauty"></Select>
           </PopoverTrigger>
           <PopoverContent>
           <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody color="black" cursor="pointer">
              <option>Personal Care</option>
              <option>Make Up</option>
              <option>Hair</option>
              <option>Skin Care</option>
              <option>Tools & Appliances</option>
              <option>Mom & Baby</option>
              <option>Fragnances</option>
              <option>Man's Grooming</option>
            </PopoverBody>
            </PopoverContent>

          </Popover>
        </Box>
        {/* Health Corner */}
        <Box style={itemBox}>
          <Img style={menuImg} src={book} />
          <Popover>
           <PopoverTrigger>
           <Select mt="7px" variant="unstyled" placeholder="Health Corner"></Select>
           </PopoverTrigger>
           <PopoverContent>
           <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody color="black" cursor="pointer">
              <option>Health library</option>
              <option>PatientsAlike</option>
              <option>Corona Awareness</option>
            </PopoverBody>
            </PopoverContent>

          </Popover>
        </Box>

       </SimpleGrid>
      </Box>

      <Box backgroundColor="#F2F7FA" height="100%" display="flex" gap="10px" >
       <Box paddingLeft="65px" width="70%" display="flex" gap="20px" height="100%" margin="auto" fontWeight="600">
       <NavLink to="#">COVID Essentials</NavLink>
        <NavLink to="#">Diabetes</NavLink>
        <NavLink to="#">Eyewear</NavLink>
        <NavLink to="#">Ayush</NavLink>
        <NavLink to="#">Ayurvedic</NavLink>
        <NavLink to="#">Homeopathy</NavLink>
        <NavLink to="#">Fitness</NavLink>
        <NavLink to="#">Mom & Baby</NavLink>
        <NavLink to="#">Devices</NavLink>
        <NavLink to="#">Surgicals</NavLink>
        <NavLink to="#">Sexual Awareness</NavLink>
        <NavLink to="#">Treaments</NavLink>
       </Box>
      </Box>
    </Grid>
  </Box>
  )
}

export default LowerNav