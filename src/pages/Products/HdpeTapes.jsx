import React from "react";
import { Box } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import FeaturesComponent from "../../components/ProductsComponents/FeaturesComponent";
import DetailsComponent from "../../components/ProductsComponents/DetailsComponent";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

import HdpePic from "../../assets/Images/HDPE.png";
import { hdpeItems } from "../../utils/IntroductionItem";
import { featuresItem1 } from "../../utils/FeaturesItem";
import { detailsItem } from "../../utils/DetailsItem";

const HdpeTapes = () => {
  const headerText = "PP Tapes";

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={HdpePic} text={headerText} />

      {/* introduction component */}
      <IntroductionComponent items={hdpeItems} />

      {/* features component */}
      <FeaturesComponent items={featuresItem1} />

      {/* details component */}
      <DetailsComponent items={detailsItem} row={7} />

      {/* quality services component */}
      <QualityServicesComponent condition={true} />

      {/* footer component */}
      <FooterComponent style={true} />
    </Box>
  );
};

export default HdpeTapes;
