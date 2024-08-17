import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const SliderComponent2 = ({ settings, sliderItem, style, condition }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  const boxStyle = style
    ? {
        width: !isMobile ? "600px" : "300px",
        height: !isMobile ? "365px" : "",
      }
    : {
        width: !isMobile ? "1147px" : "360px",
        height: !isMobile ? "365px" : "",
        marginLeft: !isMobile ? "190px" : "20px",
        marginTop: isMobile & condition ? "50px" : isMobile ? "420px" : "",
      };

  return (
    <Box sx={boxStyle}>
      <Slider {...settings}>
        {sliderItem.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt="image"
              style={{
                width: !style ? "546px" : "280px",
                height: !style ? "364px" : "335px",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent2;
