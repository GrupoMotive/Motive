import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Produtos from "../../models/produto";
import api from "../../services/api";
import MediaCard from "../../components/dynamics/card";
import Footer from "../../components/static/footer";
import Navbar from "../../components/static/navbar";

export default function Classes() {
  const [produtos, setProdutos] = useState<Produtos[]>([])

  async function BuscaProduto() {
    const res = await api.get('produto');
    setProdutos(res.data);
  }

  useEffect(() => {
    BuscaProduto()
  }, [produtos.length])

  return (
    <Box>
    <Box minHeight="55vh"
    width="100%"
    py={6}
    px={{ xs: 2, lg: 0 }}
    mx={-2} 
    sx={{ 
      backgroundImage: 'url(./bgaulas.jpg)',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "grid",
      placeItems: "center",
      }}>

          <Typography variant="h2" sx={{
          fontWeight: 'bold',
          color: 'white',
          paddingX: '50px'

        }}> Aulas
        
          </Typography>

      <Navbar />

      <Grid container sx={{ width: '90%' }}>
        {produtos.map(produto => (
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', marginY: "10px" }}>
            <MediaCard titulo={produto.nome} local={produto.local} key={produto.id} />
          </Grid>
        ))}
      </Grid>

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

        <Typography variant="subtitle1" sx={{
          fontWeight: 'bold',
          padding: '30px',
        }}
        >
          <h2> Quem somos </h2>
          <Divider color="#0DCA70" sx={{
            height: 4, 
            width: '100px',
            borderRadius: '5px',
          }} />


        </Typography >

        <Typography sx={{
          paddingX: '30px'
        }}>

          Somos a MOTIVE, site de saúde e bem-estar.

          Pensando no conceito prevenção, recuperação da saúde e proporcionar uma qualidade de vida melhor, saudável e acessível, resolvemos fazer algo que pudesse ocupar a ociosidade e o tempo livre da população envolvendo desde crianças, adolescentes, jovens, adultos e principalmente idosos.

          O projeto reune um site com aulas presenciais em várias cidades do Rio de Janeiro, em parques e praias, praças e espaços de lazer. Reunimos atividades físicas e práticas corporais de forma coletiva ao ar livre, com um valor simbólico e com data e horário predefinido.

          Verdadeiros pontos de encontro com o bem-estar, para que possa se exercitar no seu tempo, no seu ritmo e ao ar livre. Então é só acessar o site, fazer seu cadastro, achar a aula ou o treino que mais combina com você e começar a se exercitar! Motive!

        </Typography>

      

    </Box>
  
    < Footer />

  </Box>
  
  </Box>
  )
}
