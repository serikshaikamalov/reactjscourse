import React, { useEffect, useState } from "react";
import "./articles.css";
import { data } from "./data";

const Articles = () => {
  const [articles, setArticles] = useState(data);
  const [search, setSearch] = useState("");

  // Подписка на изменения
  /**
   * [] - тек бір рет орындалады
   * [search] - search өзгерген сайын осы функция әр дайым орындалады
   *
   * useEffect - сайд эффект.
   * setTimer
   * setInterval
   * Animation
   * DOM man.
   * Requests - http запростар
   */
  useEffect(() => {
    console.log("Search: ", search);
    const result = data.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()));
    setArticles(result);
  }, [search]);

  return (
    <div className="container">
      <input
        type="search"
        placeholder="Enter a query"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {articles.map((a) => {
          return (
            <div className="article" key={a.id}>
              <h3>{a.title}</h3>
              <div>
                <img src={a.image} />
              </div>
              {a.content && <p>{a.content}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
