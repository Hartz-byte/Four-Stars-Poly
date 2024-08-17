import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const HeaderComponent = ({ pic, text }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        width: "100%",
        height: "246px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* image */}
      <img
        src={pic}
        alt="header-pic"
        style={{ width: "100%", height: "246px" }}
      />

      {/* linear gradient effect */}
      <Box
        sx={{
          position: "absolute",
          top: 77,
          left: 0,
          width: "100%",
          height: "246px",
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 60%)",
        }}
      />

      {/* text */}
      <Typography
        position={"absolute"}
        color={"#fff"}
        fontWeight={700}
        fontSize={36}
        className="text-shadow"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default HeaderComponent;
