import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services_banner from "../assets/BannerImage/Service.png";
import dc from "../assets/SectionImage/drone-cuate.png";
import Footer from "../components/Footer/Footer";
import ResponsiveCard from "../components/ResponsiveCard";
import drone_delivery from "../assets/CardImage/drone-delivery.png";
import support from "../assets/CardImage/support.png";
import drone from "../assets/CardImage/drone.png";
import pilot from "../assets/CardImage/pilot.png";
import solar_energy from "../assets/CardImage/solar-energy.png";
import electric_factory from "../assets/CardImage/electric-factory.png";
import renewable_energy from "../assets/CardImage/renewable-energy.png";
import racing_game from "../assets/CardImage/racing-game.png";

const servicesData = [
  {
    title: "Agriculture Spraying",
    description:
      "Achieve precise crop spraying with our UAVs, improving yield and reducing waste.",
    icon: drone,
  },
  {
    title: "Surveying & Mapping",
    description:
      "Obtain accurate terrain data and maps for construction, agriculture, and urban planning.",
    icon: support,
  },
  {
    title: "Photography & Videography",
    description:
      "Capture breathtaking aerial visuals for events, films, or real estate promotions.",
    icon: pilot,
  },
  {
    title: "Solar Panel Cleaning & Inspection",
    description:
      "Maintain energy efficiency with drones equipped for thorough solar panel cleaning and diagnostics.",
    icon: solar_energy,
  },
  {
    title: "Powerline Inspection",
    description:
      "Ensure uninterrupted power supply with detailed inspections of powerlines, detecting faults efficiently.",
    icon: electric_factory,
  },
  {
    title: "Wind Turbine Inspection",
    description:
      "Perform safe, high-precision turbine inspections, reducing downtime and risks.",
    icon: renewable_energy,
  },
  {
    title: "Highway Monitoring & Traffic Management",
    description:
      "Monitor traffic and road conditions for improved management and safety.",
    icon: racing_game,
  },
  {
    title: "Drone Shows",
    description:
      "Create mesmerizing aerial displays for events, showcasing creativity through synchronized drone performances.",
    icon: drone_delivery,
  },
];

const Services = () => {
  // Access the theme with useTheme
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Box sx={{ padding: { xs: 2, sm: 4 } }}>
        {/* About Banner with Content */}
        <Banner
          image={Services_banner}
          contentDiv={
            <Box>
              {/* Title Section */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: "#0047AE",
                  textAlign: "center",
                  fontSize: { xs: "1.8rem", sm: "2.5rem" },
                  marginBottom: 2,
                }}
              >
                Overview of Services
              </Typography>

              {/* Body Description */}
              <Typography
                variant="body1"
                sx={{
                  marginTop: 2,
                  color: theme.palette.text.primary,
                  fontWeight: 400,
                  textAlign: "justify",
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                At Vymanika Aerospace, we specialize in delivering cutting-edge
                UAV solutions tailored to diverse industries. Our
                state-of-the-art drones and services are designed to enhance
                efficiency, safety, and accuracy across a wide range of
                applications. Whether you need precise agricultural spraying or
                advanced infrastructure inspections, our expertise ensures that
                your operational goals are met with unparalleled quality and
                reliability.
              </Typography>
            </Box>
          }
        />

        {/* Responsive Cards in Grid */}
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
            spacing={3}
            mb={10}
            sx={{
              justifyContent:
                servicesData.length % 3 === 1 || servicesData.length % 3 === 2
                  ? "center"
                  : "flex-start",
            }}
          >
            {servicesData.map(
              ({ icon, title: t_text, description: d_text }, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{
                  marginInline:{lg:-4 ,md:-1}
                }}>
                  <ResponsiveCard
                    image={icon}
                    title={t_text}
                    description={d_text}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>

        {/* Service Category Banner */}
        <Banner
          image={dc}
          title="Service Categories"
          reverse={true}
          contentDiv={
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    {/* UAV Design & Manufacturing */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          marginBottom: 2,
                        }}
                      >
                        <strong>1.</strong> UAV Design & Manufacturing
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 400,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                        }}
                      >
                        We create high-performance UAVs that cater to specific
                        needs, combining advanced engineering with innovative
                        technology. Our drones are built for efficiency,
                        durability, and adaptability, ensuring they excel in
                        challenging environments.
                      </Typography>
                    </Box>

                    {/* UAV Components */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          marginBottom: 2,
                        }}
                      >
                        <strong>2.</strong> UAV Components
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 400,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                        }}
                      >
                        Our expert team designs and integrates specialized UAV
                        components to enhance performance, reliability, and
                        functionality. From payload systems to advanced
                        navigation, we provide cutting-edge solutions tailored
                        to your requirements.
                      </Typography>
                    </Box>

                    {/* Custom Solutions */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          marginBottom: 2,
                        }}
                      >
                        <strong>3.</strong> Custom Solutions
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 400,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                        }}
                      >
                        We offer tailor-made UAV services and solutions to meet
                        unique industry demands. From concept design to final
                        deployment, our custom offerings guarantee satisfaction
                        and precision.
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

export default Services;
