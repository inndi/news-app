import AboutAuthor from '../../components/AboutAuthor/AboutAuthor';
import ArticlesSearch from '../../features/ArticlesSearch/ArticlesSearch';
import { useDidMount } from '../../hooks/hooks';
import { scrollToTop } from '../../utils/generalUtils';

import './HomePage.scss';

const HomePage = () => {
  useDidMount(() => {
    scrollToTop();
  });
  console.log('HomePage Render');
  return (
    <div className="home-page">
      <main className="home-page__main">
        <ArticlesSearch />
        <AboutAuthor />
      </main>
    </div>
  );
};

export default HomePage;
