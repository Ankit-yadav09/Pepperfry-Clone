import { Stack } from "@chakra-ui/react";
import React from "react";
import styles from "./navbar.module.css"

function Furniture() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"} >
          <p>Sofas and Recliners</p>
          <p>Seating</p>
          <p>Chairs</p>
          <p>Beds</p>
          <p>Cabinetry</p>
          <p>Tables</p>
          <p>Dining</p>
          <p>Kids and Teens</p>
          <p>Home Office</p>
          <p>Sofa Chairs</p>
          <p>Entertainment Units</p>
          <p>Outdoor</p>
          <p>Bar Furniture</p>
          <p>Furniture & Home Services</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>3 Seater Sofas</p>
          <p style={{ fontWeight: "lighter" }}>2 Seater Sofas</p>
          <p style={{ fontWeight: "lighter" }}>1 Seater Sofas</p>
          <p style={{ fontWeight: "lighter" }}>Sofa Sets</p>
          <p style={{ fontWeight: "lighter" }}>Sectional Sofas</p>
          <p style={{ fontWeight: "lighter" }}>Recliners</p>
          <p style={{ fontWeight: "lighter" }}>Chaise Loungers</p>
          <p style={{ fontWeight: "lighter" }}>Sofa Cum Beds</p>
          <p style={{ fontWeight: "lighter" }}>Futons</p>
        </Stack>

        <Stack direction={"column"} p={"15px"} width={"350px"}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "Playfair Display,serif",
              margin: "0 0 12px",
              fontWeight: "700",
            }}
          >
            Popular Brands
          </h2>
          <Stack direction={"row"} justifyContent={"space-between"} gap={"60px"}>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>@home</p>
              <p style={{ fontWeight: "lighter" }}>Amberville</p>
              <p style={{ fontWeight: "lighter" }}>Bohemiana</p>
              <p style={{ fontWeight: "lighter" }}>CasaCraft</p>
              <p style={{ fontWeight: "lighter" }}>Chumbak</p>
              <p style={{ fontWeight: "lighter" }}>Crystal Furnitech</p>
              <p style={{ fontWeight: "lighter" }}>Durian</p>
              <p style={{ fontWeight: "lighter" }}>Duroflex</p>
              <p style={{ fontWeight: "lighter" }}>Evok</p>
              <p style={{ fontWeight: "lighter" }}>Febonic</p>
              <p style={{ fontWeight: "lighter" }}>Green Soul</p>
              <p style={{ fontWeight: "lighter" }}>HomeTown</p>
            </Stack>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>A GLOBIA CREATIONS</p>
              <p style={{ fontWeight: "lighter" }}>Mintwud</p>
              <p style={{ fontWeight: "lighter" }}>Mudramark</p>
              <p style={{ fontWeight: "lighter" }}>Nilkamal</p>
              <p style={{ fontWeight: "lighter" }}>Orange Tree</p>
              <p style={{ fontWeight: "lighter" }}>Sattva</p>
              <p style={{ fontWeight: "lighter" }}>Spacewood</p>
              <p style={{ fontWeight: "lighter" }}>Trevi Furniture</p>
              <p style={{ fontWeight: "lighter" }}>ValueWud</p>
              <p style={{ fontWeight: "lighter" }}>Wakefit</p>
              <p style={{ fontWeight: "lighter" }}>Woodsworth</p>
            </Stack>
          </Stack>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_HoverBanner_25April22.jpg"
          alt="banner"
        />
      </Stack>
    </div>
  );
}

