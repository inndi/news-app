import SavedArticlesHeader from '../../components/SavedArticlesHeader/SavedArticlesHeader';
import ArticlesCards from '../../features/ArticlesCards/ArticlesCards';
import Header from '../../features/Header/Header';
import { useAppSelector } from '../../redux/hooks';
import { savedArticlesSelectors } from '../../redux/slices/savedArticlesSlice';

import './SavedArticlesPage.scss';

const SavedArticlesPage = () => {
  const savedArticlesIds = useAppSelector(savedArticlesSelectors.selectIds);
  const savedArticles = [...savedArticlesIds];

  console.log('SavedArticlesPage Render');
  return (
    <div className="saved-articles-page">
      <Header />
      <SavedArticlesHeader />
      <ArticlesCards articlesIds={savedArticles.reverse()} source="savedArticles" />
    </div>
  );
};

export default SavedArticlesPage;
