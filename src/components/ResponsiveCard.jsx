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
  b_height = 330, // Default card height
  t_height = 40, // Default title height
  wordNumber = 20,
}) => {
  const [open, setOpen] = useState(false);

  // Function to truncate the description to the first `wordNumber` words
  const truncateText = (text, wordLimit) => {
    const words = text.trim().split(/\s+/); // Split by spaces and trim
    return words.slice(0, wordLimit).join(" ");
  };

  // Check if the description exceeds the word limit
  const isDescriptionLong = description.trim().split(/\s+/).length > wordNumber;

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "hidden",
          // Responsive height logic
          height: {
            xs: b_height - 30, // Decrease height by 30 for small screens
            sm: b_height - 20, // Decrease height by 20 for medium screens
            md: b_height, // Default height for larger screens
            lg: b_height + 10, // Slightly increase height for extra-large screens
          },
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
              fontSize: { xs: "0.85rem", sm: "1rem" },
              // Responsive title height logic
              height: {
                xs: t_height - 10, // Decrease title height by 10 for small screens
                sm: t_height - 5, // Decrease title height by 5 for medium screens
                md: t_height, // Default title height for larger screens
                lg: t_height + 5, // Slightly increase title height for extra-large screens
              },
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
                  {truncateText(description, wordNumber)}
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
