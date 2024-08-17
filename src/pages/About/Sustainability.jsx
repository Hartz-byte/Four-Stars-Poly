import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import AboutTextComponent from "../../components/QualityAssuranceComponents/AboutTextComponent";
import DetailsComponent from "../../components/ProductsComponents/DetailsComponent";
import Banner from "../../components/HomeComponents/Banner";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";
import SliderComponent2 from "../../components/InfrastructureComponents/SliderComponent2";

import SustainabilityPic from "../../assets/Images/SustainabilityPic.jpg";
import SustainabilityPic2 from "../../assets/Images/SustainabilityPic2.png";
import { sustainabilityItems } from "../../utils/IntroductionItem";
import { sustainabilityItems2 } from "../../utils/AboutTextItem";
import { detailsItem4 } from "../../utils/DetailsItem";
import { bannerItem1 } from "../../utils/BannerItem";
import { sliderItem5 } from "../../utils/SliderItem";

const Sustainability = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const headerText = "Sustainability";

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
      <HeaderComponent pic={SustainabilityPic} text={headerText} />

      {/* description component */}
      <IntroductionComponent
        items={sustainabilityItems}
        pics={false}
        condition={true}
        // image={SustainabilityPic2}
      />

      {/* slider component */}
      <Box mt={4}>
        <SliderComponent2 settings={sliderSettings} sliderItem={sliderItem5} />
      </Box>

      {/* about component */}
      <AboutTextComponent
        items={sustainabilityItems2}
        // pics={true}
        // settings={sliderSettings}
      />

      {/* details component */}
      {/* <DetailsComponent items={detailsItem4} style={true} /> */}

      {/* banner component */}
      <Banner items={bannerItem1} />

      {/* quality services component */}
      <QualityServicesComponent style={true} />

      {/* footer component */}
      <FooterComponent style={true} />
    </Box>
  );
};

export default Sustainability;
