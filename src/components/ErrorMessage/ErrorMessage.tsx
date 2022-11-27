import './ErrorMessage.scss';

interface ErrorProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
  return <p className="error-message">{message}</p>;
};

export default ErrorMessage;
