import { useScene } from "./context/SceneContext";
import "./ScenePicker.css";
const ScenePicker = () => {
  const { scenes, sceneIndex, setSceneIndex } = useScene();
  return (
    <div className="ScenePicker">
      <h2>Escenas 2</h2>
      {scenes.map((item, index) => {
        return (
          <SceneButton
            key={index}
            title={item.title}
            index={index}
            setScene={setSceneIndex}
            selected={sceneIndex}
          />
        );
      })}
    </div>
  );
};

export default ScenePicker;

const SceneButton = ({ title, index, setScene, selected }) => {
  return (
    <button
      className={selected === index ? "selected" : ""}
      onClick={() => {
        setScene(index);
      }}
    >
      {title}
    </button>
  );
};
