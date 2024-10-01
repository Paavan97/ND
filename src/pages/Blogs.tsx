import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import BlogData from "../data/BlogData.json";
import Layout from "../Components/Global/Layout";
import Footer from "../Components/Global/Footer";

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          background: "linear-gradient(to bottom, #674422, #FAEADD)",
        }}
      >
        <Box
          sx={{
            width: { md: "100%", xs: "100%" },
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
              Blogs
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

        <Grid
          sx={{
            width: { md: "100%", xs: "100%" },
            marginBottom: "50px",
          }}
          spacing={4}
          alignItems="center"
          mt={6}
        >
          {BlogData.map((item) => (
            <Grid
              item
              key={item.id}
              sx={{
                width: "100%",
                marginTop: "50px",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
              sm={8}
              md={6}
              lg={7}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.Title}
                sx={{
                  marginBottom: { xs: "78%", sm: "40%", md: "-4.5%" },
                  display: "flex",
                  marginLeft: { md: "-60%" },
                  width: { md: "30%", xs: "60%" },
                  objectFit: "cover",
                  zIndex: 1,
                  position: "absolute",
                }}
              />
              <Card
                sx={{
                  height: { md: "300px", xs: "400px" },
                  width: "70%",
                  marginTop: "50px",
                  borderColor: "#4C180A",
                  borderWidth: 1,
                  display: "flex",
                  borderRadius: 2,
                  boxShadow: 3,
                  // position: "absolute",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                  }}
                >
                  <Typography
                    color="#4C180A"
                    component={Link}
                    to={`/blogs/${item.Title.replace(/ /g, "-")}`}
                    sx={{
                      width: { md: "48%", xs: "68%" },
                      fontSize: { md: "1.9rem", xs: "1.3rem" },
                      height: { xs: "110px", md: "160px" },
                      marginLeft: { md: "20%" },
                      marginTop: { xs: "20%", md: "0%" },
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      textWrap: "wrap",
                      "&:hover": { color: "#566B30" },
                    }}
                  >
                    {item.Title}
                  </Typography>
                  <Typography
                    sx={{
                      width: { md: "48%", xs: "66%" },
                      marginLeft: { md: "20%" },
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      marginTop: { xs: "30px", md: "0px" },
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 3, // Number of lines before truncating
                    }}
                  >
                    {item.Description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                  }}
                >
                  <Button
                    component={Link}
                    to={`/blogs/${item.Title.replace(/ /g, "-")}`}
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "#7DAF19",
                      color: "white",
                      borderRadius: 50,
                      marginLeft: { md: "-160%", sm: "-110%", xs: "-115%" },
                      position: "relative",
                      "&:hover": { backgroundColor: "#566B30" },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Layout>
  );
};

export default Blog;
