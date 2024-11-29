import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services_banner from "../assets/Customer relationship management-bro.png";
import dc from "../assets/drone-cuate.png";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
});

const Services = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#D4E8FF", minHeight: "100vh" }}>
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
                    fontWeight: 700,
                    color: "#0047AE",
                    textAlign: "center", // Always centered for all screen sizes
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
                    color: "#000000",
                    fontWeight: 400,
                    textAlign: "justify", // Always justified for all screen sizes
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  At Vymanika Aerospace, we specialize in delivering
                  cutting-edge UAV solutions tailored to diverse industries. Our
                  state-of-the-art drones and services are designed to enhance
                  efficiency, safety, and accuracy across a wide range of
                  applications. Whether you need precise agricultural spraying
                  or advanced infrastructure inspections, our expertise ensures
                  that your operational goals are met with unparalleled quality
                  and reliability.
                </Typography>
              </Box>
            }
          />

          {/* Service Category Banner */}
          <Banner
            image={dc}
            title="Service Categories"
            reverse={true}
            contentDiv={
              <Box>
                <Grid container spacing={4}>
                  {/* Service List in Column with Numbers */}
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
                            color: "#000000",
                            marginBottom: 2,
                          }}
                        >
                          <strong>1.</strong> UAV Design & Manufacturing
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#000000",
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
                            color: "#000000", // Black color
                            marginBottom: 2,
                          }}
                        >
                          <strong>2.</strong> UAV Components
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#000000",
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
                            color: "#000000", // Black color
                            marginBottom: 2,
                          }}
                        >
                          <strong>3.</strong> Custom Solutions
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#000000",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          }}
                        >
                          We offer tailor-made UAV services and solutions to
                          meet unique industry demands. From concept design to
                          final deployment, our custom offerings guarantee
                          satisfaction and precision.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            }
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Services;
