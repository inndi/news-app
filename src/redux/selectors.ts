import { createSelector } from 'reselect';

import { savedArticlesSelectors } from './slices/savedArticlesSlice';

export const savedArticlesIdsSelector = createSelector(
  savedArticlesSelectors.selectIds,

  (ids) => [...ids].reverse(),
);

export const selectSortedKeywordsByFrequency = createSelector(
  savedArticlesSelectors.selectAll,

  (articles) => {
    const keywords: { [key: string]: number } = {};
    articles.forEach(
      (item) => (keywords[item.keyword] = (keywords[item.keyword] || 0) + 1),
    );

    return Object.keys(keywords).sort((a, b) => keywords[b] - keywords[a]);
  },
);
