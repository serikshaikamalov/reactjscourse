import React, { useEffect, useState } from "react";

/**
 * 1. Сабақтарды қарап шығу және сұрақтарды дайындау
 * 2. Random image
 * 3. https://jsonplaceholder.typicode.com/ - ойнау
 * 4. HTTP запрос түрлері: GET, POST, PUT, PATCH, DELETE
 * @returns
 */
const Random = () => {
  const [image, setImage] = useState("");

  const randomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((res) => {
        console.log("Result: ", res);
        setImage(res.message);
      });
  };

  const postArticle = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
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

  // [] => 1 time run
  useEffect(randomImage, []);

  useEffect(postArticle, []);

  return (
    <div style={{ width: 500, margin: "100px auto" }}>
      <div>
        <img src={image} alt="Random image" />
      </div>
      <button onClick={randomImage}>Next random image</button>
    </div>
  );
};

export default Random;
