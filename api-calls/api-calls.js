import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://news-api-q4xk.onrender.com/api",
});

export function getArticles(params) {
  return newsAPI
    .get("/articles", params)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err.response.data;
    });
}

export function getArticle(article_id) {
  return newsAPI
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      throw err.response.data;
    });
}

export function getComments(article_id) {
  return newsAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function voteComment(article_id, increment) {
  return newsAPI
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data.article;
    });
}

export function postComment(article_id, newComment) {
  return newsAPI
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
}

export function deleteComment(comment_id) {
  return newsAPI.delete(`/comments/${comment_id}`);
}

export function getTopics() {
  return newsAPI.get("/topics").then(({ data }) => {
    return data.topics;
  });
}
