import { useParams } from "react-router-dom";
import articles from "./article-content.js";

const ArticlePage = () => { 
    const { articleId } = useParams(); 
    const article = articles.find(article => article.name === articleId);
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticlePage;