import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const ResponsiveCard = ({
  image,
  title,
  description,
  b_height = 320,
  t_height = 40,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 280, // Adjust width to take full available width
        width: "100%", // Make card width 100% of its container
        marginInline: "auto",
        backgroundColor: "#E8F4FF", // Light blue background
        border: "2px solid #2196F3", // Blue border
        boxShadow: "5px 5px 0px #1565C0", // Shadow effect
        position: "relative",
        height: b_height, // Set consistent height for all cards
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Align content to the top
        overflow: "hidden",
      }}
    >
      {/* Icon Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          height: 80,
          paddingInline: 2,
          width: "100%",
          marginTop: 6,
        }}
      >
        <CardMedia
          component="img"
          src={image}
          alt={title}
          sx={{
            height: 40,
            width: 40,
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Title and Description Section */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          paddingBottom: 2, // Add padding for better spacing
        }}
      >
        <Typography
          component="div"
          sx={{
            fontWeight: 800,
            color: "#000000",
            textAlign: "start",
            height: t_height,
            fontSize: { lg: "1rem", md: "0.9rem" },
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            overflowY: "auto",
            maxHeight: { lg: 120, md: 85 }, // Limit the height for scrolling
            paddingRight: 1, // Add padding to prevent text clipping
          }}
        >
          <Typography
            variant="body2"
            color="#000000"
            sx={{
              textAlign: "start",
              marginTop: 1,
              fontWeight: 500,
              fontSize: { lg: "0.90rem", md: "0.82rem" },
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
