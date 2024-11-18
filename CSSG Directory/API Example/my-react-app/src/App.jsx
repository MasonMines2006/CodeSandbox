import { useState, useEffect } from "react";
import "./App.css";
import movieInfo from "./components/Movie.jsx";
function App() {
  const [data, setData] = useState(null); // Declare state for storing fetched data

  function renderMovie(movieInfo) {
    return <>Movie props = {movieInfo}</>
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjA4NWUwNDExZjAwMTY3NzljN2FmNTU2MTdiNzI4ZiIsIm5iZiI6MTczMTk2MzAyMy45NTI4NzgsInN1YiI6IjY3MzI5MWQ2YmMzZmY3YjRkMWJmMDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c50WYwFUp1yJpvaxL6awUJLJ-R7B50OLZdy7aYYVtc8",
        },
      };

      try {
        const res = await fetch(url, options);
        const json = await res.json();
        console.log(json);
        setData(json); // Save fetched data to state
      } catch (err) {
        console.error(err);
      }
      setData(await myResponse.json());
    };

    fetchData();
  }, []);

  console.log(data)

  return (
      <>
        {data.map((movieInfo) => renderMovie())}
      </>
  );
}

export default App;
