import NewsContext from "./newsContext";
import { useState } from "react";

const NewsState = ({ children }) => {
  const API = "https://newsapi.org/v2";
  const API_KEY = "";

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const topHeadlines = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API}/top-headlines?country=in&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (e) {
      setLoading(true);
    }
  };
  const searchNews = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API}/everything?q=${query}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (e) {
      setLoading(true);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        loading,
        topHeadlines,
        searchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsState;
