import AboutAuthor from '../../components/AboutAuthor/AboutAuthor';
import ArticlesSearch from '../../features/ArticlesSearch/ArticlesSearch';
import Header from '../../features/Header/Header';

import './HomePage.scss';

const HomePage = () => {
  console.log('HomePage Render');
  return (
    <div className="home-page">
      <Header />
      <main className="home-page__main">
        <ArticlesSearch />
        <AboutAuthor />
      </main>
    </div>
  );
};

export default HomePage;
