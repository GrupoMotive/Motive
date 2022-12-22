import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@material-ui/icons";
import Navbar from "../../components/static/navbar";
import Footer from "../../components/static/footer";
import Bruno from '../../assets/images/Brunoo.jpg'
import Erika from '../../assets/images/Erika.png'
import Mauricio from '../../assets/images/Mauricio.jpg'
import Nat from '../../assets/images/Nat.jpg'
import Wallace from '../../assets/images/Wallace.jpg'
import Ygor from '../../assets/images/Ygor.jpg'
import Weslley from '../../assets/images/Wesley.jpg'
import bgSobre from '../../assets/images/yog.jpg'
import './style.css'

export default function About() {

  const email = localStorage.getItem("token")
  console.log(email);

  return (
    <Box>
      <Box minHeight="55vh"
        width="100%"
        py={6}
        px={{ xs: 2, lg: 0 }}
        sx={{
          backgroundImage: `url(${bgSobre})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>

        < Navbar />

        <Typography variant="h2" sx={{
          fontWeight: 'bold',
          color: 'white',
          paddingX: '50px',
        }}>
          Somos a Motive!
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

        <Typography variant="subtitle1" sx={{
          fontWeight: 'bold',
          padding: '30px'
        }}> <h2> Conceito </h2>

          <Divider color="#0DCA70" sx={{
            height: 4,
            width: '100px',
            borderRadius: '5px',
          }} />

        </Typography >

        <Typography sx={{
          paddingX: '30px'
        }}>
          Projeto desenvolvido sobre a ODS 3 da ONU, com o propósito de transformar cidades em espaços de bem-estar, e com a desafiadora missão de como fazer um mundo melhor até 2030.
        </Typography>

        <Typography variant="subtitle1" sx={{
          fontWeight: 'bold',
          padding: '30px'
        }}>  <h2> Colaboradores </h2>

          <Divider color="#0DCA70" sx={{
            height: 4,
            width: '100px',
            borderRadius: '5px',
          }} />

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
                <img width={150} height={150} src={Bruno} alt='Foto do colaborador Bruno' />
                
                <h2 style={{ paddingTop: "5px" }}> Bruno Pina </h2>
                
                <div className="social-media">
                  <a href="https://github.com/Pina98 " target="_blank">
                    <GitHub htmlColor="white" />
                  </a>
                  <a href="https://www.linkedin.com/in/brunopinatrotta/ " target="_blank">
                    <LinkedIn  htmlColor="white"/>
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
                <img width={150} height={150} src={Erika} alt='Foto da colaboradora Erika' />


                <h2 style={{ paddingTop: "5px" }} > Erika Beatriz </h2>
                <div className="social-media">
                  <a href="https://github.com/ErikaBeatrizz" target="_blank">
                    <GitHub  htmlColor="white" />
                  </a>
                  <a href="https://www.linkedin.com/in/erikabeatrizf/" target="_blank">
                    <LinkedIn  htmlColor="white" />
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
                <img width={150} height={150} src={Ygor} alt='Foto do colaborador Ygor' />


                <h2 style={{ paddingTop: "5px" }} > Igor Lima </h2>
                <div className="social-media">
                  <a href="https://github.com/igor02b1" target="_blank">
                    <GitHub  htmlColor="white" />
                  </a>
                  <a href="https://www.linkedin.com/in/igor-de-lima-da-silva-a40770244/" target="_blank">
                    <LinkedIn  htmlColor="white" />
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
                <img width={150} height={150} src={Mauricio} alt='Foto do colaborador Mauricio' />

                <h2 style={{ paddingTop: "5px" }} > Mauricio Carvalho </h2>
                <div className="social-media">
                  <a href="https://github.com/CarvalhoZD" target="_blank">
                    <GitHub  htmlColor="white" />
                  </a>
                  <a href="https://www.linkedin.com/in/mauriciocarvalhojb/" target="_blank">
                    <LinkedIn  htmlColor="white" />
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
                <img width={150} height={150} src={Nat} alt='Foto da colaborada Natália' />


                <h2 style={{ paddingTop: "5px" }} > Natalia Nery </h2>
                <div className="social-media">
                  <a href="https://github.com/NataliaNery14" target="_blank">
                    <GitHub  htmlColor="white" />
                  </a>
                  <a href="https://www.linkedin.com/in/nat%C3%A1lia-dos-santos-nery-897a72248/" target="_blank">
                    <LinkedIn  htmlColor="white" />
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
                <img width={150} height={150} src={Wallace} alt='Foto do colaborador Wallace' />


                <h2 style={{ paddingTop: "5px" }} > Wallace Araujo </h2>
                <div className="social-media">

                  <a href="https://github.com/WallaceArauj" target="_blank">
                    <GitHub  htmlColor="white" />
                  </a>
                  <a href="https://www.linkedin.com/in/wallacearaujo27/" target="_blank">
                    <LinkedIn  htmlColor="white" />
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
                <img width={150} height={150} src={Weslley} alt='Foto do colaborador Weslley' />


                <h2 style={{ paddingTop: "5px" }} > Weslley Matos </h2>
                <div className="social-media">

                  <a href="https://github.com/Leeymattos" target="_blank">
                    <GitHub  htmlColor="white" />
                  </a>

                  <a href="https://www.linkedin.com/in/weslley-matos-b267651b1/" target="_blank">
                    <LinkedIn  htmlColor="white" />
                  </a>

                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
} 