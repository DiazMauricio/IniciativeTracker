import { motion } from "framer-motion";
import Logo from "../assets/Logo";

const MainScene = () => {
  return (
    <motion.div
      className="scene MainScene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div>
        <Logo />
        <h4>Cargando...</h4>
      </div>
    </motion.div>
  );
};

export default MainScene;
