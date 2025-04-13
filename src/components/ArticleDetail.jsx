import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state?.article) {
        return (
            <div>
                No article data. <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    const { article } = state;

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.byline}</p>
            <p>{article.abstract}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read full article
            </a>
        </div>
    );
};

export default Detail;
