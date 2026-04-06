import { motion } from "framer-motion";

const SimpleScene = ({ src, key }) => {
  return (
    <motion.div
      className="scene"
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <img src={src} />
    </motion.div>
  );
};

export default SimpleScene;
