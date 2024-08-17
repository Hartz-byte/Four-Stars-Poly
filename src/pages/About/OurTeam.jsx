import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import DirectorsDeskComponent from "../../components/OurTeamComponents/DirectorsDeskComponent";
import BoardOfDirectorsComponent from "../../components/OurTeamComponents/BoardOfDirectorsComponent";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

import OurTeamPic from "../../assets/Images/OurTeamPic.jpg";
import OurTeamPic2 from "../../assets/Images/OurTeamPic2.jpg";
import { ourteamItems } from "../../utils/IntroductionItem";

const OurTeam = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const headerText = "Our Team";

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={OurTeamPic} text={headerText} />

      {/* description component */}
      <Box mb={4}>
        <IntroductionComponent
          items={ourteamItems}
          pics={false}
          condition={true}
          image={OurTeamPic2}
        />
      </Box>

      {/* director's desk component */}
      <DirectorsDeskComponent />

      {/* board of directors component */}
      <BoardOfDirectorsComponent />

      {/* quality services component */}
      <QualityServicesComponent style={true} />

      {/* footer component */}
      <FooterComponent style={true} />
    </Box>
  );
};

export default OurTeam;
