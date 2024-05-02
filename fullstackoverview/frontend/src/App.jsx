import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
        axios.get('/api/jokes')
        .then((response) => {
              setJokes(response.data);
        })
        .catch((error) => {
              console.log(error);
        });
  }, []);

  return (
    <>
      <h1>Full Stack Overview</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <p>{joke.id}</p>
            <h4>{joke.title}</h4>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
