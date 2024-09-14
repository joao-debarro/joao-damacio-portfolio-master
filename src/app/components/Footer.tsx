"use client";

import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-300 p-4 text-center">
    <p className="mb-2">João Pedro Damacio - Desenvolvedor Full Stack/Mobile</p>
    <a
      href="mailto:joaodebarro2006166@gmail.com"
      className="text-blue-400 hover:underline"
    >
      joaodebarro2006166@gmail.com
    </a>
    <br />
    <a
      href="https://github.com/joao-debarro"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline mt-2 block"
    >
      GitHub
    </a>
  </footer>
);

export default Footer;
