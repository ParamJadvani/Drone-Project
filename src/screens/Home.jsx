import React from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Vision_Section from "../components/Vision_Section";
import Banner from "../components/Banner";
import Footer from "../components/Footer/Footer";
import ResponsiveCard from "../components/ResponsiveCard";
import TestimonialCard from "../components/TestimonialCard";
import onrev from "../assets/SectionImage/Online Review-rafiki.png";
import OMV from "../assets/SectionImage/Business Plan-bro.png";
import jadu from "../assets/Vector.png";
import bannerimage from "../assets/BannerImage/Home.png";
import vsrp from "../assets/SectionImage/Vision statement-rafiki.png";
import drone_delivery from "../assets/CardImage/drone-delivery.png";
import support from "../assets/CardImage/support.png";
import drone from "../assets/CardImage/drone.png";
import certificate from "../assets/CardImage/winner.png";
import mapping from "../assets/CardImage/mapping.png";
import pilot from "../assets/CardImage/pilot.png";

// Data for "Our Services" Section
const servicesData = [
  {
    image: drone_delivery,
    title: "Drone Show",
    description:
      "Drone Shows are synchronized aerial displays using drones to create visuals, replacing traditional fireworks for entertainment and awareness.",
  },
  {
    image: support,
    title: "Surveying & Mapping",
    description:
      "Drone surveying provides accurate data faster mapping, improved safety, and 3D models, revolutionizing land and construction surveying processes.",
  },
  {
    image: drone,
    title: "Agriculture Spraying",
    description:
      "Agriculture drones ensure efficient crop spraying, reducing pesticide use, improving precision, saving time, and covering larger areas effectively.",
  },
];

// Data for "Training & Courses" Section
const trainingData = [
  {
    image: certificate,
    title: "DGCA Certified Remote Pilot Certificate (RPC)",
    description:
      "Get certified by DGCA with hands-on training to become a licensed drone operator. Learn safety protocols, legal requirements, and technical skills to excel in UAV operations.",
  },
  {
    image: pilot,
    title: "Photography & Videography",
    description:
      "Capture breathtaking aerial visuals for events, films, or real estate promotions.",
  },
  {
    image: mapping,
    title: "Fertilizer/Pesticide Application in Agriculture",
    description:
      "Specialized training to use drones for efficient and precise agricultural spraying, ensuring better crop yields and reduced waste.",
  },
];

const Home = () => {
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
        {/* Banner Section */}
        <Banner
          image={bannerimage}
          contentDiv={
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: theme.palette.secondary.main,
                  textAlign: "center",
                }}
              >
                Innovating the Future of UAV Technology
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: 2,
                  fontStyle: "italic",
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                “Shaping the Future of Aerospace with Cutting-Edge UAV
                Solutions”
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginTop: 2,
                  color: theme.palette.text.primary,
                  textAlign: "justify",
                }}
              >
                At Vymanika Aerospace, we deliver innovative UAV technology,
                advancing aviation with unparalleled reliability and efficiency
                for commercial, defense, and beyond. Explore the limitless
                possibilities with us.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  marginTop: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0047AE",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
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

        {/* Vision Section */}
        <Vision_Section
          title="Our Mission"
          vectorImage={OMV}
          backgroundimage={jadu}
          description="At Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
        />
        <Vision_Section
          title="Our Vision"
          vectorImage={vsrp}
          backgroundimage={jadu}
          description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
          reverse={true}
        />

        {/* "Our Services" Section */}
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              textAlign: "center",
              marginBottom: 9,
              color: theme.palette.secondary.main,
            }}
          >
            Our Services
          </Typography>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ lg: 20, md: 10, sm: 10, xs: 1 }}
            mb={10}
          >
            {servicesData.map(({ image, title, description }, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <ResponsiveCard
                  image={image}
                  title={title}
                  description={description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Banner
          image={onrev}
          contentDiv={<TestimonialCard />}
          title="Client Testimonial"
        />

        {/* "Training & Courses" Section */}
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              textAlign: "center",
              marginBottom: 9,
              color: theme.palette.secondary.main,
            }}
          >
            Training & Courses
          </Typography>
          <Grid container spacing={3} mb={10}>
            {trainingData.map(({ image, title, description }, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ResponsiveCard
                  image={image}
                  title={title}
                  description={description}
                />
              </Grid>
            ))}
          </Grid>
          <Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#0047AE", // Custom color
                fontWeight: 900,
                fontStyle: "capitalize",
                mb: theme.spacing(5), // Margin bottom using theme
                fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" },
              }}
            >
              {"contact us".toUpperCase()}
            </Typography>
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
                maxWidth: 700,
                width: "100%", // Ensure full width for responsiveness
                backgroundColor: "white",
              }}
            >
              {/* TextField for input */}
              <TextField
                variant="outlined"
                placeholder="Enter text"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none", // Remove default border to match your style
                    },
                    backgroundColor: "white", // White background for input
                    fontSize: "1rem",
                  },
                  input: {
                    padding: "10px",
                  },
                }}
              />

              {/* Send Icon Button */}
              <IconButton
                sx={{
                  color: "rgba(0, 71, 174, 1)",
                  borderRadius: "50%",
                  padding: "10px",
                  marginLeft: 1,
                }}
              >
                <IoPaperPlaneOutline size={30} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
