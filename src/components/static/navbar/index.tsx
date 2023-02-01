import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import whiteLogo from '../../../assets/images/WhiteLogo-Motive.png'
import Logo from '../../../assets/images/Logo-Motive.png'
import { theme } from '../../../App'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { name: "HOME", to: "/" },
  { name: 'AULAS', to: "/aulas" },
  { name: 'SOBRE', to: "/sobre" },
  { name: 'LOGIN', to: "/login" }
];

export default function Navbar(props: Props) {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [displayNavbar, setDisplayLogo] = useState('flex');

  const logout = () => {
    dispatch(addToken(''));
    toast.success('Deslogado com sucesso', {
      transition: Flip,
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate('/login')
  };

  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (displayNavbar === 'none') {
      setDisplayLogo('flex')
    } else {
      setDisplayLogo('none');
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} alignItems='center' sx={{ height: '100%' }}>

      <Box
        component="div"
        sx={{
          my: 2,
          display: { xs: 'flex' },
          justifyContent: 'center',
          height: { xs: 40, sm: 45, md: 64 },
        }}
      >
        <Link to='/'>
          <img src={Logo} alt="logo" className='logo' />
        </Link>
      </Box>
      <Divider sx={{
        mb: 2,
      }} />

      <List>
        {navItems.map((item) => {
          if (item.name === 'LOGIN' && token !== '') {
            return (
              <ListItem key={'LOGOUT'} disablePadding>
                <ListItemButton onClick={logout} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box>
                    <ListItemText primary={'LOGOUT'} sx={{
                      color: 'black',
                      px: 12
                    }} />
                  </Box>
                </ListItemButton>
              </ListItem>)
          } else {
            return (
              <ListItem key={item.name} disablePadding>
                <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to={item.to}>
                    <ListItemText primary={item.name} sx={{
                      color: 'black',
                      px: 12
                    }} />
                  </Link>
                </ListItemButton>
              </ListItem>
            )
          }

        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
        }}>
          <AppBar component="nav" color='transparent' sx={{
            display: 'flex',
            justifyContent: 'center',
            height: "80px",
            boxShadow: "none",
            position: "absolute",
          }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link to='/'>
                <Box
                  component='img'
                  alt='logo'
                  src={whiteLogo}
                  sx={{
                    display: { xs: `${displayNavbar}` },
                    height: { xs: 40, sm: 45, md: 64 }
                  }}
                />
              </Link>


              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, display: { xs: `${displayNavbar}`, sm: 'none' } }}
              >
                <MenuIcon sx={{
                  height: { xs: 40 },
                  color: '#fff'
                }} />
              </IconButton>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => {
                  if (item.name === 'LOGIN' && token !== '') {
                    return (<Button onClick={logout} sx={{
                      color: '#fff',
                      backgroundColor: "#e74c3c",
                      border: '1px solid #e74c3c',
                      borderRadius: '20px',
                      px: 3,
                      py: '4px',
                      ml: 1
                    }}>LOGOUT</Button>)
                  } else {
                    return (
                      <Link to={item.to} key={item.name}>
                        {item.name === 'LOGIN' ? (
                          <Button key={item.name} sx={{
                            color: '#fff',
                            backgroundColor: "#0DCA70",
                            border: '1px solid #0DCA70',
                            borderRadius: '20px',
                            px: 3,
                            py: '4px',
                            ml: 1
                          }}>

                            {item.name}
                          </Button>)
                          :
                          (
                            <Button key={item.name} sx={{ color: '#fff' }}>
                              {item.name}
                            </Button>
                          )}

                      </Link>
                    )
                  }
                })}
              </Box>
            </Toolbar>
          </AppBar>

          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              anchor='right'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box >
      </ThemeProvider>
    </>
  )
}