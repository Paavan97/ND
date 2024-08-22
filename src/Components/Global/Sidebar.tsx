import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../../assets/Logos/FooterLogo.png";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProductCategoryClick = () => {
    navigate("/categories");
  };

  const drawer = (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <img src={Logo} alt="logo" style={{ width: "12vh" }} />
            <Typography variant="h5">
              <span style={{ color: "#674422" }}>NATURE</span>
              <span style={{ color: "#7DAF19" }}> DUDE</span>
            </Typography>
          </Box>
        </Link>
        <Typography variant="body1" color="#674422">
          FMCG Exportized
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{
            "&:hover": { backgroundColor: "#674422" },
            textAlign: "center",
          }}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/WhyUs"
          sx={{
            "&:hover": { backgroundColor: "#674422" },
            textAlign: "center",
          }}
        >
          <ListItemText primary="Why Us?" />
        </ListItem>
        <ListItem
          button
          onClick={handleProductCategoryClick}
          sx={{
            "&:hover": { backgroundColor: "#674422" },
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListItemText primary="Product Categories" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/blogs"
          sx={{
            "&:hover": { backgroundColor: "#674422" },
            textAlign: "center",
          }}
        >
          <ListItemText primary="Blogs" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/AboutUs"
          sx={{
            "&:hover": { backgroundColor: "#674422" },
            textAlign: "center",
          }}
        >
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/ContactUs"
          sx={{
            "&:hover": { backgroundColor: "#674422" },
            textAlign: "center",
          }}
        >
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Divider />
      <Box display="flex" justifyContent="center" gap={2} p={2}>
        <a
          href="https://www.facebook.com/NatureDude.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} color="#7DAF19" />
        </a>
        <a
          href="https://www.instagram.com/naturedude.india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} color="#7DAF19" />
        </a>
        <a
          href="https://twitter.com/NatureDude_in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} color="#7DAF19" />
        </a>
        <a
          href="https://in.linkedin.com/company/nature-dude-fmcg-exportised"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} color="#7DAF19" />
        </a>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ display: { lg: "none", md: "block", sm: "block", xs: "block" } }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Nature Dude
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: 300 }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#FAEADD",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
              backgroundColor: "#FAEADD",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
