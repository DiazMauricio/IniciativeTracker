import AddIcon from "./icons/addIcon";
import LessIcon from "./icons/LessIcon";
import Logo from "./icons/Logo";
import ReduIcon from "./icons/ReduIcon";
import "./InputControls.css";

const InputControls = ({ initiatives, setInitiatives, init }) => {
  return (
    <div className="InputControls">
      <Logo />
      <button
        onClick={() =>
          setInitiatives([...initiatives, { name: "", initiative: "" }])
        }
      >
        <AddIcon />
      </button>
      <button onClick={() => setInitiatives(initiatives.slice(0, -1))}>
        <LessIcon />
      </button>
      <button onClick={() => setInitiatives(init)}>
        <ReduIcon />
      </button>
    </div>
  );
};

export default InputControls;
