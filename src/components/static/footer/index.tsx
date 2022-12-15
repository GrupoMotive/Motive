import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import './footer.css'


export default function Footer() {
  return <footer >
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor={"#040919"}
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>
              <img src="/WhiteLogo-Motive.png" alt="WhiteLogoMotive" height={50} width={200} />
            </Box>
            <Box pr={15}>
              <Typography>
                Somos a MOTIVE, site de saúde e bem-estar. {"\n"}
              </Typography>
              <Typography>
                Proporcionamos uma qualidade de vida melhor, saudável e acessível para todas as idades.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={3} borderColor={"#0DCA70"} pb={1}>LINKS ÚTEIS</Box>
            <Box pt={3} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to='/' className="LinkFooter" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }}>
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7 }, transition: "0.2s all" }}>
                  Home
                </Typography>
              </Link>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to='/aulas' className="LinkFooter" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
              }}>
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7 }, transition: "0.2s all" }}>
                  Aulas
                </Typography>
              </Link>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
            <Link to="/sobre" className="LinkFooter" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
              }}>
                <ChevronRightIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography sx={{ color: "white", ":hover": { opacity: 0.7 }, transition: "0.2s all" }}>
                  Sobre
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={3} borderColor={"#0DCA70"} pb={1}>DÚVIDAS, SUGESTÕES E ELOGIOS:</Box>
            <Box pt={3} pb={1} borderBottom={2} borderColor={"#101522"}>
              <a href="https://grupo1.generation.rj@gmail.com" className="LinkFooter" >
                <MailOutlineIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography pl={1} sx={{ color: "white", ":hover": { opacity: 0.7 }, transition: "0.2s all" }}>
                  grupo1.generation.rj@gmail.com
                </Typography>
              </a>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
              <Link to='/' className="LinkFooter">
                <WhatsAppIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography pl={1} sx={{ color: "white", ":hover": { opacity: 0.7 }, transition: "0.2s all" }}>
                  +55 21 99132-3526
                </Typography>
              </Link>
            </Box>
            <Box pt={1} pb={1} borderBottom={2} borderColor={"#101522"}>
              <a href='https://github.com/GrupoMotive' className="LinkFooter">
                <GitHubIcon sx={{ color: "#0DCA70", fontSize: 30 }} />
                <Typography pl={1} sx={{ color: "white", ":hover": { opacity: 0.7 }, transition: "0.2s all" }}>
                  https://github.com/GrupoMotive
                </Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
        <Box
          textAlign={"center"}
          pt={{ xs: 5, sm: 10 }}
          pb={{ xs: 5, sm: 0 }} >
          Copyright <strong>Motive</strong> &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
}