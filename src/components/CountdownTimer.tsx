import React, { useState, useRef, useEffect } from "react";

type CountdownTimerProps = {
  initialSeconds?: number;
  onFinish?: () => void;
};

function formatTimeHMS(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds = 0, onFinish }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeLeft(hours * 3600 + minutes * 60 + seconds);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (onFinish) onFinish();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft, onFinish]);

  const handleStart = () => {
    setTimeLeft(hours * 3600 + minutes * 60 + seconds);
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleResume = () => {
    if (timeLeft > 0) setIsRunning(true);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(hours * 3600 + minutes * 60 + seconds);
  };

  return (
    <div className="countdown-timer bg-white dark:bg-slate-900 rounded-xl shadow p-6 w-full max-w-md mx-auto">
      <div className="time-inputs flex gap-4 justify-center mb-6">
  <label className="flex flex-col items-center text-black dark:text-slate-200">
          Horas:
          <input type="number" min={0} value={hours} onChange={e => setHours(Number(e.target.value))} className="mt-1 px-2 py-1 rounded bg-white border border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </label>
  <label className="flex flex-col items-center text-black dark:text-slate-200">
          Min:
          <input type="number" min={0} max={59} value={minutes} onChange={e => setMinutes(Number(e.target.value))} className="mt-1 px-2 py-1 rounded bg-white border border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </label>
  <label className="flex flex-col items-center text-black dark:text-slate-200">
          Seg:
          <input type="number" min={0} max={59} value={seconds} onChange={e => setSeconds(Number(e.target.value))} className="mt-1 px-2 py-1 rounded bg-white border border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </label>
      </div>
  <div id="timerDisplay" className="text-3xl font-mono font-bold mb-6 text-black dark:text-indigo-300">{formatTimeHMS(timeLeft)}</div>
      <div className="controls flex gap-3 justify-center">
  <button onClick={handleStart} disabled={isRunning || timeLeft === 0} className="bg-white border border-indigo-400 text-black font-semibold px-4 py-2 rounded-xl shadow hover:bg-indigo-50 disabled:opacity-50">Iniciar</button>
  <button onClick={handlePause} disabled={!isRunning} className="bg-white border border-indigo-400 text-black font-semibold px-4 py-2 rounded-xl shadow hover:bg-indigo-50 disabled:opacity-50">Pausar</button>
  <button onClick={handleResume} disabled={isRunning || timeLeft === 0} className="bg-white border border-indigo-400 text-black font-semibold px-4 py-2 rounded-xl shadow hover:bg-indigo-50 disabled:opacity-50">Reanudar</button>
  <button onClick={handleReset} className="bg-white border border-indigo-400 text-black font-semibold px-4 py-2 rounded-xl shadow hover:bg-indigo-50">Reiniciar</button>
      </div>
    </div>
  );
};

export default CountdownTimer;