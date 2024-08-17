import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import OurJorneyPic from "../../assets/Images/OurJorneyPic.jpg";

const OurJourneyComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        marginTop: "100px",
        height: "500px",
        backgroundImage: !isMobile ? `url(${OurJorneyPic})` : null, // background image
        backgroundSize: "cover",
        padding: "30px 70px",
        marginBottom: !isMobile ? "100px" : "550px",
      }}
    >
      {/* linear gradient effect */}
      {!isMobile ? (
        <Box
          sx={{
            position: "absolute",
            top: 1133,
            left: 0,
            width: "100%",
            height: "560px",
            background:
              "linear-gradient(to right, rgba(0,0,0,2) 50%, rgba(0,0,0,0.2) 80%)",
          }}
        />
      ) : null}

      {/* text */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          color={"#DBAB3C"}
          fontSize={24}
          fontWeight={700}
          position={"relative"}
        >
          Our Journey
        </Typography>

        <Typography
          color={!isMobile ? "#fff" : "black"}
          fontSize={14}
          fontWeight={200}
          position={"relative"}
        >
          Four Stars Poly Pvt. Ltd. - “Where Quality meets Innovation”
        </Typography>

        <Typography
          color={!isMobile ? "#fff" : "black"}
          width={!isMobile ? "695px" : "300px"}
          position={"relative"}
        >
          Four Stars Poly Private Limited embarked on its journey in 2021,
          amidst the global challenges of the COVID-19 pandemic. With a vision
          to redefine the manufacturing of polypropylene woven fabrics and BOPP
          laminated woven bags, we established our state-of-the-art facility in
          Khandwa, Madhya Pradesh. Spanning 55,000 square feet within a 125,000
          square feet campus, our facility is equipped with advanced machinery
          and technology, enabling us to achieve a production capacity of 10,000
          metric tons per annum. From the outset, our focus has been on
          innovation, quality, and sustainability. Our QC lab, equipped with the
          latest testing technology, ensures that each product meets the highest
          standards of durability and performance. Sustainability has been a
          core value in our journey. Our facility incorporates green energy
          practices and a dedicated recycling plant with a capacity of 1,200
          metric tons per annum, reprocessing in-house plastic waste and
          minimizing our environmental footprint. Over the years, we have
          expanded our product range and capabilities, including the addition of
          multiple tape plants, weaving looms, lamination plants, and
          high-quality printing machines. Today, Four Stars Poly Private Limited
          stands as a trusted provider of innovative and reliable polypropylene
          solutions, committed to excellence and sustainability. Our journey
          continues as we strive to exceed our clients’ expectations and
          contribute to a greener, more sustainable future.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurJourneyComponent;
