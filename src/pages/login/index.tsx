import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import api from '../../services/api';
import Navbar from '../../components/static/navbar';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { Flip, toast } from 'react-toastify'
import { flip } from '@popperjs/core';



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
  }, [token])

  async function handleLogin(data: FormValues) {
    try {
      const response = await api.post('auth/login', data);

      setToken(response.data.token);

      toast.success('Usuário logado com sucesso', {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
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
            autoClose: 2000,
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
    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height: "100vh" }} className="imagem">

      <Navbar />

      <Grid xs={6}>

      </Grid>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
            <TextField {...register('email')} id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
            <TextField {...register('senha')} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Button type='submit' variant='contained' color='primary'>
                Logar
              </Button>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
            </Box>
            <Link to="/register">
              <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

    </Grid>
  );
}

export default Login;