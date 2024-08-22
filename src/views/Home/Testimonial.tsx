import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import data from "../../data/Testinomials.json";

function PreviousBtn(props: any) {
  return (
    <IconButton
      onClick={props.onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 1,
        bgcolor: "rgba(255, 255, 255, 0.5)",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.7)",
        },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
}

function NextBtn(props: any) {
  return (
    <IconButton
      onClick={props.onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 1,
        bgcolor: "rgba(255, 255, 255, 0.5)",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.7)",
        },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
}

function Testimonial() {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    appendDots: (dots: any) => (
      <Box
        display="flex"
        justifyContent="center"
        sx={{ width: "100%", bottom: "-70px" }}
      >
        <ul style={{ display: "flex", gap: "8px" }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        component="div"
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#b13b3c",
        }}
      />
    ),
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor: "#fbeee0",
        my: 14,
        py: 4,
        height: { xs: "800px", md: "400px" },
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        width="100%"
        position="relative"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#b13b3c" }}
        >
          Testimonials
        </Typography>
        <Box
          sx={{
            width: "60%",
          }}
        >
          <Slider {...settings}>
            {data.map((item) => (
              <Box key={item.name} display="flex" justifyContent="center">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p={4}
                  sx={{
                    bgcolor: "#7DAF19",
                    borderRadius: "50%",
                    boxShadow: 1,
                    height: { md: "250px", xs: "600px" },
                  }}
                >
                  <Typography
                    variant="body1"
                    align="center"
                    paragraph
                    sx={{ position: "relative", lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: "5rem",
                        verticalAlign: "middle",
                        lineHeight: 0,
                        // marginRight: "10px",
                        display: "inline-block",
                        marginTop: "30px",
                      }}
                    >
                      &ldquo;
                    </span>
                    {item.review}
                    <span
                      style={{
                        fontSize: "5rem",
                        verticalAlign: "middle",
                        lineHeight: 0,
                        // marginLeft: "5px",
                        display: "inline-block",
                        marginTop: "30px",
                      }}
                    >
                      &rdquo;
                    </span>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ color: "#b13b3c" }}
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonial;
