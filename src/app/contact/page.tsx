"use client";

import React from "react";
import Link from "next/link";

const ContactPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>

    <Link href="/" className="text-blue-500 hover:underline mt-8 inline-block">
      Voltar para a Home
    </Link>
  </div>
);

export default ContactPage;
