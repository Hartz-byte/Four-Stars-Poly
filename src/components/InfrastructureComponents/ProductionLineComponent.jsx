import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import Pic1 from "../../assets/Images/Pic15.png";
import Pic2 from "../../assets/Images/Pic16.png";
import Pic3 from "../../assets/Images/Pic17.png";
import Pic4 from "../../assets/Images/Pic18.png";

const ProductionLineComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box mt={7} mb={7}>
      {/* title */}
      <Box>
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "112px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "646px" : "128px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          Production Line
        </Typography>
      </Box>

      {/* main container */}
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        {/* box 1 */}
        <Box
          sx={{
            width: "259px",
            height: "384px",
            borderRadius: "4px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={Pic1}
            alt="pic1"
            style={{ width: "260px", height: "200px" }}
          />

          <Typography color={"#DBAB3C"} fontSize={24} fontWeight={700}>
            Circular Looms
          </Typography>

          <Typography>
            Circular looms that provide precision and consistency in the
            production of woven fabrics.
          </Typography>

          <Typography fontSize={18} fontWeight={700}>
            No of Machines:{" "}
            <span style={{ fontWeight: "400px", fontSize: "16px" }}>51</span>
          </Typography>
        </Box>

        {/* box 2 */}
        <Box
          sx={{
            width: "259px",
            height: "384px",
            borderRadius: "4px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={Pic2}
            alt="pic2"
            style={{ width: "260px", height: "200px" }}
          />

          <Typography color={"#DBAB3C"} fontSize={24} fontWeight={700}>
            Lamination Plant
          </Typography>

          <Typography>
            Lamination plants from industry-leading suppliers.
          </Typography>

          <Typography fontSize={18} fontWeight={700} mt={3}>
            No of Machines:{" "}
            <span style={{ fontWeight: "400px", fontSize: "16px" }}>01</span>
          </Typography>
        </Box>

        {/* box 3 */}
        <Box
          sx={{
            width: "259px",
            height: "384px",
            borderRadius: "4px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={Pic3}
            alt="pic3"
            style={{ width: "260px", height: "200px" }}
          />

          <Typography color={"#DBAB3C"} fontSize={24} fontWeight={700}>
            Rotogravure Printing
          </Typography>

          <Typography>
            RP Machines capable of printing up to 8 colors.
          </Typography>

          <Typography fontSize={18} fontWeight={700} mt={3}>
            No of Machines:{" "}
            <span style={{ fontWeight: "400px", fontSize: "16px" }}>02</span>
          </Typography>
        </Box>

        {/* box 4 */}
        <Box
          sx={{
            width: "259px",
            height: "384px",
            borderRadius: "4px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={Pic4}
            alt="pic4"
            style={{ width: "260px", height: "200px" }}
          />

          <Typography color={"#DBAB3C"} fontSize={24} fontWeight={700}>
            BCS Machine
          </Typography>

          <Typography>
            BCS machines designed for producing strong, durable
            packaging solutions.
          </Typography>

          <Typography fontSize={18} fontWeight={700}>
            No of Machines:{" "}
            <span style={{ fontWeight: "400px", fontSize: "16px" }}>06</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductionLineComponent;
