import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css';
import { Grid } from '@mui/material';

interface CardProps {
  titulo: string,
  local: string
}

export default function MediaCard({ titulo, local }: CardProps) {
  return (
    <Card className='card'>
      <CardContent className='content'>
        <Grid container justifyContent='space-between'>
          <Grid item xs={3}>
            <Typography sx={{fontWeight: "bold", marginLeft: "10px"}}gutterBottom variant="h5">
              {titulo}
            </Typography>
            <Typography sx={{fontWeight: "bold", marginLeft: "10px"}} variant="body2" color="text.secondary">
              {local}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <CardActions>
              <Button className='btn-comprar' sx={{
                backgroundColor: "black",
                color: "white",
                width: "6rem",
                fontFamily: 'monospace',
                ":hover": {backgroundColor: "black", opacity: 0.8}
              }}>Comprar</Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}