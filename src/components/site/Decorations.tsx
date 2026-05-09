import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[5%] top-[12%] text-5xl"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >☁️</motion.div>
      <motion.div
        className="absolute right-[8%] top-[18%] text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >⭐</motion.div>
      <motion.div
        className="absolute left-[10%] bottom-[20%] text-5xl"
        animate={{ y: [0, -25, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >🎈</motion.div>
      <motion.div
        className="absolute right-[12%] bottom-[15%] text-4xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >📚</motion.div>
      <motion.div
        className="absolute right-[28%] top-[40%] text-3xl"
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >✏️</motion.div>
      <motion.div
        className="absolute left-[40%] top-[8%] text-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >🌈</motion.div>
    </div>
  );
}

export function BlobBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
      <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
    </div>
  );
}
