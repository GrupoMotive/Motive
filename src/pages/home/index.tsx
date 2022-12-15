import React, { useEffect, useState } from "react";
import { Box, colors, Grid, Typography } from "@mui/material";
import api from "../../services/api";
import Produtos from "../../models/produto";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import Navbar from "../../components/static/navbar";
import './Home.css'
import Footer from "../../components/static/footer";
import { margin } from "@mui/system";
import { FormatAlignJustify } from "@material-ui/icons";

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
    <Box className="imagemHome">
      <Navbar />
      <Grid container xs={12} justifyContent='center' alignItems='center'  >
        <Grid item xs={8} display='flex' flexDirection='column' justifyContent='center' className="animationfade" >

          <Typography sx={{ fontWeight: 'bold', fontSize: '65px', }} className='h1' lineHeight='100%' align="center" >
            VOCÊ MAIS <span style={{ color: '#0DCA70', }}>SAUDÁVEL</span> <br /> COM ATIVIDADES AO AR LIVRE.
          </Typography>

          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', paddingTop: '10px' }} className='h3' align="center" >
            Atividades físicas e esportes em geral são a melhor forma de cuidar da saúde.
            Motivamos você a se exercitar!
          </Typography>


        </Grid>

      </Grid>

      <Box display='flex' justifyContent='column' >
        <Typography sx={{ fontWeight: 'bold', fontSize: '100px', paddingTop: '10px' }} className=''>


        </Typography>
      </Box>

      <Footer />
    </Box>



  );


}
