import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import api from "../../services/api";
import Produto from "../../models/produto";
import Navbar from "../../components/static/navbar";
import './Home.css'
import Footer from "../../components/static/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MediaCard from "../../components/dynamics/card";

export default function Home() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  async function BuscaProduto() {
    const res = await api.get('produto');
    const todosProdutos: Produto[] = res.data
    setProdutos(todosProdutos.slice(-3));
  }

  useEffect(() => {
    BuscaProduto()
  }, [])

  return (
    <>
      <Box sx={{
        backgroundImage: `url(https://live.staticflickr.com/65535/52649412230_4c600f1164_k.jpg)`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

        <Navbar />
        <Grid container xs={12} justifyContent='center' alignItems='center'  >

          <Grid item xs={8} className="animationfade"
            sx={{
              height: "calc(100vh - 80px)",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: { xs: 45, sm: 48, md: 60 },
                color: '#f0f8ff',
                lineHeight: '100%',
                mb: { xs: 3, sm: 2 }
              }}
            >
              VOCÊ MAIS <span style={{ color: '#0DCA70', }}>SAUDÁVEL</span> <br /> COM ATIVIDADES AO AR LIVRE.
            </Typography>

            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: 25, sm: 28, md: 30 },
                color: '#f0f8ff',
                textAlign: 'center',
                mb: 5
              }}>
              Atividades físicas e esportes em geral são a melhor forma de cuidar da saúde. <br />
              Motivamos você a se exercitar!
            </Typography>

          </Grid>

        </Grid>

      </Box>

      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: '100vh',
        width: "100%",
        padding: "50px",
        flexDirection: "column",
        backgroundColor: '#fefefe'
      }}>
        <Typography variant="h2" sx={{
          fontWeight: 'bold',
          color: '#101522',
          paddingX: '30px',
          marginBottom: "100px"
        }}>
          Aulas Recentes
          <Divider color="#0DCA70" sx={{
            height: 4,
            width: '100px',
            borderRadius: '5px',
          }} />

        </Typography>
        <Grid container justifyContent='center' spacing={4}
          sx={{

          }}>

          {
            produtos.map((produto) => {
              return (
                <Grid item xs={12} sm={6} md={4} sx={{ marginY: "5px" }}>
                  <MediaCard titulo={produto.nome} foto_url={produto.foto_url} descricao_breve={produto.descricao_breve} id={String(produto.id)} key={produto.id} />
                </Grid>
              )
            })}

        </Grid>
      </Box>

      <Footer />
    </>
  );

}
