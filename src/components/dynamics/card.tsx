import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

interface CardProps {
  titulo: string,
  descricao_breve: string,
  foto_url: string
  id: string
}

export default function MediaCard({ titulo, descricao_breve, foto_url, id }: CardProps) {
  return (
    <Card sx={{ maxWidth: 450, backgroundColor: "rgba(1, 255, 132, 0.877)" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={`${foto_url}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold" fontSize={24}>
          {titulo.toLocaleUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.primary" fontSize={16}>
          {descricao_breve}
        </Typography>
      </CardContent>

      <CardActions sx={{}}>
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
    </Card>
  );
}