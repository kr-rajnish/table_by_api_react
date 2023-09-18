import "./styles.css";

import { useState } from "react";

export default function App() {
  const [Data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.log(error));
  return (
    <div className="App">
      <div className="header">
        <h1 className="text_head">featching API table</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => {
            return (
              <>
                <tr>
                  <th>{item.id}</th>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
