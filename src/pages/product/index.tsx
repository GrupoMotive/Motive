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
  }, [token])

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
      <Box minHeight="20vh"
        width="100%"
        py={6}
        px={{ xs: 2, lg: 0 }}
        sx={{
          backgroundImage: `url(${bgProduct})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}>
        < Navbar />
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

        <Grid container
          justifyContent="center"
          alignItems="center"
          sx={{ borderRadius: '16px' }}
        >

          <Grid container item>
            <Box
              width="100%"
              bgcolor="white"
              borderRadius="xl"
              boxShadow="xl"
              mb={6}
              sx={{ overflow: "hidden", borderRadius: '16px' }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={{
                    backgroundImage: `url(${produto?.foto_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    alignContent: 'center',
                    borderRadius: '16px',
                  }}
                >

                </Grid>
                <Grid item xs={12} lg={7}>
                  <Box component="form" p={2} method="post" sx={{ borderRadius: '16px' }}>
                    <Box px={4} py={{ xs: 2, sm: 6 }}>
                      <Typography variant="h2" mb={1} sx={{ fontWeight: 'bold' }}>
                        Você escolheu {produto?.nome}
                      </Typography>
                      <Typography variant="body1" color="text" mb={2}>
                        {produto?.descricao}
                      </Typography>
                      <Box textAlign="right">
                        <Link to={`/check/${produto?.id}`}>
                          <button className='buttonProduct'> MATRICULE-SE </button>
                        </Link>
                      </Box>
                    </Box>

                    <Box pt={0.5} pb={3} px={3}>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >



                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>


        </Grid>

      </Box>

      <br></br>
      <Footer />


    </Box>
  )
} 