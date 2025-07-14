'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Вход в аккаунт</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Пожалуйста, войдите с помощью электронной почты.
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            Ошибка входа. Проверьте данные и попробуйте снова.
          </p>
        )}

        <button
          onClick={() => signIn('email')}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Войти по электронной почте
        </button>
      </div>
    </main>
  )
}
