import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const IntroductionComponent = ({ items, pics, condition, image }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: isMobile ? "0px" : "40px",
      }}
    >
      {/* title */}
      <Box>
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "90px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "682px" : "128px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
          
        >
          {items[0].title}
        </Typography>
      </Box>

      {/* subtitle */}
      {condition ? (
        <Box mt={1}>
          <Typography fontWeight={200} fontSize={14}>
            {items[0].subtitle}
          </Typography>
        </Box>
      ) : null}

      {/* description and pics */}
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: !isMobile ? "1128px" : "400px",
            height: "160px",
            marginTop: "40px",
            marginBottom:"30px"
          }}
        >
          {/* description */}
          <Typography textAlign={"justify"} p={isMobile ? 2 : 0}>
            {item.description}
          </Typography>

          {/* pics */}
          {pics === false ? null : (
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                marginTop: !isMobile ? "70px" : "40px",
                gap: "20px",
                alignItems: isMobile ? "center" : "",
              }}
            >
              <img
                src={item.pic1}
                alt="pic1"
                style={{
                  width: !isMobile ? "357px" : "300px",
                  height: !isMobile ? "278px" : "200px",
                }}
              />
              <img
                src={item.pic2}
                alt="pic2"
                style={{
                  width: !isMobile ? "357px" : "300px",
                  height: !isMobile ? "278px" : "200px",
                }}
              />
              <img
                src={item.pic3}
                alt="pic3"
                style={{
                  width: !isMobile ? "357px" : "300px",
                  height: !isMobile ? "278px" : "200px",
                }}
              />
            </Box>
          )}
        </Box>
      ))}

      {/* conditional image */}
      {image ? (
        <Box>
          <img
            src={image}
            alt="image"
            style={{
              width: !isMobile ? "1100px" : "350px",
              height: !isMobile ? "436px" : "200px",
              marginTop: !isMobile ? "60px" : "350px",
            }}
          />
        </Box>
      ) : null}

      {/* box design */}
      {!isMobile ? (
        <div>
          {/* left side */}
          <div>
            {/* big box */}
            <div
              style={{
                position: "absolute",
                width: "63px",
                height: "63px",
                backgroundColor: "#FFF5E1",
                bottom: -280,
                left: 180,
                zIndex: "-1",
              }}
            />

            {/* small box */}
            <div
              style={{
                position: "absolute",
                width: "19px",
                height: "19px",
                backgroundColor: "#FFF5E1",
                bottom: -300,
                left: 150,
                zIndex: "-1",
              }}
            />
          </div>

          {/* right side */}
          <div>
            {/* big box */}
            <div
              style={{
                position: "absolute",
                width: "63px",
                height: "63px",
                backgroundColor: "#FFF5E1",
                bottom: 10,
                left: 1280,
                zIndex: "-1",
              }}
            />

            {/* small box */}
            <div
              style={{
                position: "absolute",
                width: "19px",
                height: "19px",
                backgroundColor: "#FFF5E1",
                bottom: 65,
                left: 1350,
                zIndex: "-1",
              }}
            />
          </div>
        </div>
      ) : null}
    </Box>
  );
};

export default IntroductionComponent;