function Mattresses() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%"
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"}>
          <p>Queen Size Beds</p>
          <p>King Size Beds</p>
          <p>Single Beds</p>
          <p>Mattresses</p>
          <p>Queen Size Bed Mattresses</p>
          <p>King Size Bed Mattresses</p>
          <p>Single Bed Mattresses</p>
          <p>Upholstered Beds</p>
          <p>Kids Beds</p>
          <p>Bunk Beds</p>
          <p>Bedding</p>
          <p>Blankets and Comforters</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>Modern</p>
          <p style={{ fontWeight: "lighter" }}>Mid-Century</p>
          <p style={{ fontWeight: "lighter" }}>Contemporary</p>
          <p style={{ fontWeight: "lighter" }}>Transitional</p>
          <p style={{ fontWeight: "lighter" }}>Traditional</p>
          <p style={{ fontWeight: "lighter" }}>Mission</p>
          <p style={{ fontWeight: "lighter" }}>Platform</p>
          <p style={{ fontWeight: "lighter" }}>All Queen Size Beds</p>
        </Stack>

        <Stack direction={"column"} p={"15px"} width={"350px"}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "Playfair Display,serif",
              margin: "0 0 12px",
              fontWeight: "700",
            }}
          >
            Popular Brands
          </h2>
          <Stack direction={"row"} justifyContent={"space-between"} gap={"60px"}>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>@home</p>
              <p style={{ fontWeight: "lighter" }}>Amberville</p>
              <p style={{ fontWeight: "lighter" }}>Bohemiana</p>
              <p style={{ fontWeight: "lighter" }}>CasaCraft</p>
              <p style={{ fontWeight: "lighter" }}>Chumbak</p>
              <p style={{ fontWeight: "lighter" }}>Crystal Furnitech</p>
              <p style={{ fontWeight: "lighter" }}>Durian</p>
              <p style={{ fontWeight: "lighter" }}>Duroflex</p>
              <p style={{ fontWeight: "lighter" }}>Evok</p>
              <p style={{ fontWeight: "lighter" }}>Febonic</p>
              <p style={{ fontWeight: "lighter" }}>Green Soul</p>
              <p style={{ fontWeight: "lighter" }}>HomeTown</p>
            </Stack>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>A GLOBIA CREATIONS</p>
              <p style={{ fontWeight: "lighter" }}>Mintwud</p>
              <p style={{ fontWeight: "lighter" }}>Mudramark</p>
              <p style={{ fontWeight: "lighter" }}>Nilkamal</p>
              <p style={{ fontWeight: "lighter" }}>Orange Tree</p>
              <p style={{ fontWeight: "lighter" }}>Sattva</p>
              <p style={{ fontWeight: "lighter" }}>Spacewood</p>
              <p style={{ fontWeight: "lighter" }}>Trevi Furniture</p>
              <p style={{ fontWeight: "lighter" }}>ValueWud</p>
              <p style={{ fontWeight: "lighter" }}>Wakefit</p>
              <p style={{ fontWeight: "lighter" }}>Woodsworth</p>
            </Stack>
          </Stack>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Beds_&_Mattresses_HoverBanner_25April22.jpg"
          alt="banner"
        />
      </Stack>
    </div>
  );
}

