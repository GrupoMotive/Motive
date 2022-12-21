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
}

export default function MediaCard({ titulo, valor, foto_url }: CardProps) {
  return (
    <Card sx={{
      background: `url(${foto_url})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      height: "16rem",
      display: "flex",
      alignItems: "flex-end",
    }}>
      <CardContent sx={{
        height: "35%",
        backgroundColor: "rgba(1, 255, 132, 0.877)",
        width: "100%",
        padding: "0px",
      }}>
        <Grid container sx={{ justifyContent: 'space-between', alignItems: "center" }}>
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px" }} color="#000">
              {titulo}
            </Typography>
            <Typography sx={{ marginLeft: "10px", width: "100%", height: "50px" }} variant="body2" color="#000">
              R${valor}
            </Typography>
          </Grid>
          <Grid item xs={4} >
            <CardActions>
              <Link to="/produto">

                <Button className='btn-comprar' sx={{
                  backgroundColor: "black",
                  color: "white",
                  width: "8rem",
                  fontFamily: 'monospace',
                  transition: "0.2s all",
                  ":hover": { backgroundColor: "#030303" }
                }}>Comprar</Button>
              </Link>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
