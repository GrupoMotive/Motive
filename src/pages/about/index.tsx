import React from "react";
import { Box } from "@mui/material";

export default function About() {

  const email = localStorage.getItem("token")
  console.log(email);

  return (
    <Box sx={{ height: "calc(100vh - 140px)" }}>
      <h1>ABOUT</h1>
    </Box>
  )
}