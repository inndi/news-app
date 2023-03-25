const CloseIcon = ({ color = '#fff', ...props }) => {
  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 40 40"
      preserveAspectRatio="xMinYMin meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m22.357 20 8.822 8.822-2.357 2.357L18.35 20.707a1 1 0 0 1 0-1.414L28.822 8.822l2.357 2.357L22.357 20Z"
        fill={color}
      />
      <path
        d="M18.131 20 9.31 28.822l2.357 2.357 10.471-10.472a1 1 0 0 0 0-1.414L11.667 8.822 9.31 11.179 18.13 20Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseIcon;