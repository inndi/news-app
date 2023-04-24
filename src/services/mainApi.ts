import { EntityId } from '@reduxjs/toolkit';
import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

import { NewsArticle } from '../interfaces/interfaces';

interface AxiosCustomHeaders extends AxiosHeaders {
  Authorization?: string;
}

export const mainApi = axios.create({
  baseURL: 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json',
  },
});

mainApi.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  } as AxiosCustomHeaders;
  return config;
});

const postArticle = (article: NewsArticle) => {
  return mainApi.post('/articles', article);
};

const deleteArticle = (articleId: EntityId) => {
  return mainApi.delete(`/articles/${articleId}`);
};

const getSavedArticles = () => {
  return mainApi.get('/articles');
};

export { deleteArticle, getSavedArticles, postArticle };
