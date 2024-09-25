"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Collapse } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TriangleIcon from '@mui/icons-material/Warning';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const PortfolioHeader = () => {
  const [openSrc, setOpenSrc] = useState(true);
  const [openComponents, setOpenComponents] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpenComponents(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      id="apresentacao"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        height: '95vh',
        backgroundColor: '#1e1e1e',
        color: 'white',
        fontFamily: '"Courier New", Courier, monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Barra Lateral */}
      <Box
        sx={{
          width: { xs: '100%', sm: '250px' },
          backgroundColor: '#252526',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Título da barra lateral */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>Portfolio</Typography>

        {/* Pasta src */}
        <Typography
          variant="body2"
          sx={{ mb: 1, cursor: 'pointer', color: 'cyan', '&:hover': { textDecoration: 'underline' } }}
          title="Clique para abrir a pasta src"
          onClick={() => setOpenSrc(!openSrc)}
        >
          <span role="img" aria-label="folder">{openSrc ? '📂' : '📁'}</span> src <span style={{ marginLeft: '5px', color: 'white' }}>{openSrc ? '▼' : '▶️'}</span>
        </Typography>
        <Collapse in={openSrc}>
          <Box sx={{ pl: 2 }}>
            {/* Pasta components */}
            <Typography
              variant="body2"
              sx={{ mb: 1, cursor: 'pointer', color: 'lightgreen', '&:hover': { textDecoration: 'underline' } }}
              title="Clique para abrir a pasta components"
              onClick={() => setOpenComponents(!openComponents)}
            >
              <span role="img" aria-label="folder">{openComponents ? '📂' : '📁'}</span> components <span style={{ marginLeft: '5px', color: 'white' }}>{openComponents ? '▼' : '▶️'}</span>
            </Typography>
            <Collapse in={openComponents}>
              <Link href="#apresentacao">
                <Typography variant="body2" sx={{ mb: 1, color: 'white', pl: 4, '&:hover': { textDecoration: 'underline' } }}>
                  apresentação.js
                </Typography>
              </Link>
              <Link href="#projetos">
                <Typography variant="body2" sx={{ mb: 1, color: 'white', pl: 4, '&:hover': { textDecoration: 'underline' } }}>
                  projetos.js
                </Typography>
              </Link>
              <Link href="#historico-academico">
                <Typography variant="body2" sx={{ mb: 1, color: 'white', pl: 4, '&:hover': { textDecoration: 'underline' } }}>
                  historico-academico.js
                </Typography>
              </Link>
              <Link href="#experiencia">
                <Typography variant="body2" sx={{ mb: 1, color: 'white', pl: 4, '&:hover': { textDecoration: 'underline' } }}>
                  experiencia.js
                </Typography>
              </Link>
              <Link href="#tecnologias">
                <Typography variant="body2" sx={{ mb: 1, color: 'white', pl: 4, '&:hover': { textDecoration: 'underline' } }}>
                  tecnologias.js
                </Typography>
              </Link>
              <Link href="#contato">
                <Typography variant="body2" sx={{ mb: 1, color: 'white', pl: 4, '&:hover': { textDecoration: 'underline' } }}>
                  contato.js
                </Typography>
              </Link>
            </Collapse>
          </Box>
        </Collapse>

        {/* Outras pastas sem arquivos */}
        <Typography variant="body2" sx={{ mb: 1, color: 'yellow' }}>
          <span role="img" aria-label="folder">📁</span> styles <span style={{ marginLeft: '5px', color: 'white' }}>▶️</span>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, color: 'orange' }}>
          <span role="img" aria-label="folder">📁</span> pages <span style={{ marginLeft: '5px', color: 'white' }}>▶️</span>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, color: 'magenta' }}>
          <span role="img" aria-label="folder">📁</span> public <span style={{ marginLeft: '5px', color: 'white' }}>▶️</span>
        </Typography>
      </Box>

      {/* Conteúdo Principal */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          position: 'relative',
          top: { xs: '0', sm: '-10%' },
          left: { xs: '0', sm: '-10%' },
        }}
      >
        {/* Foto de perfil */}
        <Avatar
          alt="Anthony Marin (Sub-Dev)"
          src="/img/eu.png"
          sx={{ width: { xs: 100, sm: 150 }, height: { xs: 100, sm: 150 }, mb: 3 }}
        />

        {/* Nome */}
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          Olá, Eu sou Anthony Marin (Sub-dev)
        </Typography>

        {/* Animação de digitação */}
        <Typography variant="h5" sx={{ whiteSpace: 'pre', fontWeight: 'bold', letterSpacing: '0.05em', textAlign: 'center' }}>
          <Typewriter
            words={['console.log("Desenvolvedor Full Stack");', 'Desenvolvedor Full Stack', 'console.log("Desenvolvedor Web");', 'Desenvolvedor Web', 'if (gostoTecnologia) {', '  aprender();', '}']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Typography>
      </Box>

      {/* Barra de Status */}
      <Box
        sx={{
          backgroundColor: '#007acc',
          color: 'white',
          padding: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: '0', // Coloca na parte inferior da tela
          left: 0,
          right: 0,
          height: { xs: '40px', sm: '30px' }, // Ajusta a altura da barra para ser mais fina
        }}
      >
        {/* Parte do feature */}
        <Typography variant="body2" sx={{ display: { xs: 'flex', sm: 'flex' }, alignItems: 'center' }}>
          <AccountTreeIcon sx={{ color: 'white', marginRight: '8px', fontSize: '1.2rem' }} />
          <Typography variant="body2" component="span" sx={{ color: 'white' }}>
            feature/portfolio-apresentação
          </Typography>
        </Typography>

        <Link href="https://github.com/Sub-Dev" passHref>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <GitHubIcon sx={{ color: 'white', marginRight: '2px', fontSize: '1.2rem' }} />
            <Typography variant="body2" sx={{ color: 'white', textDecoration: 'underline', display: { xs: 'none', sm: 'flex' } }}>
              Git
            </Typography>
          </Box>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', display: { xs: 'none', sm: 'flex' } }}>
          <ErrorOutlineIcon sx={{ color: 'white', marginRight: '2px', fontSize: '1.2rem' }} />
          <Typography variant="body2" sx={{ color: 'white', marginRight: '4px' }}>
            0
          </Typography>
          <TriangleIcon sx={{ color: 'white', marginRight: '2px', fontSize: '1.2rem' }} />
          <Typography variant="body2" sx={{ color: 'white', marginRight: '10px' }}>
            0
          </Typography>

          <Typography variant="body2" sx={{ color: 'white', marginRight: '10px' }}>
            Espaços: 2
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', marginRight: '10px' }}>
            CRLF
          </Typography>
          <CheckCircleIcon sx={{ color: 'white', marginRight: '2px', fontSize: '1.2rem' }} />
          <Typography variant="body2" sx={{ color: 'white' }}>
            Prettier
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ marginRight: '10px', display: { xs: 'none', sm: 'flex' } }}>
          Git Graph
        </Typography>
        <Typography variant="body2" sx={{ marginRight: '10px', display: { xs: 'none', sm: 'flex' } }}>
          UTF-8
        </Typography>
        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          JavaScript
        </Typography>
      </Box>

      {/* Fundo com efeito visual (opcional) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default PortfolioHeader;
