'use client'

import { signIn } from 'next-auth/react'

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Регистрация</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Зарегистрируйтесь с помощью электронной почты, чтобы начать использовать платформу.
        </p>

        <button
          onClick={() => signIn('email')}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Зарегистрироваться по электронной почте
        </button>
      </div>
    </main>
  )
}
