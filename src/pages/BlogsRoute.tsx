import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import Data from "../data/BlogData.json";
import Layout from "../Components/Global/Layout";
import Footer from "../Components/Global/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface BlogData {
  id: number;
  Title: string;
  image?: string;
  Description?: string;
  others?: Array<{
    title: string;
    description: string;
    description2?: string;
    description3?: string;
    description4?: string;
    list?: string[];
  }>;
}

const findObj = (title: string): BlogData | undefined => {
  const result = Data.find((item) =>
    item.Title.replace(/-/g, " ").includes(title)
  );
  return result;
};

const BlogRoute: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const formattedTitle = title?.replace(/-/g, " ") || "";
  const obj = findObj(formattedTitle);

  const [blogData, setBlogData] = useState<BlogData | undefined>(obj);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* <Box
        sx={{
          width: "100%",
          backgroundColor: "#FAEADD",
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#7DAF19", width: { md: "60%", xs: "90%" } }}
          >
            {blogData?.Title}
          </Typography>
          <Box
            sx={{ color: "#4C180A", display: "flex", justifyContent: "center" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>{" "}
            /{" "}
            <Link
              to="/Blogs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Blogs
            </Link>
            <Typography sx={{ color: "#4C180A" }}>
              /{blogData?.Title}
            </Typography>
          </Box>
        </Box>
      </Box> */}
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
          <Typography variant="h4" sx={{ color: "#7DAF19" }}>
            {blogData?.Title}
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

      <Container sx={{ my: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <Paper sx={{ width: "100%", borderRadius: 2, overflow: "hidden" }}>
            <img
              src={blogData?.image}
              alt={blogData?.Title}
              style={{ width: "100%" }}
            />
          </Paper>
        </Box>

        <Typography
          variant="body1"
          sx={{ mt: 5, color: "#4C180A", textAlign: "justify" }}
        >
          {blogData?.Description}
        </Typography>

        {blogData?.others?.map((item, index) => (
          <Box key={index} sx={{ mb: 5 }}>
            <Typography variant="h4" sx={{ mb: 3, color: "#7DAF19" }}>
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#4C180A", textAlign: "justify" }}
            >
              {item.description}
            </Typography>
            {item.description2 && (
              <Typography
                variant="body1"
                sx={{ color: "#4C180A", textAlign: "justify" }}
              >
                {item.description2}
              </Typography>
            )}
            {item.description3 && (
              <Typography
                variant="body1"
                sx={{ color: "#4C180A", textAlign: "justify" }}
              >
                {item.description3}
              </Typography>
            )}
            {item.description4 && (
              <Typography
                variant="body1"
                sx={{ color: "#4C180A", textAlign: "justify" }}
              >
                {item.description4}
              </Typography>
            )}

            {item.list && (
              <List>
                {item.list.map((listItem, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={
                        <strong style={{ color: "#4C180A" }}>
                          {listItem.split(": ")[0]}
                        </strong>
                      }
                      secondary={listItem.split(": ")[1]}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ))}
      </Container>
      <Footer />
    </Layout>
  );
};

export default BlogRoute;
