"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const SkillsPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h2 className="text-3xl font-bold mb-6">Minhas Habilidades</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li>.NET C#</li>
        <li>JavaScript</li>
        <li>NoSQL</li>
        <li>MySQL</li>
        <li>CSS, HTML</li>
        <li>TypeScript</li>
        <li>Resolução de Conflitos</li>
        <li>Arquitetura de Software</li>
        <li>Desenvolvimento Front-end e Back-end</li>
      </ul>

      <Link
        href="/"
        className="text-blue-500 hover:underline mt-8 inline-block"
      >
        Voltar para a Home
      </Link>
    </div>
  );
};

export default SkillsPage;
