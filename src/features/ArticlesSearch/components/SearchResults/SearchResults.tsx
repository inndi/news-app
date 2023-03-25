import { useState } from 'react';
import { EntityId } from '@reduxjs/toolkit';

import Button from '../../../../components/Button/Button';
import { LIMIT } from '../../../../config/constants';
import { useDidUpdate } from '../../../../hooks/hooks';
import { useAppSelector } from '../../../../redux/hooks';
import { articlesSelectors } from '../../../../redux/slices/articlesSlice';
import ArticlesCards from '../../../ArticlesCards/ArticlesCards';
import PendingSearchResultsLayout from '../../../PendingSearchResultsLayout/PendingSearchResultsLayout';

import './SearchResults.scss';

const SearchResults = () => {
  const [offset, setOffset] = useState<number>(0);
  const [newsArticlesIds, setNewsArticlesIds] = useState<EntityId[]>([]);

  const pending = useAppSelector((state) => state.articles);
  const articlesIds = useAppSelector(articlesSelectors.selectIds);
  const totalArticles = useAppSelector(articlesSelectors.selectTotal);

  // reset local offset on new search
  useDidUpdate(() => {
    if (pending) {
      setOffset(0);
      setNewsArticlesIds([]);
    }
  }, [pending]);

  // show 3 cards on new search
  useDidUpdate(() => {
    if (totalArticles && !offset) {
      handleShowArticles();
    }
  }, [articlesIds, offset]);

  const handleShowArticles = (): void => {
    setNewsArticlesIds(addMoreCards(0, offset + LIMIT));
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  // REVIEW: test performance, add just last 3 items instead of from 0 to Offset
  const addMoreCards = (start: number, end: number): EntityId[] => {
    if (!articlesIds) return [];

    const slicedArticles = articlesIds.slice(start, end);

    return slicedArticles;
  };

  const showMoreBtn = totalArticles > LIMIT && offset < totalArticles;

  console.log('Render handleShowMoreArticles');
  return (
    <section className="search-results">
      <PendingSearchResultsLayout>
        <>
          {!!newsArticlesIds?.length && (
            <div className="cards-section">
              <h2 className="cards-section__title">Search results</h2>
              <ArticlesCards articlesIds={newsArticlesIds} source="articles" />

              {showMoreBtn && (
                <Button isPrimary={true} onClick={handleShowArticles}>
                  Show more
                </Button>
              )}
            </div>
          )}
        </>
      </PendingSearchResultsLayout>
    </section>
  );
};

export default SearchResults;
