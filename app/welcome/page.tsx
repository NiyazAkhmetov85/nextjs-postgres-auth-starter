'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Видеофон */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/agro-drones.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Контент поверх видео */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-black/40 backdrop-blur-sm text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в HoverHub</h1>
        <p className="text-lg mb-4">
          Платформа для поиска операторов дронов и цифровых услуг с воздуха.
        </p>
        <p className="mb-6">
          Присоединяйтесь, чтобы создавать, анализировать и оптимизировать с помощью дронов.
        </p>
        <Link
          href="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Начать
        </Link>
      </div>
    </main>
  );
}
