import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import Layout from "../Components/Global/Layout";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Data from "../data/ProductData.json";
import Footer from "../Components/Global/Footer";

interface ProductDetails {
  name: string;
  link: string;
  image: string;
}

interface Product {
  product_name: string;
  details: ProductDetails[];
}

const Products: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<Product | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      const filteredData = Data.find((item) => item.product_name === id);
      setProductData(filteredData);
    }
  }, [id]);

  const cardStyle: SxProps<Theme> = {
    width: 250,
    height: 320,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    borderRadius: "8%",
    border: "1px solid #7DAF19",
    overflow: "hidden",
    boxShadow: "0 0 32px -10px rgba(0,0,0,0.08)",
    transition: "transform 0.35s cubic-bezier(.1,.72,.4,.97)",
    ":hover": {
      transform: "scale(1.05)",
    },
  };

  const cardContentStyle: SxProps<Theme> = {
    width: "88%",
    height: "120px",
    textAlign: "center",
    borderTopLeftRadius: "80px",
    borderTopRightRadius: "80px",
    backgroundColor: "#7DAF19",
    position: "absolute",
    bottom: 0,
    left: 0,
    transition: "all 0.35s 0.35s cubic-bezier(.1,.72,.4,.97)",
    zIndex: 1,
  };

  return (
    <Layout>
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
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: { xs: "10%", md: "16px" },
            left: { xs: "0%", md: "20%" },
            color: "#7DAF19",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
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
            {id}
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          flexWrap: "wrap",
          marginBottom: "50px",
          mt: 5,
        }}
      >
        {productData?.details.map((item, index) => (
          <Card key={index} sx={cardStyle}>
            <CardContent sx={cardContentStyle}>
              <Typography
                variant="h6"
                sx={{
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.name}
              </Typography>
              <Button
                variant="contained"
                href={item.link}
                target="_blank"
                sx={{
                  backgroundColor: "#674422",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#56381E",
                  },

                  fontSize: "12px",
                  borderRadius: "24px",
                  mt: 2,
                }}
              >
                View Catalogs
              </Button>
            </CardContent>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "80%",
                objectFit: "contain",
                margin: "10px auto",
              }}
            />
          </Card>
        ))}
      </Box>
      <Footer />
    </Layout>
  );
};

export default Products;
