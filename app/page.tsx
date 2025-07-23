'use client'

import Image from 'next/image'
import { useState } from 'react'

const items = [
  {
    name: 'Guarda-Roupa 6 Portas',
    description: 'Design moderno com amplo espaço interno.',
    category: 'Quarto',
    image: 'https://images.unsplash.com/photo-1601979031925-2b60c228cafa?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cômoda 5 Gavetas',
    description: 'Compacta e ideal para qualquer ambiente.',
    category: 'Quarto',
    image: 'https://images.unsplash.com/photo-1582582494700-40fd3a4de76?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Armário de Cozinha',
    description: 'Ótima organização com prateleiras reforçadas.',
    category: 'Cozinha',
    image: 'https://images.unsplash.com/photo-1598300053654-8974a9b8e35b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mesa de Jantar 6 Lugares',
    description: 'Tampo de vidro e acabamento premium.',
    category: 'Sala de Jantar',
    image: 'https://images.unsplash.com/photo-1616627983260-59c2a1e9eb9d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Painel para TV 65”',
    description: 'Design elegante e espaço para decoração.',
    category: 'Sala de Estar',
    image: 'https://images.unsplash.com/photo-1618221195710-c84e8ab9d80c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cama Box Casal',
    description: 'Conforto e durabilidade com ótimo custo-benefício.',
    category: 'Quarto',
    image: 'https://images.unsplash.com/photo-1585556271024-c7b5b6c0187a?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Home() {
  const phone = '5535999462924'

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-200 to-black text-black px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Loja Bom Preço</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-4 flex flex-col">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="rounded-xl mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-700">{item.description}</p>
            <p className="mt-1 text-sm italic text-blue-700">{item.category}</p>
            <a
              href={`https://wa.me/${phone}?text=Olá!%20Tenho%20interesse%20no%20produto:%20${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-xl"
            >
              Comprar pelo WhatsApp
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