function KitchenDining() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%"
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"}>
          <p>Dinnerware</p>
          <p>Serveware</p>
          <p>Drinkware</p>
          <p>Barware</p>
          <p>Teaware</p>
          <p>Bakeware</p>
          <p>Table Linen</p>
          <p>Dining Furniture</p>
          <p>Bar Furniture</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>Dinnerware Sets</p>
          <p style={{ fontWeight: "lighter" }}>Dinner Plates</p>
          <p style={{ fontWeight: "lighter" }}>Side Plates</p>
          <p style={{ fontWeight: "lighter" }}>Dinner Bowls</p>
          <p style={{ fontWeight: "lighter" }}>Knives & Cutlery</p>
        </Stack>

        <Stack direction={"column"} p={"15px"} width={"350px"}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "Playfair Display,serif",
              margin: "0 0 12px",
              fontWeight: "700",
            }}
          >
            Popular Brands
          </h2>
          <Stack direction={"row"} justifyContent={"space-between"} gap={"60px"}>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>@home</p>
              <p style={{ fontWeight: "lighter" }}>Amberville</p>
              <p style={{ fontWeight: "lighter" }}>Bohemiana</p>
              <p style={{ fontWeight: "lighter" }}>CasaCraft</p>
              <p style={{ fontWeight: "lighter" }}>Chumbak</p>
              <p style={{ fontWeight: "lighter" }}>Crystal Furnitech</p>
              <p style={{ fontWeight: "lighter" }}>Durian</p>
              <p style={{ fontWeight: "lighter" }}>Duroflex</p>
              <p style={{ fontWeight: "lighter" }}>Evok</p>
              <p style={{ fontWeight: "lighter" }}>Febonic</p>
              <p style={{ fontWeight: "lighter" }}>Green Soul</p>
              <p style={{ fontWeight: "lighter" }}>HomeTown</p>
            </Stack>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>A GLOBIA CREATIONS</p>
              <p style={{ fontWeight: "lighter" }}>Mintwud</p>
              <p style={{ fontWeight: "lighter" }}>Mudramark</p>
              <p style={{ fontWeight: "lighter" }}>Nilkamal</p>
              <p style={{ fontWeight: "lighter" }}>Orange Tree</p>
              <p style={{ fontWeight: "lighter" }}>Sattva</p>
              <p style={{ fontWeight: "lighter" }}>Spacewood</p>
              <p style={{ fontWeight: "lighter" }}>Trevi Furniture</p>
              <p style={{ fontWeight: "lighter" }}>ValueWud</p>
              <p style={{ fontWeight: "lighter" }}>Wakefit</p>
              <p style={{ fontWeight: "lighter" }}>Woodsworth</p>
            </Stack>
          </Stack>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Dining_&_Bar-Dinnerware_HoverBanner_25April22.jpg"
          alt="banner"
        />
      </Stack>
    </div>
  );
}

function HomeDecor() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%"
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"}>
          <p>Table Decor</p>
          <p>Wall Shelves & Cabinets</p>
          <p>Wall Art</p>
          <p>Spiritual</p>
          <p>Kids Decor</p>
          <p>Mirrors</p>
          <p>Clocks</p>
          <p>Home Garden</p>
          <p>Tableware</p>
          <p>Screens & Dividers</p>
          <p>Photo Frames</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>Table Clocks</p>
          <p style={{ fontWeight: "lighter" }}>Vases</p>
          <p style={{ fontWeight: "lighter" }}>Figurines</p>
          <p style={{ fontWeight: "lighter" }}>Candle Holders</p>
          <p style={{ fontWeight: "lighter" }}>Indoor Fountains</p>
          <p style={{ fontWeight: "lighter" }}>Table Organizers</p>
          <p style={{ fontWeight: "lighter" }}>Decorative Plates</p>
          <p style={{ fontWeight: "lighter" }}>Collectables</p>
          <p style={{ fontWeight: "lighter" }}>Home Fragrances</p>
        </Stack>

        <Stack direction={"column"} p={"15px"} width={"350px"}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "Playfair Display,serif",
              margin: "0 0 12px",
              fontWeight: "700",
            }}
          >
            Popular Brands
          </h2>
          <Stack direction={"row"} justifyContent={"space-between"} gap={"60px"}>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>@home</p>
              <p style={{ fontWeight: "lighter" }}>Amberville</p>
              <p style={{ fontWeight: "lighter" }}>Bohemiana</p>
              <p style={{ fontWeight: "lighter" }}>CasaCraft</p>
              <p style={{ fontWeight: "lighter" }}>Chumbak</p>
              <p style={{ fontWeight: "lighter" }}>Crystal Furnitech</p>
              <p style={{ fontWeight: "lighter" }}>Durian</p>
              <p style={{ fontWeight: "lighter" }}>Duroflex</p>
              <p style={{ fontWeight: "lighter" }}>Evok</p>
              <p style={{ fontWeight: "lighter" }}>Febonic</p>
              <p style={{ fontWeight: "lighter" }}>Green Soul</p>
              <p style={{ fontWeight: "lighter" }}>HomeTown</p>
            </Stack>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>A GLOBIA CREATIONS</p>
              <p style={{ fontWeight: "lighter" }}>Mintwud</p>
              <p style={{ fontWeight: "lighter" }}>Mudramark</p>
              <p style={{ fontWeight: "lighter" }}>Nilkamal</p>
              <p style={{ fontWeight: "lighter" }}>Orange Tree</p>
              <p style={{ fontWeight: "lighter" }}>Sattva</p>
              <p style={{ fontWeight: "lighter" }}>Spacewood</p>
              <p style={{ fontWeight: "lighter" }}>Trevi Furniture</p>
              <p style={{ fontWeight: "lighter" }}>ValueWud</p>
              <p style={{ fontWeight: "lighter" }}>Wakefit</p>
              <p style={{ fontWeight: "lighter" }}>Woodsworth</p>
            </Stack>
          </Stack>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_HoverBanner_25April22.jpg"
          alt="banner"
        />
      </Stack>
    </div>
  );
}

