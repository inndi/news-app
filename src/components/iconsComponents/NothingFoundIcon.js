const NothingFoundIcon = ({ color = "#D1D2D6", ...props }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="43"
        cy="43"
        r="36.5"
        stroke={color}
      />
      <path
        d="m69 69 19.5 19.5M58.328 55.96c-3.667-4.262-9.1-6.96-15.164-6.96-6.063 0-11.496 2.698-15.164 6.96"
        stroke={color} /><circle cx="55.5" cy="33.5" r="1.5" fill={color}
      />
      <circle
        cx="30.5"
        cy="33.5"
        r="1.5"
        fill={color}
      />
    </svg>
  );
};

export default NothingFoundIcon;