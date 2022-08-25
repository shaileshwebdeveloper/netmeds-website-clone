import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import style from "./category.module.css"








export const Category = () => {
  return (
    <div>


<Grid templateColumns='repeat(3, 1fr)' gap={4} className={style.test}>
  <GridItem w='100%' h='80px' className={style.inner}> 
     
     <Image width="50px" src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"/>

      <div>
      <Text fontSize='lg' as="b">Order Medicine</Text>
      <Text fontSize='md' color="green" fontWeight="500">Save Upto 25% off</Text>
      </div>

  </GridItem>
  <GridItem w='100%' h='80px' className={style.inner}>
    
  <Image width="50px" src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"/>

<div>
<Text fontSize='lg'>Beauty</Text>
<Text fontSize='md' color="green" fontWeight="500">Save Upto 40% off</Text>
</div> </GridItem>
  <GridItem w='100%' h='80px'  className={style.inner}> 
  
  
  <Image width="50px" src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"/>

<div>
<Text fontSize='lg' >Wellness</Text>
<Text fontSize='md' color="green" fontWeight="500">Flat 15% off</Text>
</div>

</GridItem>
</Grid>


    </div>
  )
}
