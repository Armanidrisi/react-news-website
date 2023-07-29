import { useContext, useEffect } from "react";
import NewsCard from "./NewsCard";
import newsContext from "../context/news/newsContext";
import Loader from "./Loader";

const Home = () => {
  const { news, loading, topHeadlines } = useContext(newsContext);

  useEffect(() => {
    topHeadlines();
  }, []);

  return (
    <div className="row">
      <h1 className="mb-3">Top Headlines </h1>
      {loading ? (
        <Loader />
      ) : (
        news.map((element, index) => <NewsCard key={index} news={element} />)
      )}
    </div>
  );
};

export default Home;
