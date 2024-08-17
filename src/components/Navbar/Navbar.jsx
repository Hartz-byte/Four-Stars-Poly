import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
} from "@mui/material";
import {
  KeyboardArrowDown,
  Language,
  Menu as MenuIcon,
} from "@mui/icons-material";

import Logo from "../../assets/Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorE1, setAnchorE1] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const productOpen = Boolean(anchorE1);
  const aboutOpen = Boolean(anchorE2);

  const handleProductOpen = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleAboutOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
    setAnchorE2(null);

    setMobileOpen(false);
  };

  const handleTapesClick = () => {
    navigate("/products/hdpe-tapes");
    handleClose();
  };

  const handleFabricsClick = () => {
    navigate("/products/woven-fabrics");
    handleClose();
  };

  const handleBagsClick = () => {
    navigate("/products/woven-bags");
    handleClose();
  };

  const handleSustainabilityClick = () => {
    navigate("/about/sustainability");
    handleClose();
  };

  const handleOurTeamClick = () => {
    navigate("/about/our-team");
    handleClose();
  };

  const handleAboutUsClick = () => {
    navigate("/about/about-us");
    handleClose();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "76px" }}>
      {/* app bar */}
      <AppBar position="fixed">
        <Toolbar variant="dense" className="navbar">
          {/* mobile icon button */}
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* logo */}
          <Box>
            <NavLink to="/" className="nav-link">
              <img src={Logo} alt="logo" />
            </NavLink>
          </Box>

          {/* navbar mid buttons */}
          <Box
            className="navbar-container"
            sx={{ display: { xs: "none", sm: "flex", lg: "flex" } }}
          >
            {/* products button and its menu */}
            <Box
              id="demo-positioned-button2"
              aria-controls={productOpen ? "demo-positioned-menu2" : undefined}
              aria-haspopup="true"
              aria-expanded={productOpen ? "true" : undefined}
              onClick={handleProductOpen}
              sx={{ color: "black", cursor: "pointer", display: "flex" }}
            >
              <Typography>Products</Typography>
              <KeyboardArrowDown sx={{ color: "black", cusror: "pointer" }} />
            </Box>
            <Menu
              id="demo-positioned-menu2"
              aria-labelledby="demo-positioned-button2"
              anchorEl={anchorE1}
              open={productOpen}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ marginTop: "50px" }}
            >
              <MenuItem onClick={() => navigate("/products/hdpe-tapes")}>
                PP Tapes
              </MenuItem>
              <MenuItem onClick={() => navigate("/products/woven-fabrics")}>
                PP Woven Fabrics
              </MenuItem>
              <MenuItem onClick={() => navigate("/products/woven-bags")}>
                BOPP Laminated Woven Bags
              </MenuItem>
            </Menu>

            {/* Infrastructure button */}
            <NavLink to="/infrastructure" className="nav-link">
              <Typography>Infrastructure</Typography>
            </NavLink>

            {/* quality-assurance button */}
            <NavLink to="/quality-assurance" className="nav-link">
              <Typography>Quality Assurance</Typography>
            </NavLink>

            {/* certificate button */}
            <NavLink to="/certificate" className="nav-link">
              <Typography>Certificate</Typography>
            </NavLink>

            {/* about button */}
            <Box
              id="demo-positioned-button"
              aria-controls={aboutOpen ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={aboutOpen ? "true" : undefined}
              onClick={handleAboutOpen}
              sx={{ color: "black", cursor: "pointer", display: "flex" }}
            >
              <Typography>About</Typography>
              <KeyboardArrowDown sx={{ color: "black", cusror: "pointer" }} />
            </Box>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorE2}
              open={aboutOpen}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ marginTop: "50px" }}
            >
              <MenuItem onClick={() => navigate("/about/sustainability")}>
                Sustainability
              </MenuItem>
              <MenuItem onClick={() => navigate("/about/our-team")}>
                Our Team
              </MenuItem>
              <MenuItem onClick={() => navigate("/about/about-us")}>
                About Us
              </MenuItem>
            </Menu>
          </Box>

          {/* navbar right buttons */}
          <Box
            className="navbar-container2"
            sx={{ display: { xs: "none", sm: "flex", lg: "flex" } }}
          >
            {/* <Box className="nav-link">
              <Language />
              <Typography>ENG</Typography>
              <KeyboardArrowDown />
            </Box> */}

            <button className="button" onClick={() => navigate("/enquire-us")}>
              Enquire Now
            </button>
          </Box>

          {/* mobile elements */}
          {/* <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <Box className="nav-link">
              <Typography>ENG</Typography>
              <KeyboardArrowDown />
            </Box>
          </Box> */}
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "black", sm: "none" } }}
        >
          <Box>
            {/* logo */}
            <NavLink to="/" className="nav-link">
              <img src={Logo} alt="logo" />
            </NavLink>

            {/* button list */}
            <List sx={{ ml: "10px", mt: "20px" }}>
              <Box display={"flex"}>
                <Typography fontSize={18} color={"#000080"}>
                  Products
                </Typography>
                <KeyboardArrowDown />
              </Box>
              {/* products pages */}
              <Box ml={1} mt={1}>
                <Typography onClick={handleTapesClick}>PP Tapes</Typography>

                <Typography onClick={handleFabricsClick}>
                  PP Woven Fabrics
                </Typography>

                <Typography onClick={handleBagsClick}>
                  BOPP Laminated Woven Bags
                </Typography>
              </Box>

              <NavLink to="/infrastructure" className="nav-link">
                <Typography mt={2}>Infrastructure</Typography>
              </NavLink>

              <NavLink to="/quality-assurance" className="nav-link">
                <Typography mt={1}>Quality Assurance</Typography>
              </NavLink>

              {/* certificate */}
              <NavLink to="/certificate" className="nav-link">
                <Typography mt={1}>Certificate</Typography>
              </NavLink>

              {/* about */}
              <Box display={"flex"} mt={2}>
                <Typography fontSize={18} color={"#000080"}>
                  About
                </Typography>
                <KeyboardArrowDown />
              </Box>

              {/* about pages */}
              <Box ml={1} mt={1}>
                <Typography onClick={handleSustainabilityClick}>
                  Sustainability
                </Typography>

                <Typography onClick={handleAboutUsClick}>About Us</Typography>

                <Typography onClick={handleOurTeamClick}>Our Team</Typography>
              </Box>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
