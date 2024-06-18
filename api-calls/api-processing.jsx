import { Card, CardFooter, ListGroup } from "react-bootstrap";
import { getArticles } from "./api-calls";
import "../styling/Articles.css";

export function makeArticleList(params) {
  return getArticles(params).then(({articles, total_count}) => {
    const articlesCards = articles.map((article) => {
      const formatTopic =
        article.topic.charAt(0).toUpperCase() + article.topic.slice(1);
        const formatDate = new Date(article.created_at).toLocaleString()
      return (
        <Card key={article.article_id} className="article-card">
          <Card.Header className="articles-header">
            <span>{formatTopic}</span>
            <span className="article-author">{article.author}</span>
          </Card.Header>
          <Card.Img src={article.article_img_url}></Card.Img>
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <div className="article-date">{formatDate}</div>
            <Card.Text>{article.body}</Card.Text>
          </Card.Body>
          <CardFooter className="articles-header">
            <span>{article.comment_count} comments</span>
            <span>{article.votes} votes</span>
          </CardFooter>
        </Card>
      );
    });
    return [articlesCards, total_count]
  });
}
