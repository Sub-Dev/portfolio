"use client";
import React from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const handleDownloadResume = () => {
    window.open('/curriculo2024.pdf', '_blank');
  };

  return (
    <Box
      sx={{
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: '2rem', fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
      >
        Contato
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <IconButton href="mailto:bilomarin@gmail.com" color="primary">
            <EmailIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <Typography sx={{ color: '#fff' }}>bilomarin@gmail.com</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <IconButton href="https://github.com/Sub-Dev" target="_blank" color="primary">
            <GitHubIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <Typography sx={{ color: '#fff' }}>GitHub</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <IconButton href="https://www.linkedin.com/in/anthonymarin-desenvolvedor/" target="_blank" color="primary">
            <LinkedInIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <Typography sx={{ color: '#fff' }}>LinkedIn</Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleDownloadResume}
            sx={{
              marginTop: '1rem',
              backgroundColor: '#ffcc00',
              color: '#252526',
              '&:hover': {
                backgroundColor: '#e0b800',
              },
            }}
          >
            Baixar Currículo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
