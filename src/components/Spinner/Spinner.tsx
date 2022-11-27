import './Spinner.scss';

interface SpinnerProps {
  className?: string;
  size?: string;
  color?: string;
}

const Spinner = ({ size = '14px', className = '', color = '#26C281' }: SpinnerProps) => {
  return (
    <div
      className={`spinner ${className}`}
      style={{
        width: size,
        height: size,
        borderColor: color,
      }}
    ></div>
  );
};

export default Spinner;
