import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {
  LinkedIn,
  X,
  Instagram,
  YouTube,
  Call,
  Mail,
  FmdGood,
} from "@mui/icons-material";

import Logo from "../../assets/Images/Logo2.png";

const FooterComponent = ({ style }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        height: !isMobile ? "222px" : "",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: !isMobile ? "center" : "",
        padding: !isMobile ? "0 120px" : "30px 30px",
        gap: !isMobile ? "" : "10px",
        marginTop: isMobile & style ? "230px" : "",
      }}
    >
      {/* logo and social links */}
      <Box>
        <img src={Logo} alt="logo" style={{marginBottom:"80px"}} />

        {/* social links */}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: !isMobile ? "center" : "",
            gap: "10px",
            marginTop: "20px",
            marginBottom: isMobile ? "20px" : "",
          }}
        >
          <X sx={{ color: "white", cursor: "pointer" }} />
          <Instagram sx={{ color: "white", cursor: "pointer" }} />
          <YouTube sx={{ color: "white", cursor: "pointer" }} />
          <LinkedIn sx={{ color: "white", cursor: "pointer" }} />
        </Box> */}
      </Box>

      {/* quick links */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography color={"white"} fontWeight={600}>
          Quick Links
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="/infrastructure">
            <Typography color={"white"}>Infrastructure</Typography>
          </NavLink>
          <NavLink to="/quality-assurance">
            <Typography color={"white"}>Quality Assurance</Typography>
          </NavLink>
          <NavLink to="/enquire-us">
            <Typography color={"white"}>Enquire Us</Typography>
          </NavLink>
        </Box>
      </Box>

      {/* products*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: isMobile ? "20px" : "",
        }}
      >
        <Typography color={"white"} fontWeight={600}>
          Products
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="/products/hdpe-tapes">
            <Typography color={"white"}>PP Tapes</Typography>
          </NavLink>
          <NavLink to="/products/woven-fabrics">
            <Typography color={"white"}>PP Woven Fabrics</Typography>
          </NavLink>
          <NavLink to="/products/woven-bags">
            <Typography color={"white"}>BOPP Laminated Woven Bags</Typography>
          </NavLink>
        </Box>
      </Box>

      {/* resources */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: isMobile ? "20px" : "",
        }}
      >
        <Typography color={"white"} fontWeight={600}>
          Resources
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="/about/sustainability">
            <Typography color={"white"}>Sustainability</Typography>
          </NavLink>
          <NavLink to="/about/about-us">
            <Typography color={"white"}>About Us</Typography>
          </NavLink>
          <NavLink to="/about/our-team">
            <Typography color={"white"}>Our Team</Typography>
          </NavLink>
        </Box>
      </Box>

      {/* get in touch */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography color={"white"} fontWeight={600} ml={"32px"} mt={3}>
          Get in Touch
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Call sx={{ color: "white" }} />
            <Typography color={"white"}>
              (+91) 9425085060, 6263713033
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Mail sx={{ color: "white" }} />
            <Typography color={"white"}>fourstarspoly@gmail.com</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <FmdGood sx={{ color: "white" }} />
            <Typography color={"white"}>
              R64R+CRX, Mokalgaon <br /> Madhya Pradesh 450771
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterComponent;
