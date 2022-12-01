import React from "react";
import { Box } from "@mui/material";

export default function Footer() {
  return (

    <Box sx={{ height: "70px", backgroundColor: "gray", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ textAlign: "center" }}>
        Material UI Workshop &reg; {new Date().getFullYear()}
      </Box>
    </Box>

  );
}