function LampsLighting() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%"
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"}>
          <p>Floor Lamps</p>
          <p>Table Lamps</p>
          <p>Wall Lights</p>
          <p>Ceiling Lights</p>
          <p>Chandeliers</p>
          <p>LED Lights</p>
          <p>Smart Lights</p>
          <p>Outdoor Lights</p>
          <p>Festive Lights</p>
          <p>Lampshades</p>
          <p>Kids Lighting</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>Tripod Floor Lamps</p>
          <p style={{ fontWeight: "lighter" }}>Shelf Floor Lamps</p>
          <p style={{ fontWeight: "lighter" }}>Club Floor Lamps</p>
          <p style={{ fontWeight: "lighter" }}>Torchiere Floor Lamps</p>
          <p style={{ fontWeight: "lighter" }}>Column Floor Lamps</p>
          <p style={{ fontWeight: "lighter" }}>Novelty Floor Lamps</p>
        </Stack>

        <Stack direction={"column"} p={"15px"} width={"350px"}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "Playfair Display,serif",
              margin: "0 0 12px",
              fontWeight: "700",
            }}
          >
            Popular Brands
          </h2>
          <Stack direction={"row"} justifyContent={"space-between"} gap={"60px"}>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>@home</p>

              <p style={{ fontWeight: "lighter" }}>HomeTown</p>
              <p style={{ fontWeight: "lighter" }}>Little Nap Designs</p>
              <p style={{ fontWeight: "lighter" }}>Mintwud</p>
              <p style={{ fontWeight: "lighter" }}>Muebles Casa</p>
              <p style={{ fontWeight: "lighter" }}>Off the Shelf</p>
              <p style={{ fontWeight: "lighter" }}>Orange Tree</p>
              <p style={{ fontWeight: "lighter" }}>Recliners India</p>
              <p style={{ fontWeight: "lighter" }}>Trevi Furniture</p>
              <p style={{ fontWeight: "lighter" }}>Urban Living</p>
              <p style={{ fontWeight: "lighter" }}>Vittoria</p>
              <p style={{ fontWeight: "lighter" }}>Wakefit</p>
              <p style={{ fontWeight: "lighter" }}>Woodsworth</p>
            </Stack>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>Amberville</p>
              <p style={{ fontWeight: "lighter" }}>ARRA</p>
              <p style={{ fontWeight: "lighter" }}>Bantia Furniture</p>
              <p style={{ fontWeight: "lighter" }}>Bohemiana</p>
              <p style={{ fontWeight: "lighter" }}>CasaCraft</p>
              <p style={{ fontWeight: "lighter" }}>Chumbak</p>
              <p style={{ fontWeight: "lighter" }}>Dreamzz Furniture</p>
              <p style={{ fontWeight: "lighter" }}>Durian</p>
              <p style={{ fontWeight: "lighter" }}>Duroflex</p>
              <p style={{ fontWeight: "lighter" }}>Evok</p>
              <p style={{ fontWeight: "lighter" }}>Febonic</p>
              <p style={{ fontWeight: "lighter" }}>Furnitech</p>
              <p style={{ fontWeight: "lighter" }}>Furny</p>
            </Stack>
          </Stack>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Lighting_HoverBanner_25April22.jpg"
          alt="banner"
        />
      </Stack>
    </div>
  );
}

