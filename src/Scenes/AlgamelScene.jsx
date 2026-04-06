import { motion } from "framer-motion";
import Alg1 from "../assets/images/Alg1.png";
import Alg2 from "../assets/images/Alg2.png";
import Alg3 from "../assets/images/Alg3.png";
import Alg4 from "../assets/images/Alg4.png";
import "./AlgamelScene.css";
import { useInitiative } from "../context/InitiativeContext";
import { useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import {
  AhogadoIcon,
  CaidoIcon,
  PrisioneroIcon,
  TitereIcon,
  TraidorIcon,
} from "../icons/AlgamelMarks";

const AlgamelMarks = [
  { title: "Títere", Icon: <TitereIcon /> },
  { title: "Ahogado", Icon: <AhogadoIcon /> },
  { title: "Prisionero", Icon: <PrisioneroIcon /> },
  { title: "Traidor", Icon: <TraidorIcon /> },
  { title: "Caido", Icon: <CaidoIcon /> },
];

const AlgamelScene = ({ key }) => {
  const { initiatives } = useInitiative();
  const [marks, setMarks] = useState(["", "", "", "", "", "", ""]);
  const [marksClass, setMarksClass] = useState("show");
  const [showMarks, setShowMArks] = useState(false);

  const players = initiatives.filter((ini) => ini.isPJ && ini.initiative);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffleMarksArray = () => {
    let newMarks = shuffle([...AlgamelMarks]);
    newMarks.length = players.length;
    newMarks = shuffle(newMarks);
    setMarks(newMarks);
  };

  const shuffleMarks = () => {
    setMarksClass("");
    setTimeout(() => {
      shuffleMarksArray();
      setMarksClass("show");
    }, 1500);
  };

  const emptyMarks = () => {
    let newMarks = players.map(() => "");
    setMarks(newMarks);
  };

  return (
    <motion.div
      className="scene algamel"
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <img className="grow" src={Alg1} />
      <div className="apear" style={{ animationDelay: "2s" }}>
        <div className="expand">
          <img src={Alg2} className="grow-s" style={{ animationDelay: "2s" }} />
        </div>
      </div>
      <div className="apear" style={{ animationDelay: "2.1s" }}>
        <div className="expand">
          <img src={Alg3} className="grow" style={{ animationDelay: "2s" }} />
        </div>
      </div>
      <div className="apear" style={{ animationDelay: "3s" }}>
        <img
          src={Alg4}
          className="grow-s"
          style={{ animationDelay: "3s", animationDuration: "4s" }}
        />
      </div>
      <div className={showMarks ? "marks-container show" : "marks-container"}>
        <div className={`row marks`}>
          {marks.map((mark, index) => {
            return (
              <MarkCell
                key={index}
                mark={mark}
                className={marksClass}
                delay={0.1 * index}
              />
            );
          })}
        </div>
        <div className="row player">
          {players.map((player) => {
            return <PlayerCell player={player} key={player.name} />;
          })}
        </div>
      </div>
      <div className="Paralax" />
      <div className="buttons">
        <button onClick={shuffleMarks}>M</button>
        <button onClick={emptyMarks}>E</button>
        <button
          onClick={() => {
            setShowMArks(!showMarks);
          }}
        >
          S
        </button>
      </div>
    </motion.div>
  );
};

export default AlgamelScene;

const PlayerCell = ({ player }) => {
  return (
    <div className="PlayerCell cell" style={{ "--c": player.color }}>
      <h4>{player.name}</h4>
    </div>
  );
};
const MarkCell = ({ mark, className, delay }) => {
  return (
    <div className="cell">
      {mark ? (
        <div
          className={`MarkCell ${className}`}
          style={{ transitionDelay: delay + "s" }}
        >
          {mark.Icon}

          <h4>{mark.title}</h4>
        </div>
      ) : (
        <div className="MarkCell hide" />
      )}
    </div>
  );
};
