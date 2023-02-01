import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "../../components/static/footer";
import api from "../../services/api";
import Navbar from "../../components/static/navbar";
import { TokenState } from "../../store/tokens/tokensReducer";
import Produto from "../../models/produto";
import './style.css'

export default function Check() {

  const navigate = useNavigate()
  const [produto, setProduto] = useState<Produto>()
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token, navigate])

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id])

  async function findById(id: string) {
    const res = await api.get(`/produto/${id}`, {
      headers: {
        'Authorization': token
      }
    })
    setProduto(res.data)
  }

  return (
    <Box>
      <Box minHeight="35vh"
        width="100%"
        py={6}
        px={{ xs: 2, lg: 0 }}
        sx={{
          backgroundImage: `url(https://live.staticflickr.com/65535/52650344384_235ebe2893_k.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}>

        < Navbar />
      </Box>

      <Box minHeight="25rem" alignItems="center" sx={{
        p: 2,
        mx: 2,
        mt: -8,
        mb: 4,
        boxShadow: 3,
        backgroundColor: "#fff",
        borderRadius: '16px'
      }}>

        <Box
          width="100%"
          bgcolor="white"
          borderRadius="xl"
          boxShadow="xl"
          mb={1}
          mt={3}
          ml={2}
          pr={2}
          sx={{ borderRadius: '16px' }}
        >
          <Grid container spacing={2} justifyContent='center'>

            <Grid item xs={12} lg={4}
              sx={{
                height: { xs: 250, sm: 400, md: 400 },
                backgroundImage: `url(${produto?.foto_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                alignContent: 'center',
                borderRadius: '16px',
              }}
            >
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box p={1} sx={{ borderRadius: '16px', width: '100%', maxWidth: 700 }}>
                <Box px={4} py={{ xs: 1, sm: 6 }} sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: { xs: 'center', sm: 'left' },
                    gap: { sm: 3 },
                    mb: 3
                  }}>
                    <Typography variant="h2" mb={1} sx={{ fontWeight: 'bold', fontSize: { md: 60, sm: 45, xs: 35 } }}>
                      Parabéns!
                    </Typography>
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                  </Box>
                  <Typography variant="body1" color="text" pt={1} pb={3} textAlign={"center"} sx={{
                    pr: { xs: 2 },
                    fontSize: { xs: 18 }
                  }}>
                    Você adquiriu a aula de {produto?.nome}! Confira todas as informações no e-mail cadastrado. Bom treino!
                  </Typography>

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1
                  }}>



                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />


    </Box>
  )
} 