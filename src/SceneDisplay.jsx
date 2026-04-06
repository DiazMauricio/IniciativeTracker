import { AnimatePresence } from "framer-motion";
import { useScene } from "./context/SceneContext";

const SceneDisplay = () => {
  const { scenes, sceneIndex } = useScene();

  return (
    <div className="SceneDisplay">
      <AnimatePresence mode="sync">{scenes[sceneIndex].scene}</AnimatePresence>
    </div>
  );
};

export default SceneDisplay;
