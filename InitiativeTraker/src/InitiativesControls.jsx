import DownIcon from "./icons/DownIcon";
import EyeIcon from "./icons/EyeIcon";
import UpIcon from "./icons/UpIcon";
import "./InitiativeControls.css";

const InitiativesControls = ({ prevIndex, nextIndex, show, showActive }) => {
  return (
    <div className="column controls">
      <button onClick={prevIndex}>
        <UpIcon />
      </button>
      <button onClick={nextIndex}>
        <DownIcon />
      </button>
      <button
        className={`show-button ${show ? "" : "active"}`}
        onClick={showActive}
      >
        <EyeIcon />
      </button>
    </div>
  );
};

export default InitiativesControls;
