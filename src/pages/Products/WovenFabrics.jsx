import React from "react";
import { Box } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import FeaturesComponent from "../../components/ProductsComponents/FeaturesComponent";
import DetailsComponent from "../../components/ProductsComponents/DetailsComponent";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

import WovenFabricPic from "../../assets/Images/WovenFabric.png";
import { fabricItems } from "../../utils/IntroductionItem";
import { featuresItem2 } from "../../utils/FeaturesItem";
import { detailsItem2 } from "../../utils/DetailsItem";

const WovenFabrics = () => {
  const headerText = "PP Woven Fabrics";

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={WovenFabricPic} text={headerText} />

      {/* introduction component */}
      <IntroductionComponent items={fabricItems} />

      {/* features component */}
      <FeaturesComponent items={featuresItem2} />

      {/* details component */}
      <DetailsComponent items={detailsItem2} row={9} />

      {/* quality services component */}
      <QualityServicesComponent />

      {/* footer component */}
      <FooterComponent style={true} />
    </Box>
  );
};

export default WovenFabrics;
