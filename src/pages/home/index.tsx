import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import api from "../../services/api";
import Produtos from "../../models/produto";
import Navbar from "../../components/static/navbar";
import './Home.css'
import Footer from "../../components/static/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Weslley from '../../assets/images/Wesley.jpg'

export default function Home() {

  const [produtos, setProdutos] = useState<Produtos[]>([])

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
        <Grid item xs={8} display='flex' flexDirection='column' justifyContent='center' className="animationfade">

          <Typography sx={{ fontWeight: 'bold', fontSize: '65px', }} className='TituloHome' lineHeight='100%' align="center" >
            <br /> <br />  VOCÊ MAIS <span style={{ color: '#0DCA70', }}>SAUDÁVEL</span> <br /> COM ATIVIDADES AO AR LIVRE.
          </Typography>

          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', paddingTop: '10px' }} className='SubTituloHome' align="center" >
            Atividades físicas e esportes em geral são a melhor forma de cuidar da saúde.
            Motivamos você a se exercitar!
          </Typography>


        </Grid>

        <Box
          display='flex'
          justifyContent='center'
          margin='100px'
          padding='10px'
          className="fundo"
          borderRadius='20px'
        >

          <Carousel>

            <div className="imageCarousel">
              <img src={Weslley} alt="weslley" />
              <p className="legend ">A vida em um constante movimento</p>
            </div>
            <div className="imageCarousel">
              <img src={Weslley} alt="weslley" />
              <p className="legend ">Viva a vida</p>
            </div>
            <div className="imageCarousel">
              <img src={Weslley} alt="weslley" />
              <p className="legend ">Tente não morrer vivendo</p>
            </div>
            <div className="imageCarousel">
              <img src={Weslley} alt="weslley" />
              <p className="legend ">Tente não morrer vivendo</p>
            </div>
            <div className="imageCarousel">
              <img src={Weslley} alt="weslley" />
              <p className="legend ">Tente não morrer vivendo</p>
            </div>
            <div className="imageCarousel">
              <img src={Weslley} alt="weslley" />
              <p className="legend ">Tente não morrer vivendo</p>
            </div>
          </Carousel>

        </Box>

      </Grid>

      <Footer />
    </Box>


  );


}
