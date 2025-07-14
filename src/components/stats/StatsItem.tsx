import { motion } from "framer-motion";
import Typography from "@/components/shared/Typography";
import type { Stat } from "@/constants/stats";

export default function StatsItem({ value, label }: Stat) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{ scale: 1.05 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      >
        <Typography
          component="h3"
          variant="title"
          className="text-secondary mb-3 text-5xl lg:mb-5"
        >
          {value}
        </Typography>
      </motion.div>
      <Typography variant="subtitle" className="text-xl">
        {label}
      </Typography>
    </div>
  );
}
