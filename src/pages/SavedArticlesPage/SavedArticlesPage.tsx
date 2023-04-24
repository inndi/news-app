import SavedArticlesHeader from '../../components/SavedArticlesHeader/SavedArticlesHeader';
import ArticlesCards from '../../features/ArticlesCards/ArticlesCards';
import { useDidMount } from '../../hooks/hooks';
import { useAppSelector } from '../../redux/hooks';
import { savedArticlesIdsSelector } from '../../redux/selectors';
import { scrollToTop } from '../../utils/generalUtils';

import './SavedArticlesPage.scss';

const SavedArticlesPage = () => {
  const savedArticlesIds = useAppSelector(savedArticlesIdsSelector);

  useDidMount(() => {
    scrollToTop();
  });

  console.log('SavedArticlesPage Render');
  return (
    <div className="saved-articles-page">
      <SavedArticlesHeader />
      <ArticlesCards articlesIds={savedArticlesIds} source="savedArticles" />
    </div>
  );
};

export default SavedArticlesPage;
