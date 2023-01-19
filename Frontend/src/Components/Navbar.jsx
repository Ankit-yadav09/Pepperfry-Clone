import { Box, Input, InputGroup, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineHeart  } from 'react-icons/hi';
import { RiUserLine  } from 'react-icons/ri';
import { AiOutlineShoppingCart  } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <Box 
        // style={{border:"1px solid black"}}
        >

            {/* ABOVE NAVBAR START */}
            <Box 
            // style={{border:"1px solid green"}}
            >
                <div className={styles.aboveNavDiv} >

            <Stack direction={"row"} spacing="20px">
              <Text className={styles.aboveNavLeft}>
                <Link to="">Sell on Pepperfry</Link>
              </Text>
              <Text className={styles.aboveNavLeft}>
                <Link to="">Become a Franchisee</Link>
              </Text>
              <Text className={styles.aboveNavLeft}>
                <Link to="">Buy in Bulk</Link>
              </Text>
              <Text className={styles.aboveNavLeft}>
                <Link to="">Find a Studio</Link>
              </Text>
              <Text className={styles.aboveNavLeft}>
                <Link to="">Find Design Inspiration</Link>
              </Text>
            </Stack>
            <Stack direction={"row"} spacing="10px">
              <Text className={styles.aboveNavRight}>
                <Link to="">Enter pincode</Link>
              </Text>
              <Text id={styles.pepperStudio} className={styles.aboveNavRight}
              >
                <Link to="">Find pepperfry studio</Link>
              </Text>
            </Stack>
                </div>
            </Box>
            {/* ABOVE NAVBAR END */}

            {/* NAVBAR */}
            <Box className={styles.NavOuterDiv}>
          
          <div className={styles.NavLogoSearchDiv}>
          
            <Link to="/">
              <img
                className={styles.brandLogo}
                src="./Images/nem-project-logo2.png"
                alt="Brand-logo"
              />
            </Link>
            <Box width={"72%"} marginRight={"15px"}>
                <Input
                  bg="#f5f5f5"
                  borderRadius="0px"
                  border="none"
                  type="text"
                  fontSize="15px"
                  placeholder="Your door to happiness starts with a search"
                />
            </Box>

            <Stack direction={"row"} spacing="20px">
              <button
                style={{
                    verticalAlign: "middle",
                  width: "50px",
                  backgroundSize: "40px",
                  background:
                    "url(https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg) no-repeat center",
                }}
              ></button>
              <Menu>
                <MenuButton>
                    <Icon style={{fontSize:"25px"}}><RiUserLine /></Icon>
                    <span
                      style={{
                        position: "relative",
                        fontSize: "1px",
                        backgroundColor: "orange",
                        border: "4px solid orange",
                        borderRadius: "100%",
                        top: "-14px",
                        left: "-8px",
                      }}
                    ></span>
                </MenuButton>

                  <MenuList>

                    <MenuItem>My Account</MenuItem>
                    <MenuItem>My Orders</MenuItem>
                    <MenuItem>My Reviews</MenuItem>
                    <MenuItem>My Wishlist</MenuItem>
                    <MenuItem>My Wallet</MenuItem>
                    <MenuDivider />
                    <MenuItem>Edit Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
              </Menu>
                      
            <Icon style={{fontSize:"25px"}}><HiOutlineHeart /></Icon>
            <Icon style={{fontSize:"25px"}}><AiOutlineShoppingCart /></Icon>
    
            </Stack>
          </div>
        </Box>

        </Box>
    </div>
  )
}

export default Navbar