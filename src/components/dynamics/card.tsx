import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface CardProps {
  titulo: string,
  valor: number,
  foto_url: string
  id: string
}

export default function MediaCard({ titulo, valor, foto_url, id }: CardProps) {
  return (
    <Card sx={{
      background: `url(${foto_url})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      height: 250,
      width:"100%",
      display: "flex",
      alignItems: 'flex-end',
      maxWidth: 550
    }}>
      <CardContent sx={{
        height:90,
        backgroundColor: "rgba(1, 255, 132, 0.877)",
        width: "100%",
        padding: "0px",
      }}>
        <Grid container sx={{ justifyContent: 'space-around', alignItems: "center" }}>
          <Grid item xs={4}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px", marginRight:"10px", marginTop: "5px" }} color="#000">
              {titulo.toUpperCase()}
            </Typography>

            <Typography sx={{ marginLeft: "10px", width: "100%", height: "50px", marginTop: "10px", fontSize: "18px" }} color="#000">
              {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                .format(valor)}
            </Typography>
          </Grid>
          <Grid item xs={4} >
            <CardActions>
              <Link to={`/produto/${id}`}>
                <Button sx={{
                  backgroundColor: "black",
                  color: "white",
                  width: "8rem",
                  transition: "0.2s all",
                  borderRadius: "20px",
                  ":hover": { backgroundColor: "#191919" }
                }}>Saiba mais</Button>
              </Link>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}