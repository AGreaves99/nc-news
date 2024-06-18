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