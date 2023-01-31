import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import Produto from "../../models/produto";
import api from "../../services/api";
import MediaCard from "../../components/dynamics/card";
import Footer from "../../components/static/footer";
import Navbar from "../../components/static/navbar";
import SearchIcon from '@mui/icons-material/Search';
import bgAulas from '../../assets/images/bgaulas.jpg'
import { useForm } from 'react-hook-form'
import { Container, flexbox } from "@mui/system";

type FormValues = {
  search: string
}

export default function Classes() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const { register, handleSubmit } = useForm<FormValues>()


  async function handleGetProducts(data: FormValues) {
    if (data.search !== '') {
      const res = await api.get(`produto/nome/${data.search}`)
      setProdutos(res.data);
    } else {
      BuscaProduto()
    }
  }

  async function BuscaProduto() {
    const res = await api.get('produto');
    setProdutos(res.data);
  }

  useEffect(() => {
    BuscaProduto()
  }, [])

  return (
    <Box sx={{ backgroundColor: "#fefefe" }}>
      <Box minHeight="55vh"
        width="100%"
        py={6}
        sx={{
          backgroundImage: `url(https://live.staticflickr.com/65535/52650506390_e5ce83a6b3_k.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>

        < Navbar />

        <Typography variant="h2" sx={{
          fontWeight: 'bold',
          color: 'white',
          paddingX: '30px',
          marginY: "30px",
        }}>
          Aulas Disponíveis
          <Divider color="#0DCA70" sx={{
            height: 4,
            width: '100px',
            borderRadius: '5px',
          }} />

        </Typography>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(handleGetProducts)}>
            <TextField
              {...register('search')}
              label="Buscar Aulas"
              color='green'
              sx={{ width: "100%", backgroundColor: "#f5f5f5", borderRadius: "8px", marginBottom: "60px" }}
              variant="filled"
              inputProps={{ style: { color: "#2e2e2e" } }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                )
              }}
            />
          </form>
        </Container>

      </Box>
      <Box minHeight="5rem" alignItems="center" sx={{
        p: 2,
        mx: { xs: 2, lg: 12 },
        mt: -8,
        mb: 4,
        boxShadow: 8,
        backgroundColor: "#fefefe",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: '16px',

      }}>
        <Grid container spacing={4} justifyContent='center' >
          {produtos.map(produto => (
            <Grid item xs={12} sm={6} md={4} >
              <MediaCard titulo={produto.nome} foto_url={produto.foto_url} descricao={produto.descricao} id={String(produto.id)} key={produto.id} />
            </Grid>
          ))}
        </Grid>

      </Box>

      <Footer />
    </Box>
  )
}