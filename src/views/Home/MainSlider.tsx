// src/views/Home/MainSlider.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import Slider from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import one from "../../assets/Home/WhyUs.jpg";
import Two from "../../assets/Home/AboutUs.jpg";
import Three from "../../assets/Home/Blog.jpg";
import Four from "../../assets/Home/prod1.jpg";

const images = [
  {
    label: "Why US",
    imgPath: one,
    onClick: "/WhyUs",
  },
  {
    label: "About US",
    imgPath: Two,
    onClick: "/AboutUs",
  },
  {
    label: "Blog",
    imgPath: Three,
    onClick: "/Blogs",
  },
  {
    label: "Contact US",
    imgPath: Four,
    onClick: "/ContactUs",
  },
];

export default function MainSlider() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [sliderRef, setSliderRef] = React.useState<Slider | null>(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
        {images.map((step) => (
          <Box
            key={step.label}
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: { md: "77%", xs: "100%", lg: "81%" },
                objectFit: "cover",
              }}
              src={step.imgPath}
              alt={step.label}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: { md: theme.spacing(6), xs: theme.spacing(2) },
                left: { md: theme.spacing(12), xs: theme.spacing(6) },
                textAlign: "center",
              }}
            >
              <Button
                onClick={() => navigate(step.onClick)}
                variant="contained"
                sx={{
                  backgroundColor: "#7DAF19",
                  color: "#674422",
                  fontWeight: "bold",
                  border: "2px solid white",
                  height: { md: 50, xs: 30 },
                  cursor: "pointer",
                  width: { md: 150, xs: 150 },
                  zIndex: 1,
                }}
              >
                {step.label}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          bottom: "40%",
          width: { md: "75%", xs: "97%", lg: "75%" },
          display: "flex",
          position: "absolute",
          justifyContent: "space-between",
          alignItems: "center",
          padding: theme.spacing(2),
        }}
      >
        <IconButton
          size="large"
          sx={{ color: "white" }}
          onClick={() => sliderRef?.slickPrev()}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          size="large"
          sx={{ color: "white" }}
          onClick={() => sliderRef?.slickNext()}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}
