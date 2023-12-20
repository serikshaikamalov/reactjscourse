import React, { useEffect, useState } from "react";

const students = ["Soltan", "Muslim", "Madi"];

const RandomImage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(students);

  // Функция = hook
  // Подписка
  /**
   * Подписка на локальную состояние
   * HTTP запрос
   * Animation
   * DOM man.
   * setTimer
   * setInterval
   */
  useEffect(() => {
    console.log("Search", search);

    const result = students.filter((s) =>
      s.toLowerCase().includes(search.toLowerCase())
    );
    setData(result);
  }, [search]);

  const postArticle = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?query=${search}`, {
      method: "POST",
      body: JSON.stringify({
        title: "Test",
        body: "Test body",
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        console.log("Result: ", res);
      });
  };

  useEffect(postArticle, [search]);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {data.map((s, index) => {
        return <div key={index}>{s}</div>;
      })}
    </div>
  );
};

export default RandomImage;
