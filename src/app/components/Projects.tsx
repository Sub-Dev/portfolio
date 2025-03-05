"use client";
import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Tooltip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => <p>Loading carousel...</p>,
});

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
    description: 'Este projeto é uma réplica detalhada da interface de usuário do Netflix, desenvolvida para mostrar habilidades em front-end com HTML, CSS e JavaScript, utilizando a biblioteca React.js e detalhes dinâmicos obtidos através da API TMDb',
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
  {
    title: 'Portfólio Page',
    description: 'Este projeto é o da pagina de portfolio onde você esta.Foi desenvolvido com Next.js e Material UI',
    github: 'https://github.com/Sub-Dev/portfolio',
    demo: 'https://sub-dev-portfolio.vercel.app',
    image: '/img/portfolio.png',
  },
  {
    title: 'Multi-step Form Solution',
    description: 'Esta é uma solução para o Multi-step form challenge do Frontend Mentor com a utlização de Next.js e Tailwind CSS',
    github: 'https://github.com/Sub-Dev/multi-step-form-nextjs',
    demo: 'https://multi-step-form-nextjs-iota.vercel.app',
    image: '/img/multi-step-form.png',
  },
  {
    title: 'Card Game Flutter',
    description: 'Este é um jogo de cartas desenvolvido com Flutter e Flame Engine, onde o jogador e o computador se enfrentam utilizando cartas com diferentes valores de ataque, defesa e vida. O jogo inclui animações, efeitos sonoros e uma mecânica de combate simples.Foi desenvolvido com o intuito de aprender mais sobre a Flame Engine e o Flutter',
    github: 'https://github.com/Sub-Dev/card_game',
    demo: '',
    image: '/img/cardgame.png',
  },
  {
    title: 'Blog Comments API',
    description: 'Sistema de comentários para blogs usando NestJS,Docker,JWT e Swagger',
    github: 'https://github.com/Sub-Dev/blog-comments-api-nestjs',
    demo: '',
    image: '/img/blogcomments.png',
  },
  {
    title: 'American-British Translator',
    description: 'Projeto para traduzir textos entre inglês americano e britânico utilizando Express,Mocha,Chai e Nodejs',
    github: 'https://github.com/Sub-Dev/freecodecamp_american-british-english-translator',
    demo: '',
    image: '/img/blogpost-freecodecamplogo.jpg',
  },
  {
    title: 'Sudoku Solver',
    description: 'Resolve e valida puzzles de Sudoku usando JavaScript.',
    github: 'https://github.com/Sub-Dev/freecodecamp_sudoku-solver',
    demo: '',
    image: '/img/blogpost-freecodecamplogo.jpg',
  },
  {
    title: 'Biblioteca de Livros',
    description: 'Um aplicativo Full Stack JavaScript para gerenciamento de uma biblioteca de livro',
    github: 'https://github.com/Sub-Dev/freecodecamp_library',
    demo: '',
    image: '/img/blogpost-freecodecamplogo.jpg',
  },

];
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '-5%',
        zIndex: 2
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        left: '-5%',
        zIndex: 2
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />
    </div>
  );
}


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, arrows: false, autoplaySpeed: 2000 },
      },
    ],
  };

  return (
    <>
      <style jsx global>{`
        .slick-prev:before,
        .slick-next:before {
          display: none;
        }

        .slick-dots li button:before {
          color: white !important;
          font-size: 12px !important;
        }

        .slick-dots li.slick-active button:before {
          color: white !important;
        }

        .slick-dots {
          bottom: -20%; 
        }

        @media (max-width: 600px) {
          .slick-dots {
            margin-top: 30px; 
          }
        }
      `}</style>
      <Box sx={{ padding: '2rem', margin: '0 auto', maxWidth: '1200px' }}>
        <Typography variant="h4" sx={{ marginBottom: '2rem', fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
          Projetos
        </Typography>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Box key={index} sx={{ padding: '0 8px' }}>
              <Card sx={{
                backgroundColor: 'transparent',
                color: '#fff',
                height: '500px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.4)',
                },
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: '200px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Tooltip title="Repositório GitHub" arrow>
                    <IconButton size="small" href={project.github} target="_blank" rel="noopener" sx={{ color: '#ffcc00', transition: 'color 0.3s ease', '&:hover': { color: '#fff' } }}>
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                  {project.demo && (
                    <Tooltip title="Demo" arrow>
                      <IconButton size="small" href={project.demo} target="_blank" rel="noopener" sx={{ color: '#ffcc00', transition: 'color 0.3s ease', '&:hover': { color: '#fff' } }}>
                        <LaunchIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </CardActions>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Projects;