import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Search, Star, ShoppingCart, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    name: "Guarda-Roupa 6 Portas",
    description: "Design moderno com amplo espaço interno.",
    image: "/guarda-roupa.jpg",
    category: "Quarto",
  },
  {
    name: "Cômoda 5 Gavetas",
    description: "Compacta e ideal para qualquer ambiente.",
    image: "/comoda.jpg",
    category: "Quarto",
  },
  {
    name: "Armário de Cozinha",
    description: "Ótima organização com prateleiras reforçadas.",
    image: "/armario.jpg",
    category: "Cozinha",
  },
  {
    name: "Mesa de Jantar 6 Lugares",
    description: "Tampo de vidro e acabamento premium.",
    image: "/mesa.jpg",
    category: "Sala de Jantar",
  },
  {
    name: "Painel para TV 65”",
    description: "Design elegante e espaço para decoração.",
    image: "/painel.jpg",
    category: "Sala de Estar",
  },
  {
    name: "Cama Box Casal",
    description: "Conforto e durabilidade com ótimo custo-benefício.",
    image: "/cama.jpg",
    category: "Quarto",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-black p-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Móveis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black rounded-xl shadow-lg overflow-hidden"
          >
            <Image src={item.image} alt={item.name} width={500} height={300} />
            <div className="p-4">
              <h2 className="font-bold text-xl">{item.name}</h2>
              <p className="text-sm">{item.description}</p>
              <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                <a
                  href={`https://wa.me/5535999462924?text=Olá! Gostaria de comprar: ${item.name}`}
                  target="_blank"
                >
                  Comprar via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}