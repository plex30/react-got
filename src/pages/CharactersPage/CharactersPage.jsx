import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.const";
import { CharacterGallery } from "./components/CharactersGallery";
import './CharacterPage.scss'
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import { Menu } from "../../core/components/Menu/Menu";


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
    <IntoBar></IntoBar>
      <CharacterGallery charactersGallery={characters}></CharacterGallery>
    <Menu></Menu>
    </div>
  );
}
