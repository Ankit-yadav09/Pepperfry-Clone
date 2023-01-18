import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <Box>
            <Box>
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
        </Box>
    </div>
  )
}

export default Navbar