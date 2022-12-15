import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import api from "../../services/api";
import Produtos from "../../models/produto";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import Navbar from "../../components/static/navbar";
import './Home.css'
import Footer from "../../components/static/footer";

export default function Home() {

  const [produtos, setProdutos] = useState<Produtos[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  async function BuscaProduto() {
    const res = await api.get('produto');
    setProdutos(res.data);
  }

  useEffect(() => {
    BuscaProduto()
  }, [produtos.length])

  return (
    
    <Box sx={{ height: "calc(100vh - 140px)" }}>
      <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height: "100vh" }} className="imagemHome">
      <Navbar />
    </Grid>
    <Footer />
    </Box>
  
    
    
  );


}

