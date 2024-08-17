import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import TickImage from "../../assets/Images/Tick.png";
import LeafImage from "../../assets/Images/Energy.png";
import GroupImage from "../../assets/Images/Group.png";
import TrendImage from "../../assets/Images/Trend.png";

const WhyChooseUsComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

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
            zIndex: "-10",
            marginTop: "20px",
            left: !isMobile ? "652px" : "95px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          Why Choose Us?
        </Typography>
      </Box>

      {/* main container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: !isMobile ? "row" : "column",
          justifyContent: "center",
          margin: "70px",
          gap: "20px",
        }}
      >
        {/* box 1 */}
        <Box
          sx={{
            width: "275px",
            height: "256px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={TickImage} alt="image" />

          <Typography color={"#000080"} fontWeight={700} fontSize={18}>
            Superior Quality <br /> and Innovation
          </Typography>

          <Typography textAlign={"center"}>
            Our commitment to innovation ensures that we stay at the forefront
            of the industry,
            <br /> offering the best products to <br /> our clients.
          </Typography>
        </Box>

        {/* box 2 */}
        <Box
          sx={{
            width: "275px",
            height: "256px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={LeafImage} alt="image" />

          <Typography
            textAlign={"center"}
            color={"#000080"}
            fontWeight={700}
            fontSize={18}
          >
            Sustainable <br /> Practices
          </Typography>

          <Typography textAlign={"center"}>
            Our BOPP packaging <br /> solutions are designed with <br />{" "}
            sustainability in mind, helping <br /> our clients meet their green{" "}
            <br /> goals.
          </Typography>
        </Box>

        {/* box 3 */}
        <Box
          sx={{
            width: "275px",
            height: "256px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={GroupImage} alt="image" />

          <Typography
            color={"#000080"}
            fontWeight={700}
            fontSize={18}
            textAlign={"center"}
          >
            Customized <br /> Solutions
          </Typography>

          <Typography textAlign={"center"}>
            Our expertise in customizing polypropylene woven fabrics allows us
            to provide tailored solutions that perfectly match the requirements
            of diverse industries.
          </Typography>
        </Box>

        {/* box 4 */}
        <Box
          sx={{
            width: "275px",
            height: "256px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={TrendImage} alt="image" />

          <Typography
            color={"#000080"}
            fontWeight={700}
            fontSize={18}
            textAlign={"center"}
          >
            Global Reach and <br /> Reliability
          </Typography>

          <Typography textAlign={"center"}>
            As a trusted provider of <br /> durable woven fabric bags <br />{" "}
            worldwide, Four Stars Poly <br /> has built a reputation for <br />{" "}
            reliability and excellence.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUsComponent;
