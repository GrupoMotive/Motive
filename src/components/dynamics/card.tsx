import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface CardProps {
  titulo: string,
  local: string
}

export default function MediaCard({ titulo, local }: CardProps) {
  return (
    <Card className='card'>
      <CardContent className='content' sx={{ height: "35%" }}>
        <Grid container sx={{ justifyContent: 'space-between', alignItems: "center" }}>
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px" }} color="#000">
              {titulo}
            </Typography>
            <Typography sx={{ marginLeft: "10px", width: "100%", height: "50px" }} variant="body2" color="#000">
              {local}
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
