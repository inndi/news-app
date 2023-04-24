import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

import './ArticlesSearch.scss';

const ArticlesSearch = () => {
  return (
    <div className="articles-search">
      <SearchForm />
      <SearchResults />
    </div>
  );
};

export default ArticlesSearch;
