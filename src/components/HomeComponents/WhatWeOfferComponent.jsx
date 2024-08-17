import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Pic1 from "../../assets/Images/pic1.png";
import Pic2 from "../../assets/Images/pic2.png";
import Pic3 from "../../assets/Images/pic3.png";

const WhatWeOfferComponent = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        width: "100%",
        height: !isMobile ? "595px" : "100%",
        backgroundColor: "#F5F6F7",
        position: "relative",
        marginBottom: "70px",
        paddingBottom: isMobile ? "70px" : "",
      }}
    >
      {/* title */}
      <Box pt={"70px"}>
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "83px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            marginTop: "20px",
            left: !isMobile ? "662px" : "110px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
          position="relative"
        >
          What we Offer?
        </Typography>
      </Box>

      {/* main container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: !isMobile ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
          gap: "20px",
        }}
      >
        {/* box 1 */}
        <Box
          sx={{
            width: "307px",
            height: "356px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "4px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/products/hdpe-tapes")}
        >
          <img
            src={Pic1}
            alt="image"
            style={{ width: "211px", height: "150px" }}
          />

          <Typography color={"#000080"} fontWeight={700} fontSize={18}>
            PP Tapes
          </Typography>

          <Typography color={"#B3B3B3"} ml={1}>
          Polypropylene tapes, known for their strength and durability, ideal for various packaging applications
          </Typography>
        </Box>

        {/* box 2 */}
        <Box
          sx={{
            width: "307px",
            height: "356px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            borderRadius: "4px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/products/woven-fabrics")}
        >
          <img
            src={Pic2}
            alt="image"
            style={{ width: "211px", height: "167px" }}
          />

          <Typography color={"#000080"} fontWeight={700} fontSize={18}>
            PP Woven Fabrics
          </Typography>

          <Typography color={"#B3B3B3"}>
            Versatile and robust woven fabrics <br /> made from PP,
            suitable for <br />
            agricultural, industrial, and <br /> commercial uses, customizable
            to <br />
            client needs.
          </Typography>
        </Box>

        {/* box 3 */}
        <Box
          sx={{
            width: "307px",
            height: "356px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            borderRadius: "4px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/products/woven-bags")}
        >
          <img
            src={Pic3}
            alt="image"
            style={{ width: "211px", height: "167px" }}
          />

          <Typography color={"#000080"} fontWeight={700} fontSize={18}>
            BOPP Laminated Woven Bags
          </Typography>

          <Typography color={"#B3B3B3"}>
            Eco-friendly, high-quality woven bags <br /> laminated with BOPP,
            offering <br />
            enhanced durability and superior <br /> print quality for diverse
            packaging <br />
            solutions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeOfferComponent;