function Furnishing() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%"
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"}>
          <p>Bed Linen</p>
          <p>Curtains</p>
          <p>Blankets and Comforters</p>
          <p>Cushions & Covers</p>
          <p>Carpets & Dhurries</p>
          <p>Doormats</p>
          <p>Bath Linen</p>
          <p>Kids Furnishings</p>
          <p>Table Linen</p>
          <p>Organizers</p>
          <p>Essentials</p>
          <p>Umbrellas</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>Bed Sheets</p>
          <p style={{ fontWeight: "lighter" }}>Bedding Sets</p>
          <p style={{ fontWeight: "lighter" }}>Pillows</p>
          <p style={{ fontWeight: "lighter" }}>Pillow Covers</p>
          <p style={{ fontWeight: "lighter" }}>Bed Covers</p>
          <p style={{ fontWeight: "lighter" }}>Diwan Sets</p>
          <p style={{ fontWeight: "lighter" }}>Mattress Toppers</p>
          <p style={{ fontWeight: "lighter" }}>Mattress Protectors</p>
        </Stack>

        <Stack direction={"column"} p={"15px"} width={"350px"}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "Playfair Display,serif",
              margin: "0 0 12px",
              fontWeight: "700",
            }}
          >
            Popular Brands
          </h2>
          <Stack direction={"row"} justifyContent={"space-between"} gap={"60px"}>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>@home</p>
              <p style={{ fontWeight: "lighter" }}>Amberville</p>
              <p style={{ fontWeight: "lighter" }}>Bohemiana</p>
              <p style={{ fontWeight: "lighter" }}>CasaCraft</p>
              <p style={{ fontWeight: "lighter" }}>Chumbak</p>
              <p style={{ fontWeight: "lighter" }}>Crystal Furnitech</p>
              <p style={{ fontWeight: "lighter" }}>Durian</p>
              <p style={{ fontWeight: "lighter" }}>Duroflex</p>
              <p style={{ fontWeight: "lighter" }}>Evok</p>
              <p style={{ fontWeight: "lighter" }}>Febonic</p>
              <p style={{ fontWeight: "lighter" }}>Green Soul</p>
              <p style={{ fontWeight: "lighter" }}>HomeTown</p>
            </Stack>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>A GLOBIA CREATIONS</p>
              <p style={{ fontWeight: "lighter" }}>Mintwud</p>
              <p style={{ fontWeight: "lighter" }}>Mudramark</p>
              <p style={{ fontWeight: "lighter" }}>Nilkamal</p>
              <p style={{ fontWeight: "lighter" }}>Orange Tree</p>
              <p style={{ fontWeight: "lighter" }}>Sattva</p>
              <p style={{ fontWeight: "lighter" }}>Spacewood</p>
              <p style={{ fontWeight: "lighter" }}>Trevi Furniture</p>
              <p style={{ fontWeight: "lighter" }}>ValueWud</p>
              <p style={{ fontWeight: "lighter" }}>Wakefit</p>
              <p style={{ fontWeight: "lighter" }}>Woodsworth</p>
            </Stack>
          </Stack>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_Linen_HoverBanner_25April22.jpg"
          alt="banner"
        />
      </Stack>
    </div>
  );
}

