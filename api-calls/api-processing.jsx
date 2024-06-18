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
            <Card.Img src={article.article_img_url}></Card.Img>
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

export function makeSingleArticle(article_id) {
  return getArticle(article_id).then((article) => {
    const formatTopic =
      article.topic.charAt(0).toUpperCase() + article.topic.slice(1);
    const formatDate = new Date(article.created_at).toLocaleString();
    return (
      <Card className="single-article-card">
        <Card.Header className="single-article-header">
          <span>{formatTopic}</span>
          <span className="single-article-author">{article.author}</span>
        </Card.Header>
        <Card.Img src={article.article_img_url}></Card.Img>
        <Card.Body>
          <Card.Body className="single-article-date">{formatDate}</Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.body}</Card.Text>
        </Card.Body>
        <CardFooter className="single-article-header">
          <span>{article.comment_count} comments</span>
          <span>{article.votes} votes</span>
        </CardFooter>
      </Card>
    );
  });
}
