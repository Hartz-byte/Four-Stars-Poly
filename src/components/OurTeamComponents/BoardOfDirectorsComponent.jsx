import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import ProfilePic from "../../assets/Images/Profile.png";
import { directorsData } from "../../utils/DirectorsItem";

const BoardOfDirectorsComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      {/* title */}
      <Box mt={6}>
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "112px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "630px" : "128px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          Board of Directors
        </Typography>
      </Box>

      {/* text */}
      <Typography textAlign={"justify"} width={!isMobile ? "1101px" : "90%"}>
        The Board of Directors at Four Stars Poly Private Limited is a team of
        visionary leaders dedicated to guiding the company towards sustained
        growth and excellence. With a wealth of industry experience and
        strategic insight, the board ensures that the company remains at the
        forefront of the polypropylene woven fabric and BOPP bag industry. They
        oversee all aspects of the business, from operations and quality control
        to innovation and sustainability initiatives. Their leadership is
        crucial in maintaining the company’s commitment to producing
        high-quality, eco-friendly products that meet diverse industrial needs.
        Under their guidance, Four Stars Poly continues to exceed client
        expectations, fostering a culture of innovation and excellence while
        promoting responsible and sustainable manufacturing practices.
      </Typography>

      {/* director's card container */}
      <Box mt={3}>
        {directorsData.map((director, index) => (
          <Box
            key={index}
            sx={{
              width: !isMobile ? "1018px" : "300px",
              height: !isMobile ? "200px" : "100%",
              boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: !isMobile ? "22px" : "10px",
              marginBottom: "30px",
              alignItems: isMobile ? "center" : "",
            }}
          >
            {/* left section */}
            <Box>
              {/* <img
                src={ProfilePic}
                alt="profile"
                style={{ width: "235px", height: "270px" }}
              /> */}
              <Box style={{ width: "165px", height: "200px" }} />
            </Box>

            {/* right section */}
            <Box
              sx={{
                padding: !isMobile ? "20px 0" : "20px 10px",
                display: "flex",
                flexDirection: "column",
                gap: !isMobile ? "5px" : "15px",
              }}
            >
              <Typography color={"#000080"} fontSize={18} fontWeight={700}>
                {director.name}
              </Typography>

              <Typography color={"#DBAB3C"}>{director.position}</Typography>

              <Typography>{director.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BoardOfDirectorsComponent;
