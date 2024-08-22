import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import MainSlider from "../views/Home/MainSlider";
import Layout from "../Components/Global/Layout";
import Service from "../data/ServiceCapability.json";
import ProductSlider from "../views/Home/ProductSlider";
import { styled } from "@mui/system";
import TestimonialsSlider from "../views/Home/Testimonial";
import CertificateSlider from "../views/Home/CertificateSlider";
import Footer from "../Components/Global/Footer";
import { Link } from "react-router-dom";
import Footer2 from "../Components/Global/Footer2";

const Root = styled(Container)({
  fontFamily: "Poppins, sans-serif",
  marginTop: "8rem",
});

const CardContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  // marginLeft: "0px",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});

const CustomCard = styled(Card)({
  backgroundColor: "#FAEADD",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1.25rem",
  border: "1px solid",
  borderRadius: "0.375rem",
  padding: "0.75rem",
  height: "350px",
  width: "300px",
});

const Image = styled("img")({
  height: "50px",
  width: "50px",
});

const TextCenter = styled(Box)({
  textAlign: "center",
});

const TextColor = styled(Typography)({
  color: "#674422",
});

const Home = () => {
  const CurrentYear = new Date().getFullYear();

  const cards = [
    {
      imgSrc: "images/Sincerity.png",
      title: "Sincerity",
      description:
        "Sincerity & seriousness is our major philosophy. We deliver what we promise - with superior assistance & meet deadlines in the stipulated time.",
    },
    {
      imgSrc: "images/binoculars.png",
      title: "Customer Centric Approach",
      description:
        "We help our clientele to improve their competitiveness in the global trade markets, to enhance the quality of products thanks to local culture and experience.",
    },
    {
      imgSrc: "images/handshake.png",
      title: "Commitment",
      description:
        "To establish & to continually develop human relationships aimed to build accessible markets, safer & more open to cultural exchange.",
    },
  ];
  const getGridItemStyle = (index: any) => {
    // If items are less than or equal to 3, or first row items, keep static
    if (Service.length <= 3 || index < 3) {
      return {};
    }

    // If remaining items in the second row, center them
    const remainingItems = Service.length % 3;
    if (remainingItems !== 0 && index >= Math.floor(Service.length / 3) * 3) {
      return {
        marginLeft: remainingItems === 2 ? { md: "50px", xs: "auto" } : 0,
        marginRight: remainingItems === 2 ? { md: "50px", xs: "auto" } : 0,
      };
    }

    return {};
  };
  return (
    <Layout>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* hii */}
          <MainSlider />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { md: "80%", xs: "100%" },
          }}
          my={12}
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h4"
            color="#7DAF19"
            // sx={{ marginLeft: 0, width: "35%" }}
            mb={2}
          >
            Service Capability
          </Typography>
          <Box
            sx={{
              width: { md: "100%", xs: "80%" },
              display: { xs: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                width: { xs: "70%", md: "100%" },
                gap: "20px",

                justifyContent: "center",
                alignItems: "center",
                height: { md: "400px" },
              }}
            >
              {Service &&
                Service.map((item: any, index: any) => (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    md={6}
                    lg={3}
                    sx={{
                      bgcolor: "#FAEADD",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: { md: "250px", sm: "300px", xs: "200px" },
                      border: "1px solid black",
                      borderRadius: 1,
                      ...getGridItemStyle(index),
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      sx={{ height: "17%", width: "15%" }}
                      alt={item.name}
                    />
                    <Typography sx={{ marginTop: "20px" }} variant="h5">
                      {item.name}
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* hii */}
          <ProductSlider />
        </Box>
        <Box
          sx={{
            width: { md: "82%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Root>
            <CardContainer>
              {cards.map((card, index) => (
                <CustomCard key={index}>
                  <TextCenter>
                    <Image src={card.imgSrc} alt={card.title} />
                  </TextCenter>
                  <CardContent>
                    <TextCenter>
                      <Typography variant="h5">{card.title}</Typography>
                      <TextColor>{card.description}</TextColor>
                    </TextCenter>
                  </CardContent>
                </CustomCard>
              ))}
            </CardContainer>
          </Root>
        </Box>
        <Box
          sx={{
            width: { md: "82%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TestimonialsSlider />
        </Box>
        <Box
          sx={{
            width: { md: "82%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CertificateSlider />
        </Box>
      </Box>
      <Footer2 />
    </Layout>
  );
};

export default Home;
