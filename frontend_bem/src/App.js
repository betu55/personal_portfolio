import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api_bem/test/")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching the API:", error));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Django + React</h1>
      <p>{message}</p>
      {console.log(message)}
    </div>
  );
}

export default App;
