import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.const";
import { CharacterGallery } from "./components/CharactersGallery";
import './CharacterPage.scss'


export function CharactersPage() {

  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    API.get("/api/show/characters").then((res) => {
        console.log(res)
      setCharacters(res.data);
    });
  };

  useEffect(getCharacters, []);

  return (
    <div className="global">
      <CharacterGallery charactersGallery={characters}></CharacterGallery>
    </div>
  );
}
