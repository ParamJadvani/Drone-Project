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
import dc from "../assets/SectionImage/drone-cuate.png";
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
                  textAlign: "start",
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
                  textAlign: "start",
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
            // rowSpacing={3}
            // columnSpacing={{ lg: 20, md: 10, sm: 10, xs: 1 }}
            spacing={3}
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
          reverse={true}
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

        {/* Contact Us */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: theme.spacing(3, 2), // Top-bottom and left-right padding
              maxWidth: "600px", // Ensure max width is applied
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#0047AE", // Custom color
                fontWeight: 900,
                fontStyle: "capitalize",
                mb: theme.spacing(3), // Margin bottom using theme
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
                flexDirection: "row", // Stack vertically on small screens
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
                paddingInline: 1.5,
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
                    padding: {
                      xs: "8px",
                      sm: "10px",
                    },
                  },
                }}
              />

              {/* Send Icon Button */}
              <IconButton
                size="small"
                sx={{
                  color: "rgba(0, 71, 174, 1)",
                  padding: {
                    xs: "0px",
                    sm: "10px",
                  },
                  marginLeft: { xs: 0, sm: 1 }, // Remove left margin on small screens
                }}
              >
                <IoPaperPlaneOutline
                  style={{
                    fontSize: "20px", // Default size
                  }}
                  size={window.innerWidth < 600 ? 19 : 30}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Service Category Banner */}
        <Banner
          image={dc}
          smallImage={true}
          title="Service Categories"
          contentDiv={
            <Box>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {/* UAV Design & Manufacturing */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.text.primary,
                          marginBottom: 2,
                        }}
                      >
                        1. DGCA Type-Certified Drone Selling
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          width: {
                            xs: "80%",
                            sm: "100%",
                          },
                        }}
                      >
                        DGCA-certified drones meet safety and quality standards,
                        making them eligible for lawful operations. Selling
                        certified drones ensures compliance with Indian
                        regulations, fostering reliability and market trust
                      </Typography>
                    </Box>

                    {/* UAV Components */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.text.primary,
                          marginBottom: 2,
                        }}
                      >
                        2. Drone Maintenance and Repair
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          width: {
                            xs: "100%",
                            sm: "80%",
                          },
                        }}
                      >
                        Regular maintenance ensures drones operate safely and
                        efficiently. Key tasks include cleaning, inspecting
                        parts, replacing damaged components, and updating
                        software to enhance performance and lifespan.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          }
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
