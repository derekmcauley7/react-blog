import articles from "./article-content";
import { Link } from "react-router-dom";

const ArticlesListPage = () => {
    return (
        articles.map(
            article => (
            <div key={article.name}>
                <h1>{article.title}</h1>
                <p>{article.content.slice(0,1)}</p>
                <Link to={`/articles/${article.name}`}>View </Link>
            </div>
            ))
    );
}

export default ArticlesListPage;