import React, { useState } from "react";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Alert from "@mui/material/Alert";

import BackgroundImage from "../../assets/Images/pic5.png";

const GetInTouchWithUsComponent = ({ style }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !contact ||
      !companyName ||
      // !country ||
      // !query ||
      !subject ||
      !message
    ) {
      setError(true);
      return;
    }

    setFlag(true);

    console.log({
      name,
      email,
      contact,
      companyName,
      country,
      query,
      subject,
      message,
    });

    setError(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: !isMobile ? "877px" : "1200px",
        backgroundImage: `url(${BackgroundImage})`, // background image
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* linear gradient effect */}
      {!isMobile ? (
        <Box
          sx={{
            position: "absolute",
            top: !style ? "4078px" : "77px",
            left: 0,
            width: "100%",
            height: "877px",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%)",
          }}
        />
      ) : null}

      {/* main container */}
      <Box
        sx={{
          width: !isMobile ? "695px" : "300px",
          height: !isMobile ? "750px" : "1020px",
          background: "white",
          borderRadius: "4px",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* title */}
        <Box>
          <Typography
            textAlign={"center"}
            fontSize={24}
            fontWeight={700}
            color={"#000080"}
          >
            Get In Touch With Us
          </Typography>
        </Box>

        {/* form */}
        <Box mt={2} p={"10px"} component={"form"}>
          {/* name */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="name"
              style={{ fontWeight: "700px", fontSize: "18px" }}
            >
              Name<span style={{ color: "#FF0000" }}>*</span>
            </label>
            <input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                height: "38px",
                borderRadius: "2px",
                border: "none",
                backgroundColor: "#F5F6F7",
                paddingLeft: "20px",
              }}
            />
          </Box>

          {/* email and contact number */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "30px",
              marginTop: "30px",
            }}
          >
            {/* email */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="email"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Email<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  height: "38px",
                  width: !isMobile ? "357px" : "",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>

            {/* contact number */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="contact-number"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Contact Number<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="contact-number"
                type="text"
                placeholder="eg. 9876054786"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{
                  height: "38px",
                  width: !isMobile ? "244px" : "",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>
          </Box>

          {/* company name and country */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "30px",
              marginTop: "20px",
            }}
          >
            {/* company name */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="company-name"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Company name<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Enter your Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{
                  height: "38px",
                  width: !isMobile ? "357px" : "",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>

            {/* country */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="country"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Country<span style={{ color: "#FF0000" }}>*</span>
              </label>
              {/* <Select
                id="country"
                inputProps={{ "aria-label": "Select Country" }}
                displayEmpty
                style={{
                  height: "38px",
                  width: !isMobile ? "265px" : "",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              >
                <MenuItem
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  disabled
                >
                  Select your Country
                </MenuItem>
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="usa">USA</MenuItem>
                <MenuItem value="uk">UK</MenuItem>
              </Select> */}
              <input
                id="country"
                type="text"
                placeholder="Enter your Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{
                  height: "38px",
                  // width: !isMobile ? "357px" : "",
                  width: !isMobile ? "265px" : "",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>
          </Box>

          {/* general query and subject */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "30px",
              marginTop: "20px",
            }}
          >
            {/* general query */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="general-query"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                General Query<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <Select
                id="country"
                inputProps={{ "aria-label": "Select Country" }}
                displayEmpty
                style={{
                  height: "38px",
                  width: !isMobile ? "380px" : "",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              >
                <MenuItem
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  disabled
                >
                  Select your Products
                </MenuItem>
                <MenuItem value="hdpe-tapes">PP Tapes</MenuItem>
                <MenuItem value="woven-bags">PP Woven Fabrics</MenuItem>
                <MenuItem value="woven-fabrics">BOPP Lminated Woven Bags</MenuItem>
              </Select>
            </Box>

            {/* subject */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="subject"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Subject<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Enter Query Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  height: "38px",
                  width: !isMobile ? "240px" : "",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>
          </Box>

          {/* message */}
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            <label
              htmlFor="message"
              style={{ fontWeight: "700px", fontSize: "18px" }}
            >
              Message<span style={{ color: "#FF0000" }}>*</span>
            </label>

            <TextField
              id="outlined-multiline-static"
              label="Type your Query message here..."
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                borderRadius: "2px",
                border: "none",
                backgroundColor: "#F5F6F7",
              }}
            />
          </Box>

          {/* success message */}
          {flag ? (
            <Box sx={{ marginTop: "20px" }}>
              <Alert severity="success">
                Thank you! Your enquiry is successfully submitted, our team will
                revert back to you soon...
              </Alert>
            </Box>
          ) : null}

          {/* submit button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          </Box>

          {/* error message */}
          {error && (
            <Typography color="error" textAlign="center" mt={2}>
              Enter required fields
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouchWithUsComponent;
