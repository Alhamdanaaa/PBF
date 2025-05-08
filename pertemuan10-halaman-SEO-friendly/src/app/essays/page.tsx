import React from 'react'
import {Inter} from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
  title: "Esai Saya",
  description: "Halaman tentang esai saya.",
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};
export default function Page() {
  const articles = [
    { title: "Mengenal Machine Learning", description: "Dasar-dasar Machine Learning dan penerapannya.", link: "#" },
    { title: "Cloud Computing untuk Pemula", description: "Memahami konsep dasar Cloud Computing.", link: "#" },
    { title: "Pentingnya UI/UX dalam Pengembangan Web", description: "Bagaimana desain memengaruhi pengalaman pengguna.", link: "#" },
    { title: "Membangun API dengan FastAPI", description: "Langkah-langkah dalam membuat API yang cepat dan efisien.", link: "#" }
  ];

  return (
    <div className="mt-16 px-8 max-w-5xl mx-auto text-white">
      <header className="text-center">
        <h1 className="font-bold text-4xl">Esai</h1>
        <p className="text-lg mt-4 text-white">Berikut adalah beberapa artikel yang telah saya tulis.</p>
      </header>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
            <p className="text-gray-600 mt-2">{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

