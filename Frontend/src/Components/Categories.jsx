import { Box, Stack } from '@chakra-ui/layout';
import { Link } from 'react-router-dom'
import React from 'react'
import {  Mattresses, HomeDecor, KitchenDining, Appliances, Furnishing, Furniture, LampsLighting, Modular, } from "./DropDownCategory";

const Categories = () => {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [dropCategory, setdropCategory] = React.useState(null);
  return (
    <div style={{border:"1px solid lightgrey",borderLeft:"0px",borderRight:"0px", marginTop:"10px",marginBottom:"10px"}}>
        <Box
          style={{
            margin:"auto",
            display: "flex",
            justifyContent:"space-between",
            padding: "15px 15px",
            width:"90%",
            // border:"1px solid grey"
          }}
        >
          <Stack direction={["row"]} spacing="80px" onMouseEnter={()=>{setShowDropdown(true)}} onMouseLeave={()=>{setShowDropdown(false);setdropCategory(null)}} >
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/furniture" onMouseEnter={()=>{setdropCategory("furniture")}}>Furniture</Link>
              {showDropdown && dropCategory === "furniture" ? <Furniture/> : null}
            </li>
            
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/mattresses" onMouseEnter={()=>{setdropCategory("mattresses")}}>Mattresses</Link>
              {showDropdown && dropCategory === "mattresses" ? <Mattresses/> : null}
            </li>
           
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/kitchendining" onMouseEnter={()=>{setdropCategory("kitchendining")}}>Kitchen & Dining</Link>
              {showDropdown && dropCategory === "kitchendining" ? <KitchenDining/> : null}
            </li>
           
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/homedecor" onMouseEnter={()=>{setdropCategory("homedecor")}}>Home Decor</Link>
              {showDropdown && dropCategory === "homedecor" ? <HomeDecor/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/light" onMouseEnter={()=>{setdropCategory("light")}}>Lamps Lighting</Link>
              {showDropdown && dropCategory === "light" ? <LampsLighting/>: null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/furnishing" onMouseEnter={()=>{setdropCategory("furnishing")}}>Furnishings</Link>
              {showDropdown && dropCategory === "furnishing" ? <Furnishing/> : null}
            </li>
            
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/appliances" onMouseEnter={()=>{setdropCategory("appliances")}}>Appliances</Link>
              {showDropdown && dropCategory === "appliances" ? <Appliances/> : null}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}
            >
              <Link to="/modular" onMouseEnter={()=>{setdropCategory("modular")}}>Modular</Link>
              {showDropdown && dropCategory === "modular" ? <Modular/> : null}
            </li>
          </Stack>
        </Box>
    </div>
  )
}

export default Categories