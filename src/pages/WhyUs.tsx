import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Layout from "../Components/Global/Layout";
import Footer from "../Components/Global/Footer";

interface Step {
  id: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    id: "1",
    title: "Step 1: Procurement",
    desc: "Understanding the nature and format of the consignee's product requirements is essential for making informed procurement decisions. Whether sourcing raw materials or finished products, it's crucial to inspect and check product quality to maintain high standards and prevent issues downstream.",
  },
  {
    id: "2",
    title: "Step 2: Sourcing and Transport",
    desc: "Once the procurement process is complete, it's time to source goods from various manufacturers and suppliers. Establishing strong relationships with reliable partners is key to ensuring a steady supply of quality products. Inland transport plays a critical role in moving goods from suppliers to warehouses efficiently and cost-effectively.",
  },
  {
    id: "3",
    title: "Step 3: Warehouse Management",
    desc: "Efficient warehouse management is essential for optimizing inventory levels and minimizing storage costs. Nature Dude's pre-stuffing and shipment inspections help identify any issues before goods are loaded for transport.",
  },
  {
    id: "4",
    title: "Step 4: Container Stuffing and Sealing",
    desc: "Container stuffing is a crucial step in the shipping process, and Nature Dude's use of AI technology has advanced this process more efficiently than ever. By accurately calculating the optimal placement of goods within containers, businesses can maximize space utilization and reduce shipping costs. Self-sealing containers add an extra layer of security and ensure the integrity of goods during transit.",
  },
  {
    id: "5",
    title: "Step 5: Export Documentation and Customs Clearance",
    desc: "Navigating export documentation and customs clearance can be complex and time-consuming. Working with Nature Dude leveraging automated solutions can help streamline this process and ensure compliance with regulations. Efficient clearance reduces transit times and minimizes the risk of delays or penalties.",
  },
  {
    id: "6",
    title: "Step 6: Departure and Documentation",
    desc: "Once all export documentation is in order, goods are ready to depart from the origin port. Timely transmission of shipping documents to the consignee ensures smooth customs clearance at the destination port. Effective communication and collaboration between all stakeholders are essential to avoid delays and ensure timely delivery.",
  },
  {
    id: "7",
    title: "Step 7: Arrival and Distribution",
    desc: "Real-time tracking and visibility enable businesses to monitor shipments and proactively address any issues that may arise during transit. Nature Dude's team helps and guides consignees through clearance and regulation of importing. Upon arrival at the destination port, the container is ready for clearance and transportation to the consignee's final destination for off-loading.",
  },
];

const WhyUS: React.FC = () => {
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
          pb: 5,
          justifyContent: "center",
          alignItems: "center",
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
              Why Us
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
        <Typography
          sx={{
            color: "#7DAF19",
            mt: 10,
            fontSize: { md: "40px", xs: "25px" },
          }}
        >
          Supply Chain Optimization
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: 5,
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <Box sx={{ mt: 3 }}>
            <img
              style={{ width: "100%" }}
              src="/images/WhyUs/FlowChart.png"
              alt="FlowChart"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "90%",
            mt: 10,
            color: "#4C180A",
            fontSize: "1rem",
            py: 4,
          }}
        >
          Optimizing your supply chain in today's fast-paced global market is
          crucial for maintaining a competitive edge and maximizing efficiency.
          From procurement to delivery, at each step in the supply chain
          process, Nature Dude plays a vital role in ensuring the timely
          delivery of goods while minimizing costs.
        </Box>
        <Grid container direction="column" alignItems="center" spacing={4}>
          {steps.map((step) => (
            <Grid
              item
              key={step.id}
              sx={{
                width: "90%",
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
                  height: { xs: "550px", md: "250px" },
                  border: "2px solid",
                  borderColor: "limegreen",
                  borderTopRightRadius: 100,
                  borderBottomLeftRadius: 100,
                  //   height: { xl: 250, lg: 250, md: 290, sm: 310 },
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
                ></Box>
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
                      variant="h4"
                      sx={{
                        color: "#7DAF19",
                        width: "100%",
                        px: 4,
                        py: 2,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      {step.title}
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
                      <Typography>{step.desc}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ width: "90%", color: "#4C180A", fontSize: "1rem", py: 4 }}>
          Nature Dude focuses on each step of the supply chain process and
          leveraging technology and best practices that reduce costs and enhance
          customer satisfaction. Our team always stays agile, to changing market
          conditions, and embraces innovation to stay ahead in today's
          competitive landscape.
        </Box>
      </Box>
      <Footer />
    </Layout>
  );
};

export default WhyUS;
