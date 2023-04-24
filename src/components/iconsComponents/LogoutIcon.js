const LogoutIcon = ({ color = "#fff", ...props }) => {
  return (
    <svg
      width="18"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2H2v12h4v2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4v2Zm7.586 7-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459L9.293 2.94l4.293 4.134H4V9h9.586Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoutIcon;