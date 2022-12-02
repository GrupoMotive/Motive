import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import api from '../../services/api';

type FormValues = {
  email: string
  senha: string
}

function Login() {
  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  async function handleLogin(data: FormValues) {
    try {
      const response = await api.post('auth/login', data);

      console.log(response)

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const res = error.response;
        if (res) {
          alert(res.data.message);
        }
      }
      console.log(error);
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height: "calc(100vh - 140px)" }}>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
            <TextField {...register('email')} id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
            <TextField {...register('senha')} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Link to='/home' className='text-decorator-none'>
                <Button type='submit' variant='contained' color='primary'>
                  Logar
                </Button>
              </Link>
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
      <Grid xs={6} className='imagem'>

      </Grid>
    </Grid>
  );
}

export default Login;