import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Grid, ListItemIcon } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import VerifiedIcon from '@mui/icons-material/Verified';
import CodeIcon from '@mui/icons-material/Code';

const AcademicHistory = () => {
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
        Histórico Acadêmico & Cursos
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Histórico Acadêmico */}
        <Grid item xs={12} md={12}>
          <Box sx={{ textAlign: 'left', color: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffcc00' }}>
              Formação Acadêmica
            </Typography>
            <Divider sx={{ marginY: '1rem', backgroundColor: '#ffcc00' }} />
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Bacharelado em Sistemas de Informação"
                  secondary="Ulbra, Universidade Luterana do Brasil | Jan. de 2015 - Dez. de 2020"
                  secondaryTypographyProps={{ style: { color: '#b0bec5' } }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalLibraryIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText
                  primary="TCC: Desenvolvimento de um protótipo com Arduino para detecção de enchentes"
                  secondary="Tecnologias: Node.js, Firebase, Johnny-Five, Sensores"
                  secondaryTypographyProps={{ style: { color: '#b0bec5' } }}
                />
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Cursos */}
        <Grid item xs={12} md={12}>
          <Box sx={{ textAlign: 'left', color: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffcc00' }}>
              Cursos & Certificações
            </Typography>
            <Divider sx={{ marginY: '1rem', backgroundColor: '#ffcc00' }} />
            <List dense>
              {/* Cursos organizados por data */}
              <ListItem>
                <ListItemIcon>
                  <CodeIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Web Design: Construa Sites com PHP, HTML, CSS e JavaScript" secondary="Udemy | Setembro de 2020" secondaryTypographyProps={{ style: { color: '#b0bec5' } }} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CodeIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Desenvolvimento Web com PHP e Banco de Dados MySQL" secondary="Udemy | Setembro de 2020" secondaryTypographyProps={{ style: { color: '#b0bec5' } }} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Ustart - Capacitação para Desenvolvedores Júnior" secondary="Umentor | Outubro de 2022" secondaryTypographyProps={{ style: { color: '#b0bec5' } }} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Certificado de autoridade: Git" secondary="DevMedia | Setembro de 2022" secondaryTypographyProps={{ style: { color: '#b0bec5' } }} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Certificado de autoridade: HTML" secondary="DevMedia | Outubro de 2022" secondaryTypographyProps={{ style: { color: '#b0bec5' } }} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Certificado de autoridade: CSS" secondary="DevMedia | Outubro de 2022" secondaryTypographyProps={{ style: { color: '#b0bec5' } }} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CodeIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Back End Development and APIs" secondary="freeCodeCamp | Julho de 2024" secondaryTypographyProps={{ style: { color: '#b0bec5' } }} />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AcademicHistory;
