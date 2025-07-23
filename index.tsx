// pages/index.tsx

import Head from "next/head"; import Image from "next/image"; import { useState } from "react";

export default function Home() { const produtos = [ { nome: "Guarda-Roupa 6 Portas", descricao: "Moderno, espaçoso e com espelho", imagem: "/guarda-roupa.jpg", }, { nome: "Cômoda 5 Gavetas", descricao: "Ideal para organização do quarto", imagem: "/comoda.jpg", }, { nome: "Painel para TV 55"", descricao: "Estilo e praticidade na sua sala", imagem: "/painel.jpg", }, { nome: "Mesa de Jantar 4 Lugares", descricao: "Compacta e elegante", imagem: "/mesa.jpg", }, { nome: "Armário de Cozinha", descricao: "Completo com várias portas", imagem: "/armario.jpg", }, { nome: "Cama Box Casal", descricao: "Conforto e estilo", imagem: "/cama.jpg", }, ];

const numeroWhatsApp = "5535999462924";

const mensagem = (produto: string) => https://wa.me/${numeroWhatsApp}?text=Ol%C3%A1,%20tenho%20interesse%20no%20produto%20${encodeURIComponent( produto )};

return ( <div className="bg-sky-100 min-h-screen text-black"> <Head> <title>Loja Bom Preço</title> </Head>

<header className="bg-black text-white p-4 text-center text-2xl font-bold">
    Loja Bom Preço
  </header>

  <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {produtos.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md overflow-hidden"
      >
        <Image
          src={item.imagem}
          alt={item.nome}
          width={500}
          height={300}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{item.nome}</h2>
          <p className="mb-4 text-sm text-gray-600">{item.descricao}</p>
          <a
            href={mensagem(item.nome)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Comprar pelo WhatsApp
          </a>
        </div>
      </div>
    ))}
  </main>

  <footer className="text-center text-sm p-4 text-gray-600">
    © {new Date().getFullYear()} Loja Bom Preço. Todos os direitos reservados.
  </footer>
</div>

); }

