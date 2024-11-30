import React from "react";
import {
  Box,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import cu from "../assets/BannerImage/Contactus.png";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import Footer from "../components/Footer/Footer";

// Create a theme with custom typography
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", // Use Poppins font for better visual
    h4: {
      fontWeight: 700,
      fontSize: "3rem",
      textAlign: "center", // Center text for all screen sizes
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
      textAlign: "justify", // Justified text for all screen sizes
    },
  },
});

const ContactUS = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#D4E8FF", // Apply background color
          borderRadius: 2, // Optional: adds rounded corners
        }}
      >
        <Navbar />
        <Box>
          <Banner
            image={cu}
            contentDiv={
              <Box sx={{ maxWidth: "lg", margin: "auto", padding: 2 }}>
                {/* Title Section */}
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                  CONTACT US
                </Typography>

                {/* Body Description */}
                <Typography variant="body1" sx={{ marginBottom: 3 }}>
                  We at Vymanika Aerospace are always here to help! Whether you
                  have questions, need assistance, or want to collaborate, feel
                  free to reach out to us.
                </Typography>

                {/* Contact Info Section */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Phone sx={{ color: "#0047AE" }} />
                    <Typography variant="body1">+91 89053 65128</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Email sx={{ color: "#0047AE" }} />
                    <Typography variant="body1">
                      Vymanikaaerospace@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOn sx={{ color: "#0047AE" }} />
                    <Typography variant="body1">
                      204, Royal Business Hub, Variyav Road, Surat
                    </Typography>
                  </Box>
                </Box>

                {/* Button Container with Centering */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center", // Center the button horizontally
                    alignItems: "center", // Align the button vertically
                    marginTop: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1E40AF",
                      "&:hover": {
                        backgroundColor: "#1D4ED8",
                      },
                      padding: "10px 20px",
                      textTransform: "none",
                    }}
                  >
                    Know More
                  </Button>
                </Box>
              </Box>
            }
          />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default ContactUS;
