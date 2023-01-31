import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../components/static/navbar";
import Footer from "../../components/static/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import bgProduct from '../../assets/images/bgproduct.jpg'
import './style.css'
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import api from "../../services/api";
import Produto from "../../models/produto";

export default function Product() {
  const [produto, setProduto] = useState<Produto>()
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
      window.scrollTo(0, 0)
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

            <Grid item xs={12} lg={6}>
              <Box p={1} sx={{ borderRadius: '16px', width: '100%', maxWidth: 700 }}>
                <Box px={4} py={{ xs: 1, sm: 6 }} display={"initial"} >
                  <Typography variant="h2" mb={1} sx={{ fontWeight: 'bold', fontSize: { md: 60, sm: 45, xs: 35 } }}>
                    {produto?.nome}
                  </Typography>
                  <Typography variant="body1" color="text" pt={1} pb={3} textAlign={"justify"} sx={{
                    pr: { xs: 2 },
                    fontSize: { md: 18, sm: 18, xs: 18 }
                  }}>
                    {produto?.descricao_completa}
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1
                  }}>
                    <Typography alignSelf={'flex-start'} color={'#0DCA70'} fontWeight={'Bold'}
                      sx={{
                        fontSize: { xs: 30, md: 35 }
                      }}>
                      R$ {produto?.valor}
                    </Typography>

                    <Link to={`/check/${produto?.id}`}>
                      <button className='buttonProduct'> MATRICULE-SE </button>
                    </Link>
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