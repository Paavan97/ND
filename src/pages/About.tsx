import { useEffect } from "react";
import ExportProductsImg from "/images/AboutUs/deliverytruck.jpg";
import Layout from "../Components/Global/Layout";
import Footer from "../Components/Global/Footer";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  styled,
} from "@mui/material";

const ProfileCard = styled(Card)(() => ({
  position: "relative",
  width: 320,
  height: 320,
  border: "dotted 5px",
  borderRadius: "50%",
  boxShadow: "-5px 8px 45px rgba(51, 51, 51, 0.126)",
  transition: "all .4s",
  margin: "0 20px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    borderRadius: "10px",
    height: 360,
    backgroundColor: "#FAEADD",
    "& .avatar": {
      width: 200,
      height: 200,
      borderRadius: "20px", // Make the avatar square
      transform: "translateY(-70px)",
    },
    "& .caption": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const ImgContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all .4s",
});

const Caption = styled(CardContent)(() => ({
  textAlign: "center",
  position: "absolute",
  bottom: "10px",
  width: "100%",
  opacity: 0,
  transition: "all .5s",
  pointerEvents: "none",
  transform: "translateY(50%)",
  "& .caption-content": {
    transition: "all .5s",
  },
}));

const SocialLinks = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  "& a": {
    fontSize: "21px",
    margin: "0 3px",
    color: "#333",
    transition: "all .4s",
    textDecoration: "none",
    "&:hover": {
      color: "#0c52a1",
    },
  },
});

