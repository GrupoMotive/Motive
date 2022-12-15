
import React, { useEffect, useState } from "react";
import { alpha, Box, Divider, Grid, InputAdornment, InputBase, styled, TextField, Typography } from "@mui/material";
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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.6),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '600px',
  },
}));

export default function Classes() {
  const [produtos, setProdutos] = useState<Produtos[]>([])
  const [isSearch, setIsSerach] = useState(false);
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
          backgroundImage: 'url(./bgaulas.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
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