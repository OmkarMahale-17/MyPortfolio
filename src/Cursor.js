import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const hoverOn = () => setHover(true);
    const hoverOff = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("button, a, .group").forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[999]"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div
        className={`w-4 h-4 rounded-full transition ${hover
            ? "bg-gradient-to-r from-blue-400 to-purple-500 scale-150"
            : "bg-white"
          }`}
      />
    </div>
  );
}