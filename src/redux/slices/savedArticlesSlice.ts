import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from '@reduxjs/toolkit';

import { NewsArticle, NewsArticles } from '../../interfaces/interfaces';
import * as mainApi from '../../services/mainApi';
import { RootState } from '../store';

export const fetchSavedArticles = createAsyncThunk(
  'savedArticles/fetchSavedArticles',
  async () => {
    const response = await mainApi.getSavedArticles();

    return response.data;
  },
);

export const saveNewArticle = createAsyncThunk(
  'savedArticles/saveNewArticle',
  async (article: NewsArticle) => {
    const response = await mainApi.postArticle(article);
    return response.data;
  },
);

export const removeArticle = createAsyncThunk(
  'savedArticles/removeArticle',
  async (serverId: EntityId) => {
    const response = await mainApi.deleteArticle(serverId);
    return response.data.removedArticle.link;
  },
);

const savedArticlesAdapter = createEntityAdapter<NewsArticle>({
  selectId: (article) => article.link,
});

const savedArticlesSlice = createSlice({
  name: 'savedArticles',
  initialState: savedArticlesAdapter.getInitialState({
    pending: false,
    error: false,
  }),
  reducers: {
    removeAllArticles: savedArticlesAdapter.removeAll,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSavedArticles.pending, (state) => {
        if (state.error) {
          state.error = false;
        }
        state.pending = true;
      })
      .addCase(
        fetchSavedArticles.fulfilled,
        (state, action: PayloadAction<NewsArticles>) => {
          state.pending = false;

          savedArticlesAdapter.upsertMany(state, action.payload);
        },
      )
      .addCase(fetchSavedArticles.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
    builder
      .addCase(saveNewArticle.pending, (state) => {
        if (state.error) {
          state.error = false;
        }
        state.pending = true;
      })
      .addCase(saveNewArticle.fulfilled, (state, action: PayloadAction<NewsArticle>) => {
        state.pending = false;

        savedArticlesAdapter.addOne(state, action.payload);
      })
      .addCase(saveNewArticle.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
    builder
      .addCase(removeArticle.pending, (state) => {
        if (state.error) {
          state.error = false;
        }
        state.pending = true;
      })
      .addCase(removeArticle.fulfilled, (state, action: PayloadAction<string>) => {
        state.pending = false;

        savedArticlesAdapter.removeOne(state, action.payload);
      })
      .addCase(removeArticle.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const savedArticlesSelectors = savedArticlesAdapter.getSelectors<RootState>(
  (state) => state.savedArticles,
);

export const { removeAllArticles } = savedArticlesSlice.actions;
export default savedArticlesSlice.reducer;
