import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/scrollbar";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import Products from "../../data/ProductData.json"; // Replace with the actual path

const ProductSlider = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const slidesPerView = isLargeScreen || isMediumScreen ? 3 : 1;

  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      my={8}
    >
      <Typography
        variant="h4"
        align="center"
        color="#7DAF19"
        mb={5}
        sx={{ marginRight: { md: "275px", xs: "0px" } }}
        py={7}
      >
        Product Category
      </Typography>
      <Swiper
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCoverflow,
        ]}
        slidesPerView={slidesPerView}
        loop
        style={{
          height: "60vh",
          width: "80%",
          marginLeft: isMediumScreen ? "0px" : "auto",
        }}
        speed={1000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loopPreventsSliding
      >
        {Products.map((item, index) => (
          <SwiperSlide key={index} style={{ background: "#FAEADD" }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                m: 0,
                p: 0,
                background: "#ffffff58",
              }}
            >
              <Box
                sx={{ position: "absolute", opacity: 0.8 }}
                className="image"
              >
                <Link to={`/Product/${item.product_name}`}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.product_name}
                    className="img"
                  />
                </Link>
              </Box>

              <Typography
                variant="h5"
                align="center"
                color="white"
                sx={{
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  opacity: 0.8,
                  width: "100%",
                  bottom: "15%",
                }}
              >
                <Link
                  to={`/Product/${item.product_name}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {item.product_name}
                </Link>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  position: "absolute",
                  bottom: 7,
                  backgroundColor: "#7DAF19",
                  borderRadius: 3,
                  height: 35,
                  width: 150,
                }}
              >
                <Link
                  to={`/products/${item.product_name}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  View Brands
                </Link>
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductSlider;
