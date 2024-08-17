import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SliderComponent from "./SliderComponent";
import Banner from "./Banner";
import { sliderItem } from "../../utils/SliderItem";
import { bannerItem1 } from "../../utils/BannerItem";

const OurCompanyComponent = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px");
  const isLarge = useMediaQuery("(max-width:1450px");

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: !isMobile ? "center" : "",
        justifyContent: "center",
        margin: "70px 0",
      }}
    >
      {/* text and slider */}
      <Box
        sx={{
          width: !isMobile ? "1200px" : "",
          height: "375px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "20px",
        }}
      >
        {/* left side content */}
        <Box
          sx={{
            width: !isMobile ? "426px" : "360px",
            height: "375px",
            padding: "20px",
          }}
        >
          {/* rectangle box design */}
          {/* <Box
            sx={{
              width: "83px",
              height: "12px",
              backgroundColor: "#DBAB3C",
              position: "absolute",
              zIndex: "-10",
              marginTop: "20px",
            }}
          /> */}

          <Typography fontSize={24} fontWeight={700} color={"#000080"} ml={1.5}>
            Our Company
          </Typography>
          <Typography fontSize={13} fontWeight={200} mt={1} mb={3}>
            Seamless Packaging Solutions, Endless PossibilitIes for Growth
          </Typography>

          <Typography textAlign={"justify"}>
          Four Stars Poly Private Limited, established in 2021, specializes in manufacturing high-quality polypropylene woven fabrics and eco-friendly BOPP packaging solutions. With a state-of-the-art facility in Khandwa, Madhya Pradesh, spanning 55,000 square feet, the company ensures superior quality through advanced manufacturing processes and stringent quality control, achieving a daily production capacity of 10 metric tons.
          </Typography>

          <button
            className="button"
            style={{ marginTop: "20px" }}
            onClick={() => {
              navigate("/about/about-us");
            }}
          >
            Read More
          </button>
        </Box>

        {/* right side content */}
        <Box
          sx={{
            width: !isMobile ? "700px" : "405px",
            height: "375px",
          }}
        >
          {/* slider component */}
          <SliderComponent sliderItem={sliderItem} settings={sliderSettings} />
        </Box>
      </Box>

      {/* banner component */}
      <Banner items={bannerItem1} />
    </Box>
  );
};

export default OurCompanyComponent;