const About = () => {
  const AboutData = [
    {
      id: 1,
      title: "Comprehensive Solutions",
      text: "At Nature Dude, we pride ourselves on offering end-to-end solutions for your commercial development. From cultivating relationships with farmers and manufacturers to collaborating with distributors and importers, we ensure a seamless supply and distribution process.",
    },
    {
      id: 2,
      title: "Market Resilience",
      text: "We understand the potential hurdles of entering new markets. Our quality consultants work tirelessly to prevent hostility from new markets and ensure your brand is embraced, rather than rejected. This proactive approach helps build a strong customer base, fostering long-term success in international trade.",
    },
    {
      id: 3,
      title: "Stability for Buyers and Sellers",
      text: "Our overarching goal in the global trade market is to create a stable and reliable platform for both Buyers and Sellers. Nature Dude ensures a mutually beneficial environment for all parties involved by fostering trust, transparency, and efficiency.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            bgcolor: "#FAEADD",
            height: "30vh",
            display: "flex",
            borderRadius: "0 0 50% 50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" sx={{ color: "#7DAF19" }}>
              About Us
            </Typography>
            {/* <Box sx={{ color: "#4C180A", display: "flex" }}>
              <Link className="nav-link" to="/">
                Home
              </Link>
              {" / "}
              <Typography component="span" sx={{ color: "#4C180A" }}>
                Why Us
              </Typography>
            </Box> */}
          </Box>
        </Box>

        <Container sx={{ width: "80%", mt: 2, py: 5 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#7DAF19", mb: 2 }}
          >
            Welcome to Nature Dude
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "400", color: "#4C180A", mb: 2 }}
          >
            Nature Dude stands as a prominent aggregator platform catering to
            the diverse needs of importers and exporters across the globe. As a
            secure and dynamic platform, we specialize in bridging the gap
            between foreign and domestic markets, fostering robust networks for
            various brands on a global scale.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "400", color: "#4C180A", mb: 2 }}
          >
            Our unwavering commitment revolves around providing top-notch
            merchandise, enhancing customer loyalty, and delivering expert
            consultations to establish a formidable global presence in the realm
            of international trade.
          </Typography>
        </Container>

        <Paper
          sx={{
            width: "80%",
            mt: 2,
            border: "4px solid",
            borderColor: "grey.900",
          }}
        >
          <CardMedia
            component="img"
            src={ExportProductsImg}
            alt="Export Products"
            sx={{ objectFit: "cover" }}
          />
        </Paper>

        <Container sx={{ width: "80%", py: 5 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#7DAF19", mb: 2 }}
          >
            Why Choose Nature Dude for Your Global Trade Endeavors?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "400", color: "#4C180A", mb: 2 }}
          >
            Fast-moving consumer goods make for an ideal choice for export trade
            owing to their easy delivery and reasonably low prices and wide
            range of products under a single domain. Such fast-moving consumer
            products are in hot demand, making the global trend a perfect
            choice.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "400", color: "#4C180A", mb: 2 }}
          >
            Nature Dude aims to provide the proper forum to connect foreign
            trade between buyers and sellers, lowering the gap between consumer
            product demands and supplies. These consumer goods involve products
            from some of the country's leading producers, Like, Gulab Oils,
            Hajoori Beverages, Satvam, Sheetal Foods, Auzat, etc.
          </Typography>
        </Container>

        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={4}
          sx={{ py: 7 }}
        >
          {AboutData.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  height: 350,
                  border: "2px solid",
                  borderColor: "limegreen",
                  borderTopRightRadius: 100,
                  borderBottomLeftRadius: 100,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 150,
                    bgcolor: "transparent",
                    position: "absolute",
                    height: 150,
                    borderLeft: "15px solid",
                    borderTop: "15px solid",
                    borderColor: "#674422",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "70%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      pt: 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#7DAF19",
                        width: "100%",
                        px: 4,
                        py: 2,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        px: 4,
                        fontSize: "1rem",
                        position: "relative",
                        color: "#674422",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{item.text}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Card
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: 2,
            borderColor: "limegreen",
            borderTopLeftRadius: 0,
            borderTopRightRadius: "100px",
            borderBottomLeftRadius: "100px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: 150,
              bgcolor: "transparent",
              position: "absolute",
              height: { xs: 150, md: 90 },
              borderLeft: "15px solid",
              borderTop: "15px solid",
              borderColor: "#674422",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 150,
              height: 150,
              borderTop: "15px solid #8B4513",
              borderLeft: "15px solid #8B4513",
            }}
          />
          <CardContent sx={{ pt: 4, textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ color: "#7DAF19", fontWeight: "bold" }}
            >
              International Trading Expertise
            </Typography>
          </CardContent>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: "100%",
                // px: 4,
                fontSize: "1rem",
                position: "relative",
                color: "#674422",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#674422" }}>
                Navigating the intricacies of globally scaled business can be
                challenging. Our team of experienced consultants at Nature Dude
                is dedicated to guiding you through every step of the import and
                export journey. This includes a meticulous selection of
                suppliers, skillful negotiation of contracts, establishment of
                convenient delivery terms, optimization of carriers and routes,
                efficient customs clearance, storage solutions, and targeted
                distribution strategies.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Container sx={{ width: "100%", py: 5, px: 5 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "400", color: "#4C180A" }}
          >
            In essence, Nature Dude is not just an international trading
            company; it is your strategic partner in navigating the complexities
            of global commerce. Join us on a journey towards stability, growth,
            and success in the ever-evolving landscape of international trade.
          </Typography>
        </Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#7DAF19", fontWeight: "bold", mb: 5 }}
          >
            Our Team
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: { md: "400px", xs: "800px" },
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* Card for Anmol Shah */}
              <Grid item xs={12} md={6} lg={4}>
                <ProfileCard>
                  <ImgContainer>
                    <Avatar
                      src="./images/Profile/Anmol.jpg"
                      alt="Anmol Shah"
                      sx={{
                        width: 250,
                        height: 250,
                        //   border: "5px solid #674422",
                        transition: "all .4s",
                      }}
                      className="avatar"
                    />
                  </ImgContainer>
                  <Caption className="caption">
                    <div className="caption-content">
                      <Typography
                        variant="h6"
                        sx={{ color: "#7DAF19", fontWeight: 600 }}
                      >
                        Anmol Shah
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          margin: "2px 0 12px 0",
                        }}
                      >
                        Managing Director
                      </Typography>
                      <SocialLinks>
                        <a
                          href="https://www.linkedin.com/in/anmol-shah-a1695b1b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </SocialLinks>
                    </div>
                  </Caption>
                </ProfileCard>
              </Grid>

              {/* Card for JaspalSinh Gohil */}
              <Grid item xs={12} md={6} lg={4}>
                <ProfileCard>
                  <ImgContainer>
                    <Avatar
                      src="./images/Profile/JaspalBhai.jpeg"
                      alt="JaspalSinh Gohil"
                      sx={{
                        width: 250,
                        height: 250,
                        //   border: "5px solid #674422",
                        transition: "all .4s",
                      }}
                      className="avatar"
                    />
                  </ImgContainer>
                  <Caption className="caption">
                    <div className="caption-content">
                      <Typography
                        variant="h6"
                        sx={{ color: "#7DAF19", fontWeight: 600 }}
                      >
                        JaspalSinh Gohil
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          margin: "2px 0 12px 0",
                        }}
                      >
                        Founding Partner
                      </Typography>
                      <SocialLinks>
                        <a
                          href="https://www.linkedin.com/in/jaspalsinh-gohil-89702322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </SocialLinks>
                    </div>
                  </Caption>
                </ProfileCard>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Layout>
  );
};

export default About;
