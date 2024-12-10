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
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Navbar />

      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          paddingInline: { lg: "50px", md: "25px", xs: "0px" },
        }}
      >
        <Banner
          image={cu}
          contentDiv={
            <Box sx={{ maxWidth: "lg", margin: "auto", padding: 2 }}>
              {/* Title Section */}
              <Typography
                variant="h2"
                sx={{ marginBottom: 3, color: "#0047AE", fontWeight: "900" }}
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
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font size
                      textAlign: { xs: "center", md: "start" }, // Center for smaller screens
                      wordBreak: "break-word",
                    }}
                  >
                    Vymanikaaerospace
                    <wbr />
                    @gmail.com
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

        <Box
          height={{ xs: "auto", md: 600 }} // Adjust height for smaller screens
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack in a column for small screens, row for larger screens
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: { xs: 2, md: 0 }, // Add space between boxes on smaller screens
          }}
        >
          <Box
            sx={{
              marginInline: "auto",
              border: "1px solid #000000",
              boxShadow:
                "5px 5px 0px rgba(0, 71, 174, 1), -1px 0px 0px rgba(0, 71, 174, 1)",
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              paddingInline: 1.5,
              height: { xs: "300px", md: "100%" }, // Adjust height for smaller screens
              backgroundColor: "transparent",
              width: { xs: "90%", md: "49%" }, // Full width for small screens, 49% for larger screens
            }}
          ></Box>
          <Box
            sx={{
              marginInline: "auto",
              border: "1px solid #000000",
              boxShadow:
                "5px 5px 0px rgba(0, 71, 174, 1), -1px 0px 0px rgba(0, 71, 174, 1)",
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              paddingInline: 1.5,
              height: { xs: "300px", md: "100%" }, // Adjust height for smaller screens
              backgroundColor: "transparent",
              width: { xs: "90%", md: "49%" }, // Full width for small screens, 49% for larger screens
            }}
          ></Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUS;
