import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
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

const Footer: React.FC = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(147deg, #7daf19 0%, #674422 74%)",
        color: "#674422",
        width: "100%",
        marginLeft: "0px",
        display: "flex",
        // marginTop: "50px",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "85%",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          sx={{
            width: { md: "calc(100% + -57px)" },
            alignItems: "start",
          }}
          spacing={4}
          direction="row"
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            xs={12}
            md={3}
          >
            <img
              src="/images/Footer/FooterLogo.png"
              alt="logo"
              style={{ height: 130, width: 130 }}
            />
            <Typography
              variant="body1"
              sx={{
                textAlign: { md: "left", xs: "center" },
                marginLeft: { md: "40px" },
              }}
              width="80%"
              paragraph
            >
              Bringing India's Finest <br /> to the World: Your Global FMCG
              Partner.
            </Typography>
          </Grid>

          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
            xs={12}
            md={3}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="left"
              width="170px"
              gutterBottom
            >
              Address
            </Typography>
            <Divider sx={{ width: "80%", mb: 2, color: "#7DAF19" }} />
            <Typography variant="body1" paragraph>
              <LocationOnIcon sx={{ marginRight: 1 }} />
              Nature Dude <br />
              Plot No. F-46/22-B, <br />
              Raghuveer Industrial Park, <br />
              Ruvapari Road, <br />
              Bhavnagar - 364001, <br />
              Gujarat, India.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
            xs={12}
            md={3}
          >
            <Typography
              variant="h6"
              textAlign="left"
              width="140px"
              gutterBottom
              fontWeight="bold"
            >
              Contact
            </Typography>
            <Divider sx={{ width: "80%", mb: 2, color: "#7DAF19" }} />
            <Typography
              variant="body1"
              textAlign="left"
              width="180px"
              paragraph
            >
              <PhoneIcon sx={{ marginRight: 1 }} />
              <a
                href="tel:+919724743444"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +91 9724743444
              </a>
            </Typography>
            <Typography
              variant="body1"
              textAlign="left"
              width="180px"
              paragraph
            >
              <PhoneIcon sx={{ marginRight: 1 }} />
              <a
                href="tel:+15186924500"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +1 518 692 4500
              </a>
            </Typography>
            <Typography
              variant="body1"
              textAlign="left"
              width="180px"
              paragraph
            >
              <EmailIcon sx={{ marginRight: 1 }} />
              <a
                href="mailto:info@naturedude.in"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                info@naturedude.in
              </a>
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
            xs={12}
            md={3}
          >
            <Typography
              variant="h6"
              textAlign="left"
              width="140px"
              gutterBottom
              fontWeight="bold"
            >
              Quick Links
            </Typography>
            <Divider sx={{ width: "80%", mb: 2, color: "#7DAF19" }} />
            <ul style={{ listStyleType: "none", padding: 0, lineHeight: 1.5 }}>
              <li>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/WhyUs"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Why Us?
                </Link>
              </li>
              <li>
                <Link
                  to="/ProductCategory"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Product Category
                </Link>
              </li>
              <li>
                <Link
                  to="/Blogs"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid spacing={4} sx={{ mt: 5, width: "100%" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            md={4}
          >
            <IconButton color="inherit" href="https://www.facebook.com">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="https://www.twitter.com">
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 1, width: "100%" }}
        >
          Nature Dude @{CurrentYear} All Rights Reserved | Developed by Durva
          DDS
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
