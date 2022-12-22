import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import Produtos from "../../models/produto";
import api from "../../services/api";
import MediaCard from "../../components/dynamics/card";
import Footer from "../../components/static/footer";
import Navbar from "../../components/static/navbar";
import SearchIcon from '@mui/icons-material/Search';
import bgAulas from '../../assets/images/bgaulas.jpg'
import { useForm } from 'react-hook-form'

type FormValues = {
  search: string
}

export default function Classes() {
  const [produtos, setProdutos] = useState<Produtos[]>([])
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
    <Box>
      <Box minHeight="55vh"
        width="100%"
        py={6}
        sx={{
          backgroundImage: `url(${bgAulas})`,
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
        <form onSubmit={handleSubmit(handleGetProducts)}>
          <TextField
            {...register('search')}
            label="Buscar Aulas"
            color='green'
            sx={{ backgroundColor: "#f5f5f5", borderRadius: "8px", width: "600px", marginBottom: "60px" }}
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


      </Box>
      <Box minHeight="25rem" alignItems="center" sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        borderRadius: '16px',
      }}>

        <Grid container spacing={4} sx={{ width: '100%', }}>
          {produtos.map(produto => (
            <Grid item xs={4} sx={{ marginY: "5px" }}>
              <MediaCard titulo={produto.nome} foto_url={produto.foto_url} valor={produto.valor} id={String(produto.id)} key={produto.id} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
}