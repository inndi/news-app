import { useAuth } from '../../contexts/authContext';
import { useAppSelector } from '../../redux/hooks';
import { selectSortedKeywordsByFrequency } from '../../redux/selectors';
import { savedArticlesSelectors } from '../../redux/slices/savedArticlesSlice';
import { RootState } from '../../redux/store';

import './SavedArticlesHeader.scss';

const SavedArticlesHeader = () => {
  const totalSavedArticles = useAppSelector(savedArticlesSelectors.selectTotal);
  const { user } = useAuth();

  const keywords = useAppSelector((state: RootState) =>
    selectSortedKeywordsByFrequency(state),
  );
  const getKeywordsRatingString = () => {
    return keywords.length <= 3
      ? ` ${keywords.join(', ')}`
      : `${keywords[0]}, ${keywords[1]} and ${keywords.length - 2} other`;
  };

  // TODO:  + check renders
  //  + move selector to selectors.ts and all other selectors if they are exist

  console.log('SavedArticlesHeader Render');
  return (
    <section className="saved-articles-header">
      <p className="saved-articles-header__subtitle">Saved articles</p>
      <h2 className="saved-articles-header__title">
        {user?.name}, you have {totalSavedArticles} saved articles
      </h2>
      <p className="saved-articles-header__text">
        By keywords:
        <span className="saved-articles-header__keywords">
          {getKeywordsRatingString()}
        </span>
      </p>
    </section>
  );
};

export default SavedArticlesHeader;
