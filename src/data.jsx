import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
const cv = <img src='https://img.icons8.com/glyph-neue/64/null/resume.png' />;

export const links = [
  {
    id: 1,
    url: '/',
    text: 'présentation',
  },
  {
    id: 2,
    url: '/projets',
    text: 'projets',
  },
  {
    id: 3,
    url: '/formation',
    text: 'formation',
  },
  {
    id: 4,
    url: '/experiences',
    text: 'expériences',
  },

  // {
  //   id: 5,
  //   url: '/contact',
  //   text: 'contact',
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/donovan-rivi%C3%A8re-81664311b/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/Donovan-R',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dlovq0hsk/image/upload/v1686996299/profil/CV_2023-06-17_Donovan_rivi%C3%A8re_snxxcm.pdf',
    icon: 'CV',
  },
];
