// components/Projects.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Tooltip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Task Management App',
    description: 'O Task Management App é um aplicativo fullstack que demonstra o uso de tecnologias modernas para gerenciar projetos e tarefas. Utilizando React para o frontend, NestJS para a API, PostgreSQL para o banco de dados e Docker para conteinerização, o projeto busca uma solução escalável e eficiente. A aplicação inclui autenticação com JWT, cache com Redis e uma interface interativa com drag-and-drop para o Kanban board.',
    github: 'https://github.com/Sub-Dev/task-management-app',
    demo: '',
    image: '/img/taskmanagement.png',
  },
  {
    title: 'Rock, Paper, Scissors Game',
    description: 'Um jogo de Pedra, Papel e Tesoura interativo, desenvolvido com React.js, HTML e CSS. Utiliza armazenamento local para salvar as pontuações do usuário.',
    github: 'https://github.com/Sub-Dev/Rock-Paper-Scissors',
    demo: 'https://sub-dev.github.io/Rock-Paper-Scissors/',
    image: '/img/rockpaperscissor.png',
  },
  {
    title: 'Clone Netflix UI',
    description: 'Este projeto é uma réplica detalhada da interface de usuário do Netflix, desenvolvida para mostrar habilidades em front-end com HTML, CSS e JavaScript, utilizando a biblioteca React.js.',
    github: 'https://github.com/Sub-Dev/clone-netflix-ui',
    demo: 'https://sub-dev.github.io/clone-netflix-ui/',
    image: '/img/netflixuiclone.png',
  },
  {
    title: 'Blizzard Landing Page',
    description: 'Este projeto é uma landing page responsiva, desenvolvida para o desafio da BRChallenges, que destaca os principais jogos da Blizzard de forma dinâmica e envolvente.',
    github: 'https://github.com/Sub-Dev/blizzard-br-challenges',
    demo: 'https://sub-dev.github.io/blizzard-br-challenges/',
    image: '/img/blizzardBRChallenge.png',
  },
];

const Projects = () => {
  return (
    <Box sx={{ padding: '2rem', borderRadius: '8px', margin: '0 auto', maxWidth: '1200px' }}>
      <Typography variant="h4" sx={{ marginBottom: '2rem', fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
        Projetos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              backgroundColor: '#333', color: '#fff', height: '100%', transition: 'transform 0.3s ease-in-out', '&:hover': {
                transform: 'scale(1.03)',
              },
            }}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#e0e0e0' }}> {/* Cor mais visível */}
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Repositório GitHub" arrow>
                  <IconButton size="small" href={project.github} target="_blank" rel="noopener" sx={{ color: '#ffcc00' }}>
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                {project.demo && (
                  <Tooltip title="Demo" arrow>
                    <IconButton size="small" href={project.demo} target="_blank" rel="noopener" sx={{ color: '#ffcc00' }}>
                      <LaunchIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
