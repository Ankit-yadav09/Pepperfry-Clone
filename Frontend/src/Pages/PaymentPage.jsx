import {
  Button,
  Center,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const toast = useToast()
  const navigate=useNavigate()

  const handleSubmit=()=>{

    toast({
      title:"Payment Successful!",
      status:"success",
      duration:1500,
      isClosable:true
    });
    setTimeout(()=>{
      navigate("/")
    },1500)
    
  }

  return (
    <>
      <div style={{width:"60%",margin:"auto"}} className="Card-main">
        <div className="Card-left">
          <Center>
            <img
              src="https://i.pinimg.com/originals/de/2c/46/de2c46c1fc8abad2c6eed23bc9642ad0.jpg"
              alt="debitcard"
              id="debit-card"
              width="20%"
              height={"500px"}
            />
          </Center>
        </div>
        <div className="Card-right">
          <Heading fontSize={"2xl"}>Your Payment Record</Heading>
          <br />
          <div>
            <label>Card-Holder Name</label>
            <InputGroup>
              <Input isRequired="true" focusBorderColor="#DBDAF0" variant="flushed" />
            </InputGroup>
          </div>
          <br />
          <div>
            <label>Card Number </label>
            <InputGroup mt={1}>
              <PinInput size="xs" focusBorderColor="#DBDAF0" variant="flushed">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="10px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="10px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField mr="10px" />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </InputGroup>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginTop: "10px" }}>
              <label>Expiry Date</label>
              <InputGroup>
                <Input
                  focusBorderColor="#DBDAF0"
                  variant="flushed"
                  type="month"
                />
              </InputGroup>
            </div>
            <div style={{ marginTop: "10px" }}>
              <label>CVV</label>
              <InputGroup>
                <Input
                  focusBorderColor="#DBDAF0"
                  type="password"
                />
              </InputGroup>
            </div>
          </div>
          <br />
          <div>
            <Checkbox  >
              Save my details for future payments
            </Checkbox>
          </div>
          <br />
        </div>
        <Button onClick={handleSubmit} m={"auto"} w={"20%"} backgroundColor="orange">Proceed</Button>
      </div>
    </>
  );
};