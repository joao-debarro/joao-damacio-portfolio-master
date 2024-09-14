"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { GitHubRepo } from "@/types/github";
import { Project } from "@/types/project";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<GitHubRepo[]>(
          `https://api.github.com/users/joao-debarro/repos`
        );
        const repos = response.data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "Sem descrição",
          githubLink: repo.html_url,
        }));
        setProjects(repos);
      } catch (error) {
        setError("Erro ao carregar projetos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Meus Projetos</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border p-4 rounded-md shadow-md bg-white"
          >
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Acessar no GitHub
            </a>
          </li>
        ))}
      </ul>

      <Link href="/" className="text-blue-500 hover:underline mt-8 inline-block">
        Voltar para a Home
      </Link>
    </div>
  );
};

export default ProjectsPage;
