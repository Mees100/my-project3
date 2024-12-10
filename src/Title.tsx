import styles from "./sass/Title.module.scss";

import { ChangeEvent, useEffect, useState } from "react";

type Article = {
  createdAt: string;
  title: string;
  description: string;
  author: string;
  id: string;
};

function getTitles(): Promise<Article[]> {
  const request = fetch("https://672b990a1600dda5a9f5ab94.mockapi.io/tasks");
  return request.then((response) => response.json());
}

function Titles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    getTitles().then((Response) => setArticles(Response));
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.currentTarget.value);
  };

  const reset = () => {
    setFilterValue("");
  };

  const displayArticles = articles.filter((article: Article) => {
    if (filterValue === "") {
      return true;
    }

    return article.title.includes(filterValue);
  });

  const listTitles = displayArticles.map((article) => (
    <>
      <h4>Title: {article.title}</h4>
      <p>Author: {article.author}</p>
    </>
  ));

  return (
    <>
      <h2>Select title</h2>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="type"
          value={filterValue}
          onChange={onChange}
        ></input>
        <button onClick={reset}>Reset</button>

        <div className={styles.ray}>{listTitles}</div>
      </div>
    </>
  );
}

export default Titles;
