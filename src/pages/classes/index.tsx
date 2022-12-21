import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import Produtos from "../../models/produto";
import api from "../../services/api";
import MediaCard from "../../components/dynamics/card";
import Footer from "../../components/static/footer";
import Navbar from "../../components/static/navbar";
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form'
import './style.css'

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
        className="bgaulas"
        sx={{
          display: "grid",
          placeItems: "center",
        }}>

        < Navbar />

        <form onSubmit={handleSubmit(handleGetProducts)}>
          <TextField
            {...register('search')}
            label="Buscar Aulas"
            color='green'
            sx={{ backgroundColor: "gray", borderRadius: "8px", width: "600px" }}
            variant="filled"
            inputProps={{ style: { color: "#efeeee" } }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              )
            }}
          />
        </form>

        <Typography variant="h2" sx={{
          fontWeight: 'bold',
          color: 'white',
          paddingX: '30px',
          marginY: "30px"


        }}>
          Aulas Disponíveis
          <Divider color="#0DCA70" sx={{
            height: 4,
            width: '100px',
            borderRadius: '5px',
            position: "center",
          }} />

        </Typography>
      </Box>
      <Box minHeight="25rem" alignItems="center" sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        boxShadow: 3,
        backgroundColor: "#fff",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        borderRadius: '16px',
      }}>

        <Grid container spacing={4} sx={{ width: '100%', }}>
          {produtos.map(produto => (
            <Grid item xs={4} sx={{ marginY: "5px" }}>
              <MediaCard titulo={produto.nome} local={produto.local} key={produto.id} />
            </Grid>
          ))}
        </Grid>

      </Box>
      <Footer />
    </Box>
  )
}