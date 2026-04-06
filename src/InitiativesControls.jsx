import { useInitiative } from "./context/InitiativeContext";
import AddIcon from "./icons/addIcon";
import DownIcon from "./icons/DownIcon";
import EyeIcon from "./icons/EyeIcon";
import LessIcon from "./icons/LessIcon";
import ReduIcon from "./icons/ReduIcon";
import UpIcon from "./icons/UpIcon";
import "./InitiativeControls.css";
import InputInitiative from "./InputInitiative";

const InitiativesControls = () => {
  const { onAdd, initiatives, activeIndex } = useInitiative();
  const sortedInitiatives = [...initiatives].sort(
    (a, b) => b.initiative - a.initiative,
  );
  return (
    <div className="column">
      <h2>Initiative Traker</h2>
      <div>{sortedInitiatives[activeIndex].name}</div>
      <InputsButtons />
      {initiatives.map((item, index) => (
        <InputInitiative key={index} index={index} onAdd={onAdd} item={item} />
      ))}
    </div>
  );
};

export default InitiativesControls;

const InputsButtons = () => {
  const {
    addInitative,
    removeInitiative,
    resetInitiatives,
    prevIndex,
    nextIndex,
    show,
    showActive,
  } = useInitiative();

  return (
    <div className="InputsButtons">
      <button
        className={`show-button ${show ? "" : "active"}`}
        onClick={showActive}
      >
        <EyeIcon />
      </button>
      <button onClick={addInitative}>
        <AddIcon />
      </button>
      <button onClick={removeInitiative}>
        <LessIcon />
      </button>
      <button onClick={resetInitiatives}>
        <ReduIcon />
      </button>
      <div className="line-v" />
      <button onClick={prevIndex}>
        <UpIcon />
      </button>
      <button onClick={nextIndex}>
        <DownIcon />
      </button>
    </div>
  );
};
