import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie"; // Import Movie component

function App() {
  const [data, setData] = useState(null); // State for storing fetched data

  function renderMovie(movie) {
    return <Movie key={movie.id} movieInfo={movie} />; // Pass movie object as prop
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
    };

    fetchData();
  }, []);

  // Ensure data exists before mapping
  return (
      <>
        {data && data.results.map((movie) => renderMovie(movie))}
      </>
  );
}

export default App;
