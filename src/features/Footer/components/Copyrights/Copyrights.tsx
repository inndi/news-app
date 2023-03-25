import './Copyrights.scss';

const Copyrights = () => {
  const initYear = new Date().getFullYear();

  return <p className="copyrights">&copy; {initYear} Supersite, Powered by News API</p>;
};

export default Copyrights;
