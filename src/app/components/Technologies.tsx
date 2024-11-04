// components/Technologies.tsx
"use client";
import React from 'react';
import { Box, Typography, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiJavascript, SiPhp, SiLaravel, SiReact, SiNestjs, SiPostman, SiMysql, SiAxios, SiJsonwebtokens, SiSwagger, SiComposer } from 'react-icons/si';
import { FaCss3Alt, FaNode, FaDocker } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import Image from 'next/image';
import MaterialUIIcon from '../../../public/img/icons8-material-ui-48.png';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Technologies = () => {
  const techList = [
    { name: 'JavaScript', icon: <SiJavascript style={{ fontSize: '2rem', color: '#f7df1e' }} /> },
    { name: 'PHP', icon: <SiPhp style={{ fontSize: '2rem', color: '#8993be' }} /> },
    { name: 'Laravel', icon: <SiLaravel style={{ fontSize: '2rem', color: '#ff2d55' }} /> },
    { name: 'React JS', icon: <SiReact style={{ fontSize: '2rem', color: '#61dafb' }} /> },
    { name: 'NestJS', icon: <SiNestjs style={{ fontSize: '2rem', color: '#e0234e' }} /> },
    { name: 'Postman', icon: <SiPostman style={{ fontSize: '2rem', color: '#ff6c37' }} /> },
    { name: 'Visual Studio Code', icon: <DiVisualstudio style={{ fontSize: '2rem', color: '#007ACC' }} /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql style={{ fontSize: '2rem', color: '#336791' }} /> },
    { name: 'Docker', icon: <FaDocker style={{ fontSize: '2rem', color: '#2496ED' }} /> },
    { name: 'HTML', icon: <HtmlIcon style={{ fontSize: '2rem', color: '#e34c26' }} /> },
    { name: 'CSS', icon: <FaCss3Alt style={{ fontSize: '2rem', color: '#1572B6' }} /> },
    { name: 'Swagger', icon: <SiSwagger style={{ fontSize: '2rem', color: '#85EA2D' }} /> },
    { name: 'MySQL', icon: <SiMysql style={{ fontSize: '2rem', color: '#4479A1' }} /> },
    { name: 'Node.js', icon: <FaNode style={{ fontSize: '2rem', color: '#8CC84B' }} /> },
    { name: 'Axios', icon: <SiAxios style={{ fontSize: '2rem', color: '#5A29E4' }} /> },
    { name: 'Material-UI', icon: <Image src={MaterialUIIcon} alt="Material UI" width={48} height={48} /> },
    { name: 'Git', icon: <GitHubIcon style={{ fontSize: '2rem', color: 'white' }} /> },
    { name: 'JWT Token', icon: <SiJsonwebtokens style={{ fontSize: '2rem', color: '#000000' }} /> },
    { name: 'Composer', icon: <SiComposer style={{ fontSize: '2rem', color: 'white' }} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ fontSize: '2rem', color: '#06B6D4' }} /> },
    { name: 'Next.js', icon: <SiNextdotjs style={{ fontSize: '2rem', color: '#000000' }} /> },
  ];

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
      <Typography variant="h4" sx={{ marginBottom: '2rem', fontWeight: 'bold', color: '#fff' }}>
        Tecnologias
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: '2rem',
          fontWeight: 'bold',
          color: '#B0B0B0'
        }}
      >
        Linguagens, ferramentas e frameworks que usei e estudo.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {techList.map((tech, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <ListItem sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ color: 'inherit' }}>
                {tech.icon}
              </ListItemIcon>
              <ListItemText primary={tech.name} />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technologies;
