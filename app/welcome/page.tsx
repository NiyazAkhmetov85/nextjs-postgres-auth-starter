'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDrone } from 'react-icons/fa';

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-blue-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl bg-white p-10 rounded-3xl shadow-xl text-center"
      >
        <div className="flex justify-center mb-4 text-blue-600 text-5xl">
          <FaDrone />
        </div>
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          Добро пожаловать в HoverHub
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Платформа для поиска операторов дронов и цифровых услуг с воздуха.
        </p>
        <p className="text-gray-500 mb-6">
          Присоединяйтесь, чтобы создавать, анализировать и оптимизировать с помощью дронов.
        </p>
        <Link
          href="/register"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Начать
        </Link>
      </motion.div>
    </main>
  );
}
