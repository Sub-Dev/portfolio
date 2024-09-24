"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

const PortfolioAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Apresentação', to: 'apresentacao' },
    { text: 'Projetos', to: 'projetos' },
    { text: 'Histórico acadêmico', to: 'historico-academico' },
    { text: 'Tecnologias', to: 'tecnologias' },
    { text: 'Contato', to: 'contato' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#464646', boxShadow: 'none', height: '40px' }}>
      <Toolbar sx={{ padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo ou nome */}
        <Typography variant="h6" sx={{
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'flex-start',
          height: '100%',
          marginBottom: '-10px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: '5px',
        }} onClick={handleScrollToTop}>
          Anthony Marin (Sub-Dev) - Full Stack Developer
        </Typography>

        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box display={{ xs: 'none', md: 'flex' }} flexDirection="row" justifyContent="flex-end" alignItems="center">
          {menuItems.map((item) => (
            <ScrollLink key={item.text} to={item.to} smooth={true} duration={500}>
              <Button
                color="inherit"
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  minHeight: '40px',
                  marginBottom: '20px',
                  padding: '0 20px',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '2px',
                  '&:hover': {
                    backgroundColor: '#616161',
                    transform: 'scale(1.05)',
                    transition: 'background-color 0.3s, transform 0.3s',
                  },
                }}
              >
                {item.text}
              </Button>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: '#464646', height: '100%' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {menuItems.map((item) => (
            <ScrollLink key={item.text} to={item.to} smooth={true} duration={500}>
              <Button
                fullWidth
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  padding: '8px',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#616161',
                    transition: 'background-color 0.3s',
                  },
                }}
              >
                {item.text}
              </Button>
            </ScrollLink>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default PortfolioAppBar;
