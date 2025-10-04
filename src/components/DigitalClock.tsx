import React, { useState, useEffect } from "react";

function formatTime(date: Date): string {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

const DigitalClock: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 w-full max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-300">Reloj Digital</h2>
      <div className="text-4xl font-mono font-bold mb-6 text-black dark:text-indigo-300">
        {formatTime(now)}
      </div>
      <label className="flex flex-col items-center text-black dark:text-slate-200">
        Fecha actual:
        <input
          type="text"
          value={now.toLocaleDateString()}
          readOnly
          className="mt-1 px-2 py-1 rounded bg-white border border-slate-300 text-black focus:outline-none"
        />
      </label>
    </div>
  );
};

export default DigitalClock;
