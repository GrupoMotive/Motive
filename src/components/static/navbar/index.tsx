import * as React from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import whiteLogo from '../../../assets/images/WhiteLogo-Motive.png'

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
  const logout = () => {
    dispatch(addToken(''));
    toast.success('Deslogado com sucesso', {
      transition: Flip,
      position: "top-right",
      autoClose: 2000,
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
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={whiteLogo} alt="logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "80px", }}>
      <AppBar component="nav" color='transparent' sx={{ display: "flex", justifyContent: "center", height: "80px", boxShadow: "none", position: "absolute" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
          >
            <Link to='/'>
              <img src={whiteLogo} alt="logo" className='logo' />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => {
              if (item.name === 'LOGIN' && token !== '') {
                return (<Button onClick={logout} sx={{ color: '#fff' }}>LOGOUT</Button>)
              } else {
                return (
                  <Link to={item.to} key={item.name}>
                    <Button key={item.name} sx={{ color: '#fff' }}>
                      {item.name}
                    </Button>
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
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}