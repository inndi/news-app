import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import axios, { CancelTokenSource } from 'axios';

import { NewsArticle, NewsArticles } from '../../interfaces/interfaces';
import * as newsApi from '../../services/newsApi';
import { RootState } from '../store';

interface ArticlesState {
  pending: boolean | null;
  error: string | boolean;
  keyword: string;
}

let source: CancelTokenSource;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (keyword: string, { signal }) => {
    // cancel prev request
    source?.cancel();
    source = axios.CancelToken.source();

    signal.addEventListener('abort', () => {
      source.cancel();
    });

    const response = await newsApi.getArticles(keyword, source.token);
    response.data.keyword = keyword;
    return response.data;
  },
);

const articlesAdapter = createEntityAdapter<NewsArticle>({
  selectId: (article) => article.link,
});

const initialState: EntityState<NewsArticle> & ArticlesState =
  articlesAdapter.getInitialState({
    pending: null,
    error: false,
    keyword: '',
  });

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = false;
        state.pending = true;
        articlesAdapter.removeAll(state);
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        if (action.payload) {
          state.error = false;
          const articles: NewsArticles = [];

          action.payload.articles.forEach((article) => {
            articles.push({
              keyword: action.payload.keyword.toLowerCase(),
              title: article.title,
              text: article.description,
              date: article.publishedAt,
              source: article.source.name,
              link: article.url,
              image: article.urlToImage,
            });
          });

          articlesAdapter.upsertMany(state, articles);
          state.keyword = action.payload.keyword.toLowerCase();
          state.pending = false;
        }
        state.pending = false;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        if (action.error.name !== ('CanceledError' || 'AbortError')) {
          state.pending = false;
          state.error = true;
        }
      });
  },
});

export const articlesSelectors = articlesAdapter.getSelectors<RootState>(
  (state) => state.articles,
);

export default articlesSlice.reducer;
