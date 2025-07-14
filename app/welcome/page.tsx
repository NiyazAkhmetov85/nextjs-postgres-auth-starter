export default function WelcomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Добро пожаловать в HoverHub
        </h1>
        <p className="text-gray-600 text-lg mb-4 text-center">
          Платформа для поиска операторов дронов и цифровых услуг с воздуха.
        </p>
        <p className="text-gray-500 text-center">
          Присоединяйтесь, чтобы создавать, анализировать и оптимизировать с помощью дронов.
        </p>
      </div>
    </main>
  );
}
