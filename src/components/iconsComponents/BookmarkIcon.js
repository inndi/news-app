const BookmarkIcon = ({ stroke = "#B6BCBF", color = "none", ...props }) => {
  return (
    <svg
      height="70%"
      width="70%"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMinYMin meet"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.382 15.714 6 19.942V4h12v15.942l-5.382-4.228-.618-.486-.618.486Z"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

export default BookmarkIcon;