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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mt-16">Welcome to Django + React</h1>
      <p className="text-2xl my-5">{message}</p>
      {console.log(message)}
    </div>
  );
}

export default App;
