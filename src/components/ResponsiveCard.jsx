import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const ResponsiveCard = ({
  image,
  title,
  description,
  b_height = 322,
  t_height = 55,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        marginInline: "auto",
        marginBottom: 2,
        borderRadius: 2,
        backgroundColor: "#E8F4FF", // Light blue background
        border: "2px solid #2196F3", // Blue border
        boxShadow: "5px 5px 0px #1565C0", // Shadow effect
        position: "relative",
        height: b_height, // Set consistent height for all cards
        display: "flex",
        flexDirection: "column",
        justifyContent: "",
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
        }}
      >
        <Typography
          component="div"
          sx={{
            fontWeight: 800,
            color: "#000000",
            textAlign: "start",
            height: t_height,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            overflowY: "auto",
            maxHeight: 120, // Limit the height for scrolling
            paddingRight: 1, // Add padding to prevent text clipping
          }}
        >
          <Typography
            variant="body2"
            color="#000000"
            sx={{ textAlign: "start", marginTop: 1, fontWeight: 500 }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
