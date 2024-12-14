import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";

const ContactForm = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{
          color: "#0047AE",
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
        }}
      >
        Send a Message
      </Typography>

      {/* Form Container */}
      <Box
        component="form"
        sx={{
          padding: { xs: 2, sm: 3 },
        }}
      >
        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Name"
              variant="outlined"
              InputProps={{
                sx: {
                  border: "1px solid #000000",
                  boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                  background: "white",
                  borderRadius: "0px",
                },
              }}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="E-Mail"
              variant="outlined"
              InputProps={{
                sx: {
                  border: "1px solid #000000",
                  boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                  background: "white",
                  borderRadius: "0px",
                },
              }}
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Message"
              variant="outlined"
              multiline
              rows={4}
              InputProps={{
                sx: {
                  border: "1px solid #000000",
                  boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                  background: "white",
                  borderRadius: "0px",
                },
              }}
            />
          </Grid>
        </Grid>
        {/* Submit Button */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 3,
            marginInline: "auto",
            borderRadius: "0px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "50%",
              backgroundColor: "#0047AE",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none", // Remove uppercase text
              borderRadius: "0px",
              boxShadow:
                "0px 5px 0px #003a8c, 0px 8px 15px rgba(0, 71, 174, 0.2)", // Dual shadow
              "&:hover": {
                backgroundColor: "#003a8c",
                boxShadow:
                  "0px 3px 0px #002b6d, 0px 5px 10px rgba(0, 58, 140, 0.3)", // Hover shadow
              },
              transition: "all 0.2s ease", // Smooth transition
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
