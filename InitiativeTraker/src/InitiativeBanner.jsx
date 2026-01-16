import "./InitiativeBanner.css";

const InitiativeBanner = ({ name, color, isPJ, active, index }) => {
  return (
    <div
      className="show-container"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div
        className={`InitiativeBanner ${active ? "active" : ""} ${
          isPJ ? "pj" : ""
        }`}
      >
        <h4 className="name">{name}</h4>
        <svg
          className="banner"
          viewBox="0 0 1080 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="label"
            d="M0 0.000411987H176.5L1079.5 0V256L120.5 256H0L120.5 151.5L0 0.000411987Z"
            fill="#171519"
          />
          <path
            d="M0 0H120.5L230 148L120.5 256H0L120.5 151.5L0 0Z"
            fill={color}
          />
          <path d="M162.5 256L230 187L211 256H162.5Z" fill={color} />
        </svg>
      </div>
    </div>
  );
};

export default InitiativeBanner;
