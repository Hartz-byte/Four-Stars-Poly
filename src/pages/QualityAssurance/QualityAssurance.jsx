import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import AssurancePic from "../../assets/Images/QualityAssurance.png";
import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import SliderComponent2 from "../../components/InfrastructureComponents/SliderComponent2";
import AboutTextComponent from "../../components/QualityAssuranceComponents/AboutTextComponent";
import CertificatesComponent from "../../components/QualityAssuranceComponents/CertificatesComponent";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";
import BoxesComponent from "../../components/QualityAssuranceComponents/BoxesComponent";

import { assuranceItems } from "../../utils/IntroductionItem";
import { sliderItem5 } from "../../utils/SliderItem";
import { assuranceItems2 } from "../../utils/AboutTextItem";
import { certificateItems } from "../../utils/CertificateItem";


const QualityAssurance = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const headerText = "Quality Assurance";

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
      <HeaderComponent pic={AssurancePic} text={headerText} />

      {/* description component */}
      <IntroductionComponent items={assuranceItems} pics={false} />

      {/* slider component */}
      <SliderComponent2 settings={sliderSettings} sliderItem={sliderItem5} />

      {/* about our product quality text component */}
      <AboutTextComponent items={assuranceItems2} />

      {/* certificates component */}
      {/* <CertificatesComponent items={certificateItems} /> */}

      <BoxesComponent />

      {/* quality services component */}
      <QualityServicesComponent style={true} />

      {/* footer component */}
      <FooterComponent style={true} />
    </Box>
  );
};

export default QualityAssurance;
