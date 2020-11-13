import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const API_KEY = process.env.API_KEY;
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
