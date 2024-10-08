import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import SliderComponent from "./SliderComponent";
import { sliderItem2 } from "../../utils/SliderItem";

const HowWeWorkComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const style = true;

  return (
    <Box>
      {/* title */}
      <Box>
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "83px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "662px" : "110px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          How we Work?
        </Typography>
      </Box>

      {/* youtube video container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        <iframe
          width={!isMobile ? "1069" : ""}
          height={!isMobile ? "470" : ""}
          src="https://www.youtube.com/embed/m93Jw3vj42s?si=kUFCEfyeEXMcoDo-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "7px" }}
        />
      </Box>

      {/* slider */}
      <Box
        sx={{
          width: "100%",
          height: "362px",
          backgroundColor: "#000080",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "80%",
            marginLeft: !isMobile ? "160px" : "50px",
          }}
        >
          <SliderComponent
            sliderItem={sliderItem2}
            settings={sliderSettings}
            style={style}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeWorkComponent;
