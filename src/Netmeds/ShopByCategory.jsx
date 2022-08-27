import { Box, Image, Grid, Text, GridItem } from '@chakra-ui/react'
import React from 'react'


export const ShopByCategory = () => {

  const data = [{
      "image" : "https://www.netmeds.com/images/category/v1/491/thumb/homeopathy_2.jpg",
      "title" : "Homeopathy"
  }, {
    "image" : "https://www.netmeds.com/images/category/3222/thumb/vitamins_and_supplements_1.jpg",
    "title" : "Vitamins and Supplement"
}, 
{      "image" : "https://www.netmeds.com/images/category/3141/thumb/respiratory_supplies_1.jpg",
"title" : "Respiratory Supplies"
}, 
{      "image" : "https://www.netmeds.com/images/category/3758/thumb/lotions_creams_0.jpg",
"title" : "Lotions and Creams"
}, 
{      "image" : "https://www.netmeds.com/images/category/3052/thumb/eyewear_1.jpg",
"title" : "Eyewear"
}, 
{      "image" : "https://www.netmeds.com/images/category/3086/thumb/baby_care_1.jpg",
"title" : "Baby Care"
}, {      "image" : "https://www.netmeds.com/images/category/675/thumb/measurements_1.jpg",
"title" : "Measurements"
}, 
{      "image" : "https://www.netmeds.com/images/category/3933/thumb/sexual_health_supplements_1.jpg",
"title" : "Sexual Health Supplements"
}, {      "image" : "https://www.netmeds.com/images/category/v1/3701/thumb/shampoos_1.jpg",
"title" : "Shampoos"
}, {      "image" : "https://www.netmeds.com/images/category/676/thumb/orthopaedics_1.jpg",
"title" : "Orthopaedics"
}, {      "image" : "https://www.netmeds.com/images/category/3087/thumb/feminine_hygiene_1.jpg",
"title" : "Feminine Hygiene"
}, {      "image" : "https://www.netmeds.com/images/category/3159/thumb/surgical_instrument_1.jpg",
"title" : "Surgical Instrument"
}, {      "image" : "https://www.netmeds.com/images/category/3210/thumb/weight_management_1.jpg",
"title" : "Weight Management"
}, {      "image" : "https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg",
"title" : "Ayurvedic"
}, {      "image" : "https://www.netmeds.com/images/category/3932/thumb/condoms_1.jpg",
"title" : "Condoms"
}, {      "image" : "https://www.netmeds.com/images/category/3089/thumb/maternity_care_1.jpg",
"title" : "Maternity Care"
}, {      "image" : "https://www.netmeds.com/images/category/3107/thumb/dressing_1.jpg",
"title" : "Dressing"
}, {      "image" : "https://www.netmeds.com/images/category/501/thumb/family_nutrition_1.jpg",
"title" : "Family Nutrition"
}, {      "image" : "https://www.netmeds.com/images/category/3495/thumb/face_wash_cleansers_3.jpg",
"title" : "Face Wash & Cleansers"
}, {      "image" : "https://www.netmeds.com/images/category/677/thumb/surgical_accessories_2.jpg",
"title" : "Surgical Accessories"
}]



  return (
    <div style={{marginBottom : "30px"}}>
          <Box marginBottom="30px">
          <Text fontSize="2xl" as="b" marginRight="76%">Shop by Category</Text>
          </Box>
        <Grid templateColumns='repeat(5, 1fr)' gap={6} style={{alignItems:"center" , justifyItems : "center", cursor : "pointer"}}>
        {data.map(item => (
            <GridItem  >
            <Image src={item.image}/>
            <Text fontSize={"lg"}>{item.title}</Text>
            </GridItem>
        ))}
        </Grid>
    </div>
  )
}
