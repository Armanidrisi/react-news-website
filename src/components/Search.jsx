import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import newsContext from "../context/news/newsContext";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

const Search = () => {
  const { query } = useParams();
  const { news, loading, searchNews } = useContext(newsContext);
  useEffect(() => {
    searchNews(query);
    //  console.log(news, loading);
  }, [query]);
  return (
    <div className="row">
      <h1 className="mb-3">Search results for '{query}'</h1>
      {loading ? (
        <Loader />
      ) : (
        news.map((element, index) => <NewsCard key={index} news={element} />)
      )}
    </div>
  );
};

export default Search;
