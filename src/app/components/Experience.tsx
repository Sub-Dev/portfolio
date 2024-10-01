import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Grid, ListItemIcon } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import GitHubIcon from '@mui/icons-material/GitHub';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WebIcon from '@mui/icons-material/Web';
import BugReportIcon from '@mui/icons-material/BugReport';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Experience = () => {
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
        Experiência de Trabalho
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left', color: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffcc00' }}>
              Freelancer Desenvolvedor Web
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              Julho de 2021 – Abril de 2022
            </Typography>
            <Divider sx={{ marginY: '1rem', backgroundColor: '#ffcc00' }} />
            <Typography variant="body1" paragraph>
              Trabalhei em um projeto de desenvolvimento de dois websites voltados para a área de criptoativos utilizando
              as seguintes tecnologias:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="PHP Laravel, HTML, CSS, JS" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WebIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Framework Metronic (Bootstrap 5)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StorageIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Banco de dados PostgreSQL" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SecurityIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Arquitetura MVC" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FingerprintIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Sistema de Login 2FA (Autenticação de dois fatores)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <VerifiedUserIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Implementação do Google Recaptcha v3 no login" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Utilização de GitHub para controle de versões" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BugReportIcon sx={{ color: '#ffcc00' }} />
                </ListItemIcon>
                <ListItemText primary="Scrum e Kanban" />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
