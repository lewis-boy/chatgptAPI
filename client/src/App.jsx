import { useState } from 'react';
import "./App.scss";
import styles from './index.module.css';
import sql from './assets/sql.png';

function App() {

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  }

  return (
    <main className={styles.main}>
      <img src={sql} alt="" className={styles.icon}/>
      <h3>Generate sql with ai</h3>

      <form action="" onSubmit={handleSubmit} >
        <input type="text" name="query" placeholder="Describe your query" onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" value="Generate query" />
      </form>
    </main>
  )
}

export default App
