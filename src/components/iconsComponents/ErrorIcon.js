const ErrorIcon = ({ color = "#D1D2D6", ...props }) => {
  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="37"
        cy="37"
        r="36.5"
        stroke={color}
      />
      <path
        d="M52.328 49.96c-3.667-4.262-9.1-6.96-15.164-6.96-6.063 0-11.496 2.698-15.164 6.96"
        stroke={color}
      />
      <circle
        cx="49.5"
        cy="27.5"
        r="1.5"
        fill={color}
      />
      <circle
        cx="24.5"
        cy="27.5"
        r="1.5"
        fill={color}
      />
    </svg>
  );
};

export default ErrorIcon;