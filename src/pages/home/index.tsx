import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import api from "../../services/api";
import Produtos from "../../models/produto";
import Navbar from "../../components/static/navbar";
import './Home.css'
import Footer from "../../components/static/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MediaCard from "../../components/dynamics/card";

export default function Home() {

  const [produtos, setProdutos] = useState<Produtos[]>([])

  async function BuscaProduto() {
    const res = await api.get('produto');
    setProdutos(res.data);
  }

  useEffect(() => {
    BuscaProduto()
  }, [])

  return (
    <>
      <Box className="imagemHome">
        <Navbar />
        <Grid container xs={12} justifyContent='center' alignItems='center'  >

          <Grid item xs={8} display='flex' flexDirection='column' justifyContent='center' alignItems='center' className="animationfade"
            sx={{
              height: "calc(100vh - 80px)",

            }}>

            <Typography sx={{ fontWeight: 'bold', fontSize: '65px', }} className='TituloHome' lineHeight='100%' align="center" >
              <br /> <br />  VOCÊ MAIS <span style={{ color: '#0DCA70', }}>SAUDÁVEL</span> <br /> COM ATIVIDADES AO AR LIVRE.
            </Typography>

            <Typography sx={{ fontWeight: 'bold', fontSize: '30px', paddingTop: '10px' }} className='SubTituloHome' align="center" >
              Atividades físicas e esportes em geral são a melhor forma de cuidar da saúde.
              Motivamos você a se exercitar!
            </Typography>

          </Grid>

        </Grid>
      </Box>

      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        width: "100%",
        padding: "50px",
        flexDirection: "column"
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
        <Grid container spacing={4}
          sx={{

          }}>

          {produtos.map((produto, i) => {
            if (i >= 3)
              return (<></>)
            else {
              return (
                <Grid item xs={4} sx={{ marginY: "5px" }}>
                  <MediaCard titulo={produto.nome} foto_url={produto.foto_url} valor={produto.valor} id={String(produto.id)} key={produto.id} />
                </Grid>
              )
            }

          })}

        </Grid>
      </Box>
      <Footer />
    </>
  );

}
