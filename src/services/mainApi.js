import axios from "axios";

// TODO: js to ts;

export const mainApi = axios.create({
  baseURL: 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json'
  }
})

const postArticle = (article) => {
  return mainApi.post('/articles', article)
}

const deleteArticle = (articleId) => {
  return mainApi.delete(`/articles/${articleId}`);
}


const getSavedArticles = () => {
  return mainApi.get('/articles');
}

export { deleteArticle, getSavedArticles, postArticle };
