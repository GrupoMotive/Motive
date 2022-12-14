import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@material-ui/icons";
import './style.css'

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

        <Grid container
          justifyContent="center"
          alignItems="center">



          <Grid item xs={3} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div id='membros'>
              <div className="membro">
                <img width={150} height={150} src='./images/Brunoo.jpg' />


                <h2> Bruno Pina </h2>
                <div className="social-media">
                  <a href="https://github.com/Pina98 ">
                  <GitHub color="primary" /> 
                  </a>
                  <a href="https://www.linkedin.com/in/brunopinatrotta/ ">
                  <LinkedIn />
                  </a>

                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={3} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div id='membros'>
              <div className="membro">
                <img width={150} height={150} src='./images/Erika.png' />


                <h2> Erika Beatriz </h2>
                <div className="social-media">
                  <a href="https://github.com/ErikaBeatrizz">
                  <GitHub  color="primary" />
                  </a>
                  <a href= "https://www.linkedin.com/in/erikabeatrizf/">
                  <LinkedIn />
                  </a>

                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={3} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div id='membros'>
              <div className="membro">
                <img width={150} height={150} src='./images/Ygor.jpg' />


                <h2> Igor Lima </h2>
                <div className="social-media">
                <a href="https://github.com/igor02b1">
                  <GitHub  color="primary" />
                  </a>
                  <a href= "https://www.linkedin.com/in/igor-de-lima-da-silva-a40770244/">
                  <LinkedIn />
                  </a>

                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={3} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div id='membros'>
              <div className="membro">
                <img width={150} height={150} src='./images/Mauricio.jpg' />


                <h2> Mauricio Carvalho </h2>
                <div className="social-media">
                <a href="https://github.com/CarvalhoZD">
                  <GitHub  color="primary" />
                  </a>
                  <a href= "https://www.linkedin.com/in/mauriciocarvalhojb/">
                  <LinkedIn />
                  </a>

                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={4} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div id='membros'>
              <div className="membro">
                <img width={150} height={150} src='./images/Nat.jpg' />


                <h2> Natalia Nery </h2>
                <div className="social-media">
                <a href="https://github.com/NataliaNery14">
                  <GitHub  color="primary" />
                  </a>
                  <a href= "https://www.linkedin.com/in/nat%C3%A1lia-dos-santos-nery-897a72248/">
                  <LinkedIn />
                  </a>

                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={4} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div id='membros'>
              <div className="membro">
                <img width={150} height={150} src='./images/Wallace.jpg' />


                <h2> Wallace Araujo </h2>
                <div className="social-media">
                  
                <a href="https://github.com/WallaceArauj">
                  <GitHub  color="primary" />
                  </a>
                  <a href= "https://www.linkedin.com/in/wallacearaujo27/">
                  <LinkedIn />
                  </a>

                </div>
              </div>
            </div>
          </Grid>

         <Grid item xs={4} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div id='membros'>
              <div className="membro">
                <img width={150} height={150} src='./images/Wesley.jpg' />


                <h2> Weslley Matos </h2>
                <div className="social-media">
                  
                <a href="https://github.com/Leeymattos">
                  <GitHub  color="primary" />
                  </a>

                  <a href= "https://www.linkedin.com/in/weslley-matos-b267651b1/">
                  <LinkedIn />
                  </a>

                </div>
              </div>
            </div>
          </Grid>


        </Grid>

      </Box>

    </Box>
  )
} 