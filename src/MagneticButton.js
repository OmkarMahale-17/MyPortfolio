import { useRef } from "react";

export default function MagneticButton({ children }) {
  const ref = useRef();

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => (ref.current.style.transform = "translate(0,0)")}
      className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg transition"
    >
      {children}
    </button>
  );
}