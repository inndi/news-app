import axios, { CancelToken } from 'axios';

import { getXDateFromNow } from '../utils/dateUtils';

const NEWS_URL: string = 'https://nomoreparties.co';

interface UnnormalizedNewsCard {
  source: { id: null | string; name: string };
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsCardsResponse {
  data: {
    status: string;
    totalResults: number;
    articles: UnnormalizedNewsCard[];
    keyword: string;
  };
}

const currentDate: string = new Date().toLocaleDateString('en-CA');

export const getArticles = (
  keyword: string,
  cancelToken: CancelToken,
): Promise<NewsCardsResponse> => {
  return axios.get(`${NEWS_URL}/news/v2/everything`, {
    params: {
      q: keyword,
      apiKey: 'c5d8f41ce48242b088b85eeb364070b1',
      from: currentDate,
      to: getXDateFromNow(6),
      pageSize: 100,
    },
    cancelToken: cancelToken,
  });
};
//81b7b58200564c21ab97251b3589f483 - extra apiKey;
