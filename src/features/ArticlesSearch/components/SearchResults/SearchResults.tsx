import { useState } from 'react';
import { EntityId } from '@reduxjs/toolkit';

import Button from '../../../../components/Button/Button';
import { LIMIT } from '../../../../config/constants';
import { useDidUpdate } from '../../../../hooks/hooks';
import { useAppSelector } from '../../../../redux/hooks';
import { articlesSelectors } from '../../../../redux/slices/articlesSlice';
import ArticlesCards from '../../../ArticlesCards/ArticlesCards';
import PendingErrorOverlay from '../../../PendingErrorOverlay/PendingErrorOverlay';
import Error from '../Error/Error';
import NotFound from '../NotFound/NotFound';
import SearchResultsPreloader from '../SearchResultsPreloader/SearchResultsPreloader';

import './SearchResults.scss';

const SearchResults = () => {
  const [offset, setOffset] = useState<number>(0);
  const [newsArticlesIds, setNewsArticlesIds] = useState<EntityId[]>([]);

  const pending = useAppSelector((state) => state.articles.pending);
  const error = useAppSelector((state) => state.articles.error);
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

  const addMoreCards = (start: number, end: number): EntityId[] => {
    if (!articlesIds) return [];

    return articlesIds.slice(start, end);
  };

  const showMoreBtn = totalArticles > LIMIT && offset < totalArticles;

  console.log('Render SearchResults');
  return (
    <section className="search-results">
      <PendingErrorOverlay
        isPending={pending}
        isError={!!error}
        isNoResults={!totalArticles}
        pendingText={() => <SearchResultsPreloader text="Searching for news..." />}
        errorText={() => (
          <Error
            title="Sorry, something went wrong during the request. There may be a connection issue or
        the server may be down. Please try again later."
          />
        )}
        noResultsMessage={() => (
          <NotFound
            title="Nothing found"
            text={'Sorry, but nothing matched your search terms.'}
          />
        )}
      >
        <>
          {!!newsArticlesIds?.length && (
            <div className="search-results__cards-section">
              {' '}
              <h2 className="search-results__title">Search results</h2>
              <ArticlesCards articlesIds={newsArticlesIds} source="articles" />
              {showMoreBtn && (
                <Button isPrimary onClick={handleShowArticles}>
                  Show more
                </Button>
              )}
            </div>
          )}
        </>
      </PendingErrorOverlay>
    </section>
  );
};

export default SearchResults;
