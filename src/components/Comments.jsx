import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { makeCommentsList } from "../../api-calls/api-comments-processing"
import "../../styling/Comments.css"

function Comments() {
    const [comments, setComments] = useState([])
    const { article_id } = useParams();
    useEffect(() => {
        makeCommentsList(article_id).then((commentCards) => {
            setComments(commentCards)
        })
    }, [])
    return <div className="comment-cards-container">
        {comments}
    </div>
}

export default Comments