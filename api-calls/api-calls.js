import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://news-api-q4xk.onrender.com/api"
})

export function getArticles(params) {
    return newsAPI.get("/articles", params).then(({data}) => {
        return data
    })
} 

export function getArticle(article_id) {
    return newsAPI.get(`/articles/${article_id}`).then(({data}) => {
        return data.article
    })
}

export function getComments(article_id) {
    return newsAPI.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments
    })
}

export function voteComment(article_id, increment) {
    newsAPI.patch(`/articles/${article_id}`, {inc_votes: increment})
}