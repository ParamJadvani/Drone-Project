import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Section = ({ title, content, isContact }) => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        letterSpacing: 1.2,
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: 600,
          textAlign: "left",
          fontSize: { xs: "19px", sm: "21px", md: "23px" },
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {/* Content */}
      <Box
        sx={{
          color: "white",
          textAlign: "left",
          fontSize: { xs: "14px", sm: "16px" },
          "& p": {
            marginBottom: 1,
          },
          "& a": {
            color: "white",
            textDecoration: "none",
            "&:hover": {
              color: "#D4E8FF",
              textDecoration: "underline",
            },
          },
        }}
      >
        {isContact ? (
          <>
            {/* Contact Info with Icons */}
            {content.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  marginBottom: 2,
                  fontSize: { xs: "14px", sm: "16px" },
                  "& svg": {
                    fontSize: { xs: "20px", sm: "24px" }, // Icon size
                  },
                  "&:hover": {
                    color: "#D4E8FF", // Text color change on hover
                  },
                  letterSpacing: 1.2,
                }}
              >
                {item.icon}
                <Typography variant="body2">{item.text}</Typography>
              </Box>
            ))}
          </>
        ) : (
          content
        )}
      </Box>
    </Box>
  );
};

export default Section;
