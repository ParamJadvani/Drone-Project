import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const ResponsiveCard = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f0f4ff",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          backgroundColor: "#ffffff",
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
          sx={{ fontWeight: "bold", color: "#333333", textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", marginTop: 1 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
