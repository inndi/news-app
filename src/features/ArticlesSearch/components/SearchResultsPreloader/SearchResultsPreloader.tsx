import { BasicContent } from '../../../../interfaces/interfaces';

import './SearchResultsPreloader.scss';

const SearchResultsPreloader = ({ text }: BasicContent) => {
  return (
    <section className="search-results-preloader">
      <div className="search-results-preloader__circle-box">
        <span className="search-results-preloader__circle-animation"></span>
      </div>
      <p className="search-results-preloader__text">{text}</p>
    </section>
  );
};

export default SearchResultsPreloader;
