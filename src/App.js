import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <h1>Search your gif</h1>
      <div className="search">
        <Link to="/gif/panda">Panda gifs</Link>
        <Link to="/gif/mapache">Raccoon gifs</Link>
        <Link to="/gif/elefante">Elephant gifts</Link>
        <Link to="/gif/mono">Monkey gifs</Link>
        <Link to="/gif/perro">Dog gifs</Link>
        <Link to="/gif/gato">Cat gifs</Link>
        <Link to="/gif/tigre">Tiger gifs</Link>
      </div>

      <section className="App-content">
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}
