import { motion } from "framer-motion";

export default function Section({ title, children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-16 py-28 text-center"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}