import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import { addItem } from './cartSlice';
import CartSideBar from './CartSideBar';
import axios from 'axios';
const AddToCartBT = (props) => {
  
  const { isOpen: cartSideBarIsOpen, onOpen: cartSideBarOnOpen, onClose: cartSideBarOnClose } = useDisclosure()
  const handleAddToCart=async(payload)=>{
 const res= await axios({
    method:"post",
    url:"http://localhost:8050/cartItem/add",
    data:payload,
    headers:{
      authorization:localStorage.getItem("token"),
      "content-type":"application/json"
    }
  })
console.log(res)
  }
  return (
    <>
    <Button 
      onClick={() => {
      handleAddToCart({...props.product,quantity:1})
        cartSideBarOnOpen();
      }}
      rounded={"none"}
      w={"full"}
      mt={8}
      size={"lg"}
      h={"60px"}
      bg={props?.color?("#FF7135"):"none"}
      border="1px solid black"
      color={props?.color? "white": null }
      textTransform={"uppercase"}
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
    >
      Add to cart
      </Button>
      <CartSideBar isOpen={cartSideBarIsOpen} onOpen={cartSideBarOnOpen} onClose={cartSideBarOnClose} />
    </>
  );
}

export default AddToCartBT