import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  if (loading) return <i>Cargando...</i>;

  return (
    <div>
      {gifs.map((singleGif) => (
        <Gif
          key={singleGif.id}
          id={singleGif.id}
          title={singleGif.title}
          url={singleGif.url}
        />
      ))}
    </div>
  );
}
