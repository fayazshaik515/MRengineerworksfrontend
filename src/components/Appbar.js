import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu'; 
import Drawer from '@mui/material/Drawer'; 

const MyAppBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShow(false); 
    } else {
      setShow(true); 
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'My Works', path: '/my-works' },
    { text: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          height: '70px', 
          backgroundColor: '#232f3e', 
          backdropFilter: 'blur(10px)', 
          transition: 'transform 0.3s ease-in-out',
          transform: show ? 'translateY(0)' : 'translateY(-100%)' 
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={logo} 
              alt="Logo"
              style={{ width: '120px', height: 'auto', marginRight: '20px' }} 
            />
          </Typography>
          <Container sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Box sx={{ fontFamily: 'Verdana, sans-serif', display: 'flex', gap: 4 }}>
              {menuItems.map(item => (
                <Link key={item.text} to={item.path} style={{ textDecoration: 'none' }}>
                  <Button sx={{ color: 'white' }}>{item.text}</Button>
                </Link>
              ))}
            </Box>
          </Container>
          <IconButton 
            edge="end" 
            color="inherit" 
            sx={{ display: { xs: 'flex', md: 'none' } }} 
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems.map(item => (
            <Link key={item.text} to={item.path} style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black', width: '100%', justifyContent: 'flex-start' }}>
                {item.text}
              </Button>
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default MyAppBar;
