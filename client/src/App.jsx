import { useState } from 'react';
import "./App.scss";
import styles from './index.module.css';
import sql from './assets/sql.png';

function App() {

  const [query, setQuery] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery);
  };

  const generateQuery = async() => {
    const res = await fetch("http://localhost:8800/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({query})
    });

    const data = await res.json();
    return data.response.trim();

  }

  return (
    <main className={styles.main}>
      <img src={sql} alt="" className={styles.icon}/>
      <h3>Generate sql with ai</h3>

      <form action="" onSubmit={handleSubmit} >
        <input type="text" name="query" placeholder="Describe your query" onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" value="Generate query" />
        <pre>{sqlQuery}</pre>
      </form>


    </main>
  )
}

export default App
