import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import SliderComponent2 from "../../components/InfrastructureComponents/SliderComponent2";
import Banner from "../../components/HomeComponents/Banner";
import ProductionLineComponent from "../../components/InfrastructureComponents/ProductionLineComponent";
import QualityApprovalComponent from "../../components/InfrastructureComponents/QualityApprovalComponent";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

import InfrastructurePic from "../../assets/Images/Infrastructure.png";
import { infrastructureItems } from "../../utils/IntroductionItem";
import { sliderItem4 } from "../../utils/SliderItem";
import { bannerItem2 } from "../../utils/BannerItem";

const Infrastructure = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const headerText = "Infrastructure";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={InfrastructurePic} text={headerText} />

      {/* description component */}
      <IntroductionComponent items={infrastructureItems} pics={false} />

      {/* slider component */}
      <Box mt={6}>
        <SliderComponent2 settings={sliderSettings} sliderItem={sliderItem4} />
      </Box>

      {/* banner */}
      <Banner items={bannerItem2} condition={true} style={true} />

      {/* prduction line component */}
      <ProductionLineComponent />

      {/* quality approvals component */}
      {/* <QualityApprovalComponent /> */}

      {/* quality services component */}
      <QualityServicesComponent style={true} />

      {/* footer component */}
      <FooterComponent style={true} />
    </Box>
  );
};

export default Infrastructure;
