import React from "react";
import { Box, Typography } from "@mui/material";
import { height } from "@mui/system";


export default function About() {

  const email = localStorage.getItem("token")
  console.log(email);

  return (
    <Box>
      <Box sx={{
        backgroundImage: 'url(./yog.jpg)',
        height: '350px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left'

      }}>
        <Typography variant="h2" sx={{
          fontWeight: 'bold',
          color: 'white',
          paddingX: '50px'

        }}>
          Somos a Motive!
        </Typography>
      </Box>

      <Box sx={{
        paddingX: '40px'
      }}> 

      <Typography variant="subtitle1" sx={{
        fontWeight: 'bold',
        padding: '30px'
      }}
      >
        Quem somos

      </Typography >


      <Typography sx={{
        paddingX: '30px'
      }}>

        Somos a MOTIVE, site de saúde e bem-estar.

        Pensando no conceito prevenção, recuperação da saúde e proporcionar uma qualidade de vida melhor, saudável e acessível, resolvemos fazer algo que pudesse ocupar a ociosidade e o tempo livre da população envolvendo desde crianças, adolescentes, jovens, adultos e principalmente idosos.

        O projeto reune um site com aulas presenciais em várias cidades do Rio de Janeiro, em parques e praias, praças e espaços de lazer. Reunimos atividades físicas e práticas corporais de forma coletiva ao ar livre, com um valor simbólico e com data e horário predefinido.

        Verdadeiros pontos de encontro com o bem-estar, para que possa se exercitar no seu tempo, no seu ritmo e ao ar livre. Então é só acessar o site, fazer seu cadastro, achar a aula ou o treino que mais combina com você e começar a se exercitar! Motive!

      </Typography>

      <Typography variant="subtitle1" sx={{
        fontWeight: 'bold',
        padding: '30px'
      }}> Conceito  </Typography >

      <Typography sx={{
        paddingX: '30px'
      }}>
        Projeto desenvolvido sobre a ODS 3 da ONU, com o propósito de transformar cidades em espaços de bem-estar, e com a desafiadora missão de como fazer um mundo melhor até 2030.
      </Typography>

      <Typography variant="subtitle1" sx={{
        fontWeight: 'bold',
        padding: '30px'
      }}> Colaboradores
      </Typography >

    </Box> 

    </Box>
  )
} 