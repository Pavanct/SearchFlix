import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Trending from "./components/Trending/Trending";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = "https://api.themoviedb.org/3/";
  const [movies, setMovies] = useState();
  const [trending, setTrending] = useState();

  // call trending movies
  useEffect(() => {
    (async () => {
      let trendingEndpoint = API_URL + "trending/all/day?api_key=" + API_KEY;
      await axios.get(trendingEndpoint).then((res) => {
        console.log(res);
        setTrending(res.data);
      });
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      <Trending trending={trending} />
    </div>
  );
}

export default App;
