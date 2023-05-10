export const ROUTES = Object.freeze({
  notFound: './not-found',
  savedNews: '/saved-news',
  main: '/',
});

export const LIMIT: number = 3;

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_LOCAL_API_URL
    : process.env.REACT_APP_SERVER_API_URL;
