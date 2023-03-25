const MenuIcon = ({ color = "#fff", ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={color}
        d="M4 8h16v2H4zM4 14h16v2H4z"
      />
    </svg>
  );
};

export default MenuIcon;