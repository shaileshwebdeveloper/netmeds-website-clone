import React from 'react'
import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react'
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import  data from "./Products.json"

console.log(data)

const productContainer={
  width:"100%",
  backgroundColor: "white",
  margin : "auto",
  height:"380px",
  marginTop:"18px",
  textAlign:"left",
  padding:"5px",
  borderRadius:"12px",
  marginBottom:"12px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  color : "black"
}

const deal = {
  position : "relative",
  width : "90%",
  zIndex: "10",
  margin : "auto",
  backgroundColor : "teal",
  color : "#fff",
  height : "80px",
  padding : "10px",
  marginBottom : "350px"

}

const inner = {
  position: "absolute",
  width : "10%",
  align : "center",
  zIndex: "3",
  left: 0, 
  right: 0,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop : "30px",
  marginBottom : "300px"
}


// console.log(data)

export const Limited = () => {



  return (
     <Box  style={deal} height="100px">
    <Heading fontSize="22px" textAlign='left' pl="8px">Limited Time Deal</Heading>

    {/* <Box mt="40px" backgroundColor="#fff" borderRadius="12px" marginBottom={"30px"} width="90%" margin={"auto"}
     style={inner} 
    >  */}
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {
        data.map((item)=>
        <SwiperSlide>
            <Box style={productContainer} >
                <Img  width="70%" ml="45px" mt="8px" src={item.src} />
                <Text fontWeight="500" fontSize="14px" mt="4px">{item.title}</Text>
                <Flex mt="4px">Best price* <Text color="red" fontWeight="500">{item.price}</Text></Flex>
                <Flex>MRP &nbsp;<Text textDecoration="line-through">{item.mrp}</Text></Flex>
                <Button backgroundColor="#32AEB1" color="#ffff" w="100%">ADD TO CART</Button>
            </Box>
        </SwiperSlide>
        )
    }
    </Swiper>
    </Box>
    // </Box >   
  )
}
