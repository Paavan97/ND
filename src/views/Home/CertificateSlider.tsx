import React from "react";
import { Box, Typography } from "@mui/material";

const certificates = [
  "./images/certificates/MSME.jpg",
  "./images/certificates/TeaBoard.png",
  "./images/certificates/apeda.png",
  "./images/certificates/fssai.avif",
  "./images/certificates/spices_board.png",
  "./images/certificates/CoffeeBoard.png",
];

const CertificateSlider: React.FC = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" color="#7DAF19" mb={2} textAlign="center">
        Certifications
      </Typography>
      <Box
        sx={{
          height: "250px",
          margin: "auto",
          position: "relative",
          width: "90%",
          display: "flex",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "calc(300px * 12)", // 6 certificates * 2 (to ensure seamless looping)
            animation: "scroll 20s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(calc(-300px * 6))" }, // Move by the width of 6 certificates
            },
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {certificates.concat(certificates).map((src, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "180px",
                backgroundPosition: "center",
                width: "300px",
                display: "flex",
                alignItems: "center",
                padding: "15px",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CertificateSlider;
