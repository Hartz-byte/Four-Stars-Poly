import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import CountUp from "react-countup";

const Banner = ({ items, condition, style }) => {
  const isMobile = useMediaQuery("(max-width:600px");
  const isLarge = useMediaQuery("(max-width:1450px");
  const isVerLarge = useMediaQuery("(max-width:1600px");
  const isSmall = useMediaQuery("(min-width:1650px");

  return (
    <Box
      sx={{
        width: "100%",
        height: isMobile & style ? "820px" : isMobile ? "470px" : "270px",
        backgroundColor: "#DBAB3C",
        display: "flex",
        alignItems: !isMobile ? "center" : "",
        justifyContent: "center",
        alignItems: "center",
        marginTop: isMobile & style ? "100px" : isMobile ? "120px" : "70px",
        position: "relative",
      }}
    >
      {/* banner design */}
      {!isMobile ? (
        <>
          {/* left side */}
          <div
            className="slanting1"
            style={{ marginRight: isSmall ? "1450px" : "1250px" }}
          />
          <div
            className="slanting2"
            style={{ marginRight: isSmall ? "1500px" : "1310px" }}
          />
          <div
            className="slanting3"
            style={{ marginRight: isSmall ? "1500px" : "1320px" }}
          />

          {/* right side */}
          <div
            className={isLarge ? "slanting-responsive4" : "slanting4"}
            style={{
              marginLeft: isSmall ? "1415px" : isLarge ? "1105px" : "1245px",
            }}
          />
          <div
            className={isLarge ? "slanting-responsive5" : "slanting5"}
            style={{
              marginLeft: isSmall ? "1470px" : isLarge ? "1160px" : "1300px",
            }}
          />
          <div
            className={isLarge ? "slanting-responsive6" : "slanting6"}
            style={{
              marginLeft: isSmall ? "1480px" : isLarge ? "1170px" : "1310px",
            }}
          />
        </>
      ) : null}

      {/* main container */}
      <Box
        sx={{
          width: style ? "1200px" : isMobile ? "330px" : "1040px",
          height: !(condition === true) ? "126px" : "250px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* 1st container */}
        <Box
          sx={{
            width: "260px",
            height: !(condition === true) ? "100%" : "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={24}
            textAlign={"center"}
            color={"#fff"}
          >
            <CountUp start={0} end={items[0].count} duration={5} />
            {items[0].title1}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            {items[0].title2}
          </Typography>
          <Typography mb={style & !isMobile ? 3 : 0} textAlign={"center"}>
            {items[0].description}
          </Typography>
        </Box>

        {/* 2nd container */}
        {condition ? (
          <Box
            sx={{
              width: "260px",
              height: !(condition === true) ? "100%" : "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={24}
              textAlign={"center"}
              color={"#fff"}
            >
              <CountUp start={0} end={items[1].count} duration={5} />
              {items[1].title1}
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={20}
              textAlign={"center"}
              color={"#000080"}
            >
              {items[1].title2}
            </Typography>
            <Typography textAlign={"center"}>{items[1].description}</Typography>
          </Box>
        ) : null}

        {/* 3rd container */}
        {!condition ? (
          <Box
            sx={{
              width: "260px",
              height: !(condition === true) ? "100%" : "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={24}
              textAlign={"center"}
              color={"#fff"}
            >
              <CountUp start={0} end={items[2].count} duration={5} />
              {items[2].title1}
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={20}
              textAlign={"center"}
              color={"#000080"}
            >
              {items[2].title2}
            </Typography>
            <Typography
              textAlign={"center"}
              marginBottom={style & !isMobile ? 6 : 3}
            >
              {items[2].description}
            </Typography>
          </Box>
        ) : null}

        {/* 4rth container */}
        <Box
          sx={{
            width: "260px",
            height: !(condition === true) ? "100%" : "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={style & !isMobile ? 20 : 24}
            textAlign={"center"}
            color={"#fff"}
          >
            <CountUp start={0} end={items[3].count} duration={5} />
            {items[3].title1}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
            marginTop={style & !isMobile ? 3.2 : 0}
          >
            {items[3].title2}
          </Typography>
          <Typography
            textAlign={"center"}
            marginTop={style & !isMobile ? 2.3 : 0}
          >
            {items[3].description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
