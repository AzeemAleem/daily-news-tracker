import { useEffect } from "react";
import { fetchArticles } from "../api/nyt";
import ArticleList from "../components/ArticleList";
import { setArticles } from "../redux/reducers/articleSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const { articles } = useSelector((state) => state.article);

    useEffect(() => {
        fetchArticles(7).then((articles) => {
            dispatch(setArticles(articles));
        })
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <div>
            <ArticleList articles={articles} />
        </div>
    );
};

export default Home;
