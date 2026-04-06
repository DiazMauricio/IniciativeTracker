import InitiativeBanner from "./InitiativeBanner";
import "./DisplayInitiative.css";
import { useInitiative } from "./context/InitiativeContext";

const DisplayInitiatives = () => {
  const { initiatives, activeIndex, show } = useInitiative();

  const sortedInitiatives = [...initiatives].sort(
    (a, b) => b.initiative - a.initiative,
  );
  return (
    <div className={show ? "DisplayInitiative show" : "DisplayInitiative"}>
      {sortedInitiatives.map((item, index) => {
        if (item.initiative !== "") {
          return (
            <InitiativeBanner
              key={index}
              index={index}
              name={item.name}
              color={item.color}
              isPJ={item.isPJ}
              active={activeIndex == index}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default DisplayInitiatives;
