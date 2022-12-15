import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@material-ui/core/Link";



export default function Footer () {
  return <footer >
    <Box 
    px={{xs: 3, sm: 10}}
    py={{xs: 5, sm: 10}}
    bgcolor={"#040919"} 
    color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Login</Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Sobre</Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box 
        textAlign={"center"} 
        pt={{xs: 5, sm: 10}} 
        pb={{xs: 5, sm: 0}} >
          Copyright <strong>Motive</strong> &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
}