import DigitalClock from "../components/DigitalClock";

export default function DigitalClockView() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 min-h-[80vh] bg-white dark:bg-slate-900 rounded-2xl shadow-lg max-w-xl mx-auto">
      <DigitalClock />
    </div>
  );
}
