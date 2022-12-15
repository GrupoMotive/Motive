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
    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height: "100vh" }} className="imagem2">

      <Grid xs={6} alignSelf='flex-start'>
        <Link to='/'>
          <img src="./images/logo.png" alt="" className='logoImagem1' />
        </Link>
      </Grid>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
          <form onSubmit={handleSubmit(handleLogin)} className="box-login">
            <Typography variant='h3' gutterBottom component='h3' align='center' sx={{ color: "#0DCA70", fontSize: "24px", fontWeight: 'bold', }}>LOGIN</Typography>
            <TextField {...register('email')} id='email' label='Email' variant='filled' name='email' margin='normal' color='green' fullWidth className='campo' inputProps={{ style: { color: "#efeeee" } }} />
            <TextField {...register('senha')} id='senha' label='Senha' variant='filled' name='senha' margin='normal' type='password' color='green' fullWidth className='campo' inputProps={{ style: { color: "#efeeee" } }} />
            <Box marginTop={2} textAlign='center'>
              <Button type='submit' variant='contained' color='primary' className='botão-login' sx={{ backgroundColor: "#0DCA70", border: '1px solid #0DCA70', width: "251px", ":hover": { backgroundColor: "#000", border: '1px solid #0DCA70' } }}>
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
          </form>
        </Box>
      </Grid>

    </Grid>
  );
}

export default Login;