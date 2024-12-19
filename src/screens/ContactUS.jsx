import React from "react";
import { Box, Typography, Button, useTheme, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import cu from "../assets/BannerImage/Contactus.png";
import { Phone, Email } from "@mui/icons-material";
import Footer from "../components/Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMapEmbed from "../components/GoogleMapEmbed";
import ContactForm from "../components/ContactForm";

const ContactUS = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centralized vertical alignment
      }}
    >
      <Navbar />
      <Container maxWidth="xl">
        <Box
          sx={{
            paddingInline: { lg: "50px", md: "25px", xs: "0px" },
            margin: "auto",
          }}
        >
          {/* Banner Section */}
          <Banner
            image={cu}
            contentDiv={
              <Box
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Vertical alignment
                }}
              >
                {/* Title */}
                <Typography
                  variant="h2"
                  sx={{
                    color: "#0047AE",
                    fontWeight: "900",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    marginBottom: theme.spacing(3),
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  CONTACT US
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                    lineHeight: "1.6",
                    marginBottom: theme.spacing(3),
                    textAlign: "start",
                  }}
                >
                  We at Vymanika Aerospace are always here to help! Whether you
                  have questions, need assistance, or want to collaborate, feel
                  free to reach out to us.
                </Typography>

                {/* Contact Info */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: theme.spacing(3),
                    width: "100%",
                    maxWidth: {
                      xs: "600px",
                      md: "100%",
                    },
                  }}
                >
                  {/* Phone */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "start",
                      width: "100%",
                    }}
                  >
                    <Phone sx={{ fontSize: "1.5rem" }} />
                    <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                      +91 89053 65128
                    </Typography>
                  </Box>

                  {/* Email */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "start",
                      width: "100%",
                    }}
                  >
                    <Email sx={{ fontSize: "1.5rem" }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.2rem",
                        textAlign: "center",
                        wordBreak: "break-word",
                      }}
                    >
                      Vymanikaaerospace
                      <wbr />
                      @gmail.com
                    </Typography>
                  </Box>

                  {/* Address */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "start",
                      width: "100%",
                    }}
                  >
                    <FaLocationDot style={{ fontSize: "1.5rem" }} />
                    <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                      204, Royal Business Hub, Variyav Road, Surat
                    </Typography>
                  </Box>
                </Box>
              </Box>
            }
          />

          {/* Map and Form Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center", // Vertical alignment
              justifyContent: "space-between",
              gap: theme.spacing(4),
              marginTop: theme.spacing(4),
              width: "100%",
              mb: 10,
            }}
          >
            {/* Google Map */}
            <Box
              sx={{
                width: { xs: "100%", md: "49%" },
                height: { xs: "auto", md: "500px" }, // Auto height for small screens
                aspectRatio: { xs: "1 / 1", md: "auto" }, // Square aspect ratio for smaller screens
                border: "1px solid #000000",
                boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                overflow: "hidden",
              }}
            >
              <GoogleMapEmbed />
            </Box>

            {/* Placeholder for Additional Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "49%" },
                height: { xs: "auto", md: "500px" }, // Auto height for small screens
                aspectRatio: { xs: "1 / 1", md: "auto" }, // Square aspect ratio for smaller screens
                border: "1px solid #000000",
                boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
              }}
            >
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ContactUS;
