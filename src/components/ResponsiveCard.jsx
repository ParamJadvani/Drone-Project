import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const ResponsiveCard = ({ image, title, description }) => {
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginTop: 6,
          height: 80,
          paddingInline: 2,
          width: "100%",
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
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#000000", textAlign: "start" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#000000"
          sx={{ textAlign: "start", marginTop: 1 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
