import React, { useEffect } from "react";
import Data from "../data/ProductData.json";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Layout from "../Components/Global/Layout";
import Footer from "../Components/Global/Footer";

interface ProductData {
  product_name: string;
  image: string;
}

const ProductCategories: React.FC = () => {
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
              Product Categories
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
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            width: "100%",
          }}
        >
          <Grid container spacing={5} justifyContent="center">
            {Data.map((item: ProductData, index: number) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Link
                  to={`/products/${item.product_name}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      width: 290,
                      height: 350,
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 2,
                      backgroundColor: "white",
                      mb: 2,
                      boxShadow: 3,
                      transition: "transform 0.5s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        boxShadow: "0 0 25px 1px rgba(0, 0, 0, 0.3)",
                        overflow: "hidden",
                        transition: "0.5s",
                        backgroundColor: "#555",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          zIndex: 1,
                          top: "50%",
                          left: "50%",
                          width: "500px",
                          height: "500px",
                          transform: "translate(-140%, -100%)",
                          opacity: 0.8,
                          borderRadius: "50%",
                          transition: "0.8s",
                          backgroundColor: "#E6C4C4",
                        },
                        "&:hover:after": {
                          transform: "translate(-50%, -50%)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={item.image}
                        alt={item.product_name}
                        sx={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          top: "0",
                          left: "0",
                          transition: "transform 0.5s",
                        }}
                      />
                      <CardContent
                        sx={{
                          position: "absolute",
                          bottom: 60,
                          width: "90%",
                          textAlign: "center",
                          background: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          borderRadius: "0 0 16px 16px",
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            transition: "0.5s",
                          }}
                        >
                          {item.product_name}
                        </Typography>
                      </CardContent>
                      <Button
                        variant="contained"
                        sx={{
                          position: "absolute",
                          bottom: 15, // Adjusted for better positioning
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 135,
                          height: 30,
                          borderRadius: "30px",
                          backgroundColor: "#7DAF19",
                          color: "white",
                          textTransform: "none",
                          zIndex: 2, // Ensures button is on top
                        }}
                      >
                        View Brands
                      </Button>
                    </Box>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Layout>
  );
};

export default ProductCategories;
