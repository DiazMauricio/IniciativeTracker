import DisplayInitiatives from "./DisplayInitiatives";
import NewWindow from "react-new-window";
import SceneDisplay from "./SceneDisplay";

const InitiativeWindows = () => {
  return (
    <div className="display-container">
      <NewWindow title="Initiative" features={{ width: 640, height: 360 }}>
        <div className="column display">
          <DisplayInitiatives />
          <SceneDisplay />
        </div>
      </NewWindow>
    </div>
  );
};

export default InitiativeWindows;
