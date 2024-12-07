import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ResponsiveCard = ({
  image,
  title,
  description,
  b_height = 330,
  t_height = 40,
}) => {
  const [open, setOpen] = useState(false);

  // Function to truncate the description to the first 10 words
  const truncateText = (text, wordLimit) => {
    const words = text.trim().split(/\s+/); // Split by spaces and trim
    return words.slice(0, wordLimit).join(" ");
  };

  // Check if the description exceeds 10 words
  const isDescriptionLong = description.trim().split(/\s+/).length > 10;

  // Open and close the dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          maxWidth: 280,
          width: "100%",
          marginInline: "auto",
          backgroundColor: "#E8F4FF",
          border: "2px solid #2196F3",
          boxShadow: "5px 5px 0px #1565C0",
          position: "relative",
          height: b_height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
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
            paddingBottom: 2,
          }}
        >
          <Typography
            component="div"
            sx={{
              fontWeight: 800,
              color: "#000000",
              textAlign: "start",
              height: t_height,
              fontSize: { xs: "0.85rem", sm: "1rem" },
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              overflowY: "auto",
              maxHeight: { lg: 120, md: 85 },
              paddingRight: 1,
            }}
          >
            <Typography
              variant="body2"
              color="#000000"
              sx={{
                textAlign: "start",
                marginTop: 1,
                fontWeight: 500,
                fontSize: { xs: "0.75rem", sm: "0.9rem" },
              }}
            >
              {isDescriptionLong ? (
                <>
                  {truncateText(description, 20)}
                  <span
                    style={{
                      cursor: "pointer",
                      color: "#1565C0",
                      fontWeight: "bold",
                      textDecoration: "underline",
                      marginLeft: "5px",
                    }}
                    onClick={handleOpen}
                  >
                    More
                  </span>
                </>
              ) : (
                description
              )}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Dialog for full description */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <DialogTitle
            sx={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#1565C0",
            }}
          >
            {title}
          </DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography
            variant="body1"
            color="#333333"
            sx={{
              marginTop: 2,
              fontSize: "1rem",
              lineHeight: 1.6,
              textAlign: "justify",
            }}
          >
            {description}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#888888",
            }}
          >
            Close the dialog when you're done reading.
          </Typography>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ResponsiveCard;
