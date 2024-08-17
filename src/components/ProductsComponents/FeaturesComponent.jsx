import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const FeaturesComponent = ({ items }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      mt={!isMobile ? 60 : 130}
      sx={{
        height: !isMobile ? "471px" : "1300px",
        backgroundColor: "#F5F6F7",
      }}
    >
      {/* title */}
      <Box pt={6}>
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "162px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            marginTop: "20px",
            left: !isMobile ? "585px" : "30px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
          position="relative"
        >
          Features of PP Tapes
        </Typography>
      </Box>

      {/* main container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        {/* box 1 */}
        <Box
          sx={{
            width: "256px",
            height: "261px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            gap: "15px",
          }}
        >
          <img src={items[0].pic} alt="pic" />

          <Typography fontWeight={700} fontSize={18} color={"#000080"}>
            {items[0].title}
          </Typography>

          <Typography textAlign={"center"} width={"219px"}>
            {items[0].description}
          </Typography>
        </Box>

        {/* box 2 */}
        <Box
          sx={{
            width: "256px",
            height: "261px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            gap: "15px",
          }}
        >
          <img src={items[1].pic} alt="pic" />

          <Typography fontWeight={700} fontSize={18} color={"#000080"}>
            {items[1].title}
          </Typography>

          <Typography textAlign={"center"} width={"230px"}>
            {items[1].description}
          </Typography>
        </Box>

        {/* box 3 */}
        <Box
          sx={{
            width: "256px",
            height: "261px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            gap: "15px",
          }}
        >
          <img src={items[2].pic} alt="pic" style={{ paddingTop: "12px" }} />

          <Typography fontWeight={700} fontSize={18} color={"#000080"}>
            {items[2].title}
          </Typography>

          <Typography textAlign={"center"} width={"219px"}>
            {items[2].description}
          </Typography>
        </Box>

        {/* box 4 */}
        <Box
          sx={{
            width: "256px",
            height: "261px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            gap: "15px",
          }}
        >
          <img src={items[3].pic} alt="pic" style={{ paddingTop: "12px" }} />

          <Typography fontWeight={700} fontSize={18} color={"#000080"}>
            {items[3].title}
          </Typography>

          <Typography textAlign={"center"} width={"219px"}>
            {items[3].description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesComponent;
