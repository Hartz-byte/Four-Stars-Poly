import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import Pic1 from "../../assets/Images/4.jpg";
import Pic2 from "../../assets/Images/5.png";
import Pic3 from "../../assets/Images/2.jpg";
import Pic4 from "../../assets/Images/6.jpg";
import Pic5 from "../../assets/Images/1.jpeg"
import Pic6 from "../../assets/Images/3.jpg"
const BoxesComponent = () => {
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

        {/* <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          Production Line
        </Typography> */}
      </Box>

      {/* main container */}
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{display:"flex", flexDirection: isMobile ? "column" : "row", gap:"30px" }}>
            {/* box 1 */}
            <Box
            sx={{
                width: "259px",
                height: "450px",
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
                Muffle Furnace
            </Typography>

            <Typography>
                Circular looms that provide precision and consistency in the
                production of woven fabrics.
            </Typography>

            </Box>

            {/* box 2 */}
            <Box
            sx={{
                width: "259px",
                height: "450px",
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
                Tensile Strength & Elongation Machine
            </Typography>

            <Typography>
            This machine accurately measures the tensile strength and elongation properties of materials, helping to determine their durability and flexibility under various stress conditions.
            </Typography>

            </Box>

            {/* box 3 */}
            <Box
            sx={{
                width: "259px",
                height: "450px",
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
            GSM Cutter
            </Typography>

            <Typography>
            The GSM cutter is an essential tool for precise cutting and measurement of material samples, ensuring accurate determination of the material’s weight per unit area for quality control.
            </Typography>


            </Box>
        </Box>

        <Box sx={{display:"flex", flexDirection: isMobile ? "column" : "row", gap:"30px" }}>
            {/* box 4 */}
            <Box
            sx={{
                width: "259px",
                height: "450px",
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
            Weighing Balance Machine
            </Typography>

            <Typography>
            Our high-precision weighing balance machine is critical for accurately measuring material weights, ensuring consistency in product quality and adherence to industry standards.
            </Typography>


            </Box>

            {/* box 5 */}
            <Box
            sx={{
                width: "259px",
                height: "450px",
                borderRadius: "4px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            }}
            >
            <img
                src={Pic5}
                alt="pic4"
                style={{ width: "260px", height: "200px" }}
            />

            <Typography color={"#DBAB3C"} fontSize={24} fontWeight={700}>
            Drop Test
            </Typography>

            <Typography>
            The drop test process simulates real-world handling conditions, rigorously testing the impact resistance of products to ensure they can withstand shocks and drops during transport and use.
            </Typography>


            </Box>

            {/* box 6 */}
            <Box
            sx={{
                width: "259px",
                height: "450px",
                borderRadius: "4px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
            }}
            >
            <img
                src={Pic6}
                alt="pic4"
                style={{ width: "260px", height: "200px" }}
            />

            <Typography color={"#DBAB3C"} fontSize={24} fontWeight={700}>
            Humidity Test Chamber
            </Typography>

            <Typography>
            The humidity test chamber provides controlled environmental testing, assessing the resilience of materials under varying humidity conditions to ensure they maintain quality and performance over time.
            </Typography>


            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxesComponent;
