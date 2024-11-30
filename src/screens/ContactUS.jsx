import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import cu from "../assets/BannerImage/Contactus.png";
import { Phone, Email } from "@mui/icons-material";
import Footer from "../components/Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";

const ContactUS = () => {
  // Use the theme from ThemeProvider
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Navbar />
      <Box>
        <Banner
          image={cu}
          contentDiv={
            <Box sx={{ maxWidth: "lg", margin: "auto", padding: 2 }}>
              {/* Title Section */}
              <Typography
                variant="h2"
                sx={{ marginBottom: 3, color: "#0047AE",fontWeight: "900" }}
              >
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
                  <Phone />
                  <Typography variant="body1">+91 89053 65128</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email />
                  <Typography variant="body1">
                    Vymanikaaerospace@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <FaLocationDot />
                  <Typography variant="body1">
                    204, Royal Business Hub, Variyav Road, Surat
                  </Typography>
                </Box>
              </Box>
            </Box>
          }
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUS;
