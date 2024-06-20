import { Card, CardFooter, ListGroup } from "react-bootstrap";
import { getArticle, getArticles } from "./api-calls";
import "../styling/Articles.css";
import { Link } from "react-router-dom";

export function makeArticleList(params) {
  return getArticles(params).then(({ articles, total_count }) => {
    const articlesCards = articles.map((article) => {
      const formatTopic =
        article.topic.charAt(0).toUpperCase() + article.topic.slice(1);
      const formatDate = new Date(article.created_at).toLocaleString();
      return (
        <Card key={article.article_id} className="article-card">
          <Card.Header className="articles-header">
            <span>{formatTopic}</span>
            <span className="article-author">{article.author}</span>
          </Card.Header>
          <Link className="card-link" to={`/${article.article_id}`}>
            <Card.Img
              src={article.article_img_url}
              alt="article image"
            ></Card.Img>
            <Card.Body className="article-date">{formatDate}</Card.Body>
            <Card.Body>
              <Card.Title className="article-title">{article.title}</Card.Title>
            </Card.Body>
          </Link>
          <CardFooter className="articles-footer">
            <span>{article.comment_count} comments</span>
            <span>{article.votes} votes</span>
          </CardFooter>
        </Card>
      );
    });
    return [articlesCards, total_count];
  });
}
