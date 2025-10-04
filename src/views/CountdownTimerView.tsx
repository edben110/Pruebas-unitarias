import CountdownTimer from "../components/CountdownTimer";

export default function CountdownTimerView() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 min-h-[80vh] bg-white dark:bg-slate-900 rounded-2xl shadow-lg max-w-xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-300">Temporizador</h1>
      <p className="text-lg mb-8 text-slate-600 dark:text-slate-300">Programa y controla tu cuenta regresiva fácilmente.</p>
      <div className="w-full flex flex-col items-center">
        <CountdownTimer />
      </div>
    </div>
  );
}
