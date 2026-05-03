import { useState, useEffect } from "react";

// ✅ Move outside component
const words = ["Full Stack Developer", "AI Enthusiast", "Python Developer"];

export default function TypingText() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i];

    const timeout = setTimeout(() => {
      setText(current.substring(0, j));

      if (!deleting) {
        setJ(j + 1);
        if (j === current.length) setDeleting(true);
      } else {
        setJ(j - 1);
        if (j === 0) {
          setDeleting(false);
          setI((i + 1) % words.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [j, deleting, i]); // ✅ clean dependencies

  return <h2 className="text-2xl mt-4 text-gray-400">{text}</h2>;
}