import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { useDisclosure } from "@chakra-ui/hooks"
import { AddIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/input"
import { Box, Stack } from "@chakra-ui/layout"
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal"
import { Select } from "@chakra-ui/select"
import { Textarea } from "@chakra-ui/textarea"
import { useToast } from "@chakra-ui/toast"
import React from "react"
import { useNavigate } from "react-router"

function AddressPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const toast = useToast()
    const navigate=useNavigate()

  const handleSubmit=()=>{

    toast({
      title:"Submitted!",
      status:"success",
      duration:1500,
      isClosable:true
    })
    setTimeout(()=>{
      navigate("/payment")
    },1500)
    
    
  }

    return (
      <>
        <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
          Create user
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
          size={"md"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Address
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Name</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user name'
                    isRequired
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='mobile'>Mobile Number</FormLabel>
                  <Input
                    ref={firstField}
                    id='mobile'
                    placeholder='Please enter mobile number'
                    isRequired
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='pin'>Pin code</FormLabel>
                    <Input
                      type='number'
                      // id='pin'
                      placeholder='PIN Code'
                      isRequired
                    />
                </Box>

                <Box>
                  <FormLabel htmlFor='url'>Address Line 1</FormLabel>
                    <Input
                      type='text'
                      // id='address1'
                      placeholder='House/Flat/Block Number'
                      isRequired
                    />
                </Box>
                <Box>
                  <FormLabel htmlFor='url'>Address Line 2</FormLabel>
                    <Input
                      type='text'
                      // id='address2'
                      placeholder='Apartment/Building/Society Name'
                      isRequired
                    />
                </Box>
                <Box>
                  <FormLabel htmlFor='url'>City</FormLabel>
                    <Input
                      type='text'
                      // id='city'
                      placeholder='Select City'
                      isRequired
                    />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='states'>state</FormLabel>
                  <Select id='states' defaultValue='delhi'>
                    <option value='andaman and nicobar islands'>Andaman and Nicobar Islands</option>
                    <option value='andhra pradesh'>Andhra Pradesh</option>
                    <option value='arunachal pradesh'>Arunachal Pradesh</option>
                    <option value='assam'>Assam</option>
                    <option value='bihar'>bihar</option>
                    <option value='chandigarh'>chandigarh</option>
                    <option value='chattisgarh'>chattisgarh</option>
                    <option value='delhi'>Delhi</option>
                    <option value='goa'>goa</option>
                    <option value='gujarat'>Gujarat</option>
                    <option value='haryana'>Haryana</option>
                    <option value='himachal pradesh'>Himachal Pradesh</option>
                    <option value='jammu & kashmir'>jammu & kashmir</option>
                    <option value='jharkhand'>jharkhand</option>
                    <option value='karnataka'>karnataka</option>
                    <option value='kerala'>kerala</option>
                    <option value='lakshadweep'>lakshadweep</option>
                    <option value='madhya pradesh'>madhya pradesh</option>
                    <option value='maharastra'>maharastra</option>
                    <option value='manipur'>manipur</option>
                    <option value='meghalaya'>meghalaya</option>
                    <option value='mizoram'>mizoram</option>
                    <option value='nagaland'>nagaland</option>
                    <option value='odisha'>odisha</option>
                    <option value='other'>other</option>
                    <option value='puducherry'>puducherry</option>
                    <option value='punjab'>punjab</option>
                    <option value='rajasthan'>rajasthan</option>
                    <option value='sikkim'>sikkim</option>
                    <option value='tamil nadu'>tamil nadu</option>
                    <option value='telangana'>telangana</option>
                    <option value='tripura'>tripura</option>
                    <option value='utter pradesh'>utter pradesh</option>
                    <option value='uttrakhand'>Uttrakhand</option>
                    <option value='west bengal'>west bengal</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor='country'>Country</FormLabel>
                    <Input
                      type='text'
                      // id='countrty'
                      placeholder='India'
                      isRequired
                      isDisabled="true"
                    />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='states'>Type of Address</FormLabel>
                  <Select id='typeofaddress' defaultValue='home'>
                    <option value='home'>Home</option>
                    <option value='work'>work</option>
                    <option value='others'>others</option>
                  </Select>
                </Box>

              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button colorScheme='orange' w={"50%"} variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} w={"50%"} colorScheme='orange'>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default AddressPage