function Appliances() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%"
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"}>
          <p>Mixers & Processors</p>
          <p>Breakfast Appliances</p>
          <p>OTGs</p>
          <p>Cooktops</p>
          <p>Chimneys</p>
          <p>Heating & Cooling</p>
          <p>Televisions</p>
          <p>Home Audio</p>
          <p>Refrigerators</p>
          <p>Laundry</p>
          <p>Cleaning</p>
          <p>Purifiers</p>
          <p>Built-in Appliances</p>
          <p>Food Makers</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>Mixer Grinders</p>
          <p style={{ fontWeight: "lighter" }}>Juicer Mixer Grinders</p>
          <p style={{ fontWeight: "lighter" }}>Juicers</p>
          <p style={{ fontWeight: "lighter" }}>Hand Blenders</p>
          <p style={{ fontWeight: "lighter" }}>Food Processors</p>
          <p style={{ fontWeight: "lighter" }}>Choppers</p>
        </Stack>

        <Stack direction={"column"} p={"15px"} width={"350px"}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "Playfair Display,serif",
              margin: "0 0 12px",
              fontWeight: "700",
            }}
          >
            Popular Brands
          </h2>
          <Stack direction={"row"} justifyContent={"space-between"} gap={"60px"}>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>@home</p>
              <p style={{ fontWeight: "lighter" }}>Amberville</p>
              <p style={{ fontWeight: "lighter" }}>Bohemiana</p>
              <p style={{ fontWeight: "lighter" }}>CasaCraft</p>
              <p style={{ fontWeight: "lighter" }}>Chumbak</p>
              <p style={{ fontWeight: "lighter" }}>Crystal Furnitech</p>
              <p style={{ fontWeight: "lighter" }}>Durian</p>
              <p style={{ fontWeight: "lighter" }}>Duroflex</p>
              <p style={{ fontWeight: "lighter" }}>Evok</p>
              <p style={{ fontWeight: "lighter" }}>Febonic</p>
              <p style={{ fontWeight: "lighter" }}>Green Soul</p>
              <p style={{ fontWeight: "lighter" }}>HomeTown</p>
            </Stack>
            <Stack>
              <p style={{ fontWeight: "lighter" }}>A GLOBIA CREATIONS</p>
              <p style={{ fontWeight: "lighter" }}>Mintwud</p>
              <p style={{ fontWeight: "lighter" }}>Mudramark</p>
              <p style={{ fontWeight: "lighter" }}>Nilkamal</p>
              <p style={{ fontWeight: "lighter" }}>Orange Tree</p>
              <p style={{ fontWeight: "lighter" }}>Sattva</p>
              <p style={{ fontWeight: "lighter" }}>Spacewood</p>
              <p style={{ fontWeight: "lighter" }}>Trevi Furniture</p>
              <p style={{ fontWeight: "lighter" }}>ValueWud</p>
              <p style={{ fontWeight: "lighter" }}>Wakefit</p>
              <p style={{ fontWeight: "lighter" }}>Woodsworth</p>
            </Stack>
          </Stack>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Appliances_HoverBanner_25April22.jpg"
          alt="banner"
        />
      </Stack>
    </div>
  );
}

function Modular() {
  return (
    <div
      style={{
        position: "absolute",
        boxShadow: "0 2px 12px 0 rgb(0 0 0 / 21%)",
        backgroundColor: "#fff",
        zIndex: 1,
        left: "80px",
        top: "145px",
        marginTop:"15px",
        width:"90%"
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack className={styles.SubCatFurniture} direction={"column"} p={"15px"} minWidth={"250px"}>
          <p>Modular Kitchens</p>
          <p>Modular Wardrobes</p>
        </Stack>
        <Stack
          direction={"column"}
          backgroundColor={"#F2F2F2"}
          p={"15px"}
          width={"200px"}
        >
          <p style={{ fontWeight: "lighter" }}>Straight Kitchen</p>
          <p style={{ fontWeight: "lighter" }}>L Shaped Kitchen</p>
          <p style={{ fontWeight: "lighter" }}>Parallel Kitchen</p>
          <p style={{ fontWeight: "lighter" }}>U Shaped Kitchen</p>
          <p style={{ fontWeight: "lighter" }}>Island Kitchen</p>
        </Stack>

        <img
          src="https://ii1.pepperfry.com/media/wysiwyg/banners/Modular_HoverBanner_25April22.jpg"
          alt="banner"
          style={{ maxWidth: "740px" }}
        />
      </Stack>
    </div>
  );
}

export {
  Furniture,
  Mattresses,
  KitchenDining,
  HomeDecor,
  LampsLighting,
  Furnishing,
  Appliances,
  Modular,
};

