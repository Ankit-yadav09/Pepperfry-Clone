import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    Box,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartItemCard from './CartItemCard'

export default function CartSideBar({ isOpen, onOpen, onClose }) {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const { cartItems } = useSelector((store) => store.cart)
    const btnRef = React.useRef()
    const n = useNavigate()
React.useEffect(()=>{
    axios({
        method:"get",
        url:"https://naughty-pear-bream.cyclic.app/cartItem/product",
        
        headers:{
          authorization:localStorage.getItem("token"),
          "content-type":"application/json"
        }
      }).then(res=>console.log(res.data))
})
    return (
        <>
            {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button> */}
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"md"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={"white"} />
                    <DrawerHeader
                        bgColor={"black"}
                        color={"white"}
                    >
                        <Text fontSize={"sm"} fontWeight={"400"}>
                            Showing Availibity At &nbsp;<input style={{ "height": "40px" }} /> &nbsp; Check
                        </Text>

                    </DrawerHeader>

                    <DrawerBody padding={"0"}>
                        <Tabs variant='enclosed'>
                            <Box bgColor={"black"} color="white">
                                <TabList  >
                                    <Tab _selected={{ color: 'black', bg: 'white' }} fontWeight={"400"} >MY CART <span style={{
                                        "fontSize": "11px",
                                        "background-color": "#f16521",
                                        "color": "#fff",
                                        "text-align": "center",
                                        "border-radius": "10px",
                                        "padding": "2px 6px",
                                        "font-weight": "400",
                                        "margin": "0 0 0 2px"
                                    }}>{}</span> </Tab>
                                    <Tab _selected={{ color: 'black', bg: 'white' }} fontWeight={"400"} >MY WISHLIST</Tab>
                                    <Tab _selected={{ color: 'black', bg: 'white' }} fontWeight={"400"} >RECENTLY VIEWED</Tab>
                                </TabList>
                            </Box>
                            <TabPanels>
                                <TabPanel>
                                    {}
                                </TabPanel>
                                <TabPanel>
                                    <p>Wishlist!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </DrawerBody>

                    <DrawerFooter width={"full"}>
                      
                        <Button width={"full"} onClick={() => { n("/checkout") }} colorScheme='orange'>PROCEED TO PAY SECURELY</Button>
                       
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}