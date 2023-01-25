import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { Flip, toast } from 'react-toastify'
import logo from '../../assets/images/WhiteLogo-Motive.png'
import backgroundImg from '../../assets/images/back.jpg'
import './Login.css';
import { Height } from '@material-ui/icons';

type FormValues = {
  email: string
  senha: string
}

function Login() {
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token));
      navigate('/')
    }
  }, [token, dispatch, navigate])

  async function handleLogin(data: FormValues) {
    try {
      const response = await api.post('auth/login', data);

      setToken(response.data.token);

      toast.success('Usuário logado com sucesso', {
        transition: Flip,
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const res = error.response;
        if (res) {
          toast.error('Senha ou e-mail incorretos', {
            transition: Flip,
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
          });

        }
      }
      console.log(error);
    }
  }

  return (
    <Grid container sx={{
      backgroundImage: { xs: 'none', sm: `url(${backgroundImg})` },
      backgroundColor: '#212121',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Grid item sx={{
        position: 'absolute',
        top: 5,
        left: 0,
        height: { xs: 40, sm: 45, md: 64 }
      }} >
        <Link to='/'>
          <img src={logo} alt="Logo Motive" className='logo-login' />
        </Link>
      </Grid>

      <Grid item xs={12} sx={{
        px: { xs: 1 },
        height: '65%'
      }} >

        <Box component="form" onSubmit={handleSubmit(handleLogin)} sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#000000',
          borderRadius: '10px',
          px: { xs: 1 }
        }}>
          <Typography gutterBottom component='h3'
            sx={{
              textAlign: 'center',
              mb: 3,
              color: "#0DCA70",
              fontSize: "24px",
              fontWeight: 'bold',
            }}>
            ENTRAR
          </Typography>

          <TextField {...register('email')} id='email' label='Email' variant='filled' name='email' margin='normal' autoFocus required color='green' fullWidth className='campo' inputProps={{ style: { color: "#efeeee" } }} />
          <TextField {...register('senha')} id='senha' label='Senha' variant='filled' name='senha' margin='normal' type='password' required color='green' fullWidth className='campo' inputProps={{ style: { color: "#efeeee" } }} />
          <Box marginTop={6} textAlign='center'>
            <Button type='submit' variant='contained' color='primary' className='botão-login' sx={{ backgroundColor: "#0DCA70", border: '1px solid #0DCA70', width: "100%", ":hover": { backgroundColor: "#000", border: '1px solid #0DCA70' } }}>
              Login
            </Button>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1} className='boxteste'>
                <Typography variant='subtitle1' gutterBottom align='center' className='txt3'>Não tem conta?</Typography>
              </Box>
              <Link to="/register">
                <Typography variant='subtitle1' gutterBottom align='center' className='textos2' sx={{ ":hover": { opacity: 0.9 } }}>Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Box>

      </Grid>

    </Grid>
  );
}

export default Login;