import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import articlesSlice from './slices/articlesSlice';
import modalsSlice from './slices/modalsSlice';
import savedArticlesSlice from './slices/savedArticlesSlice';

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    articles: articlesSlice,
    savedArticles: savedArticlesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
