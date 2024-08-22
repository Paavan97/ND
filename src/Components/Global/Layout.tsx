import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          width: "100%", // xs, md, lg
          marginLeft: "0%", // xs, md, lg
          marginTop: ["6vh", "6.3vh", "0"], // xs, md, lg
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
