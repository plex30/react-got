import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.const";
import { CharacterGallery } from "./components/CharactersGallery";
import './CharacterPage.scss'
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import { Menu } from "../../core/components/Menu/Menu";


export function CharactersPage() {

  const [characters, setCharacters] = useState([]);
  const [search , setSearch] = useState([]);

  const getCharacters = () => {
    
    API.get("/api/show/characters").then((res) => {
      
     
        setCharacters(res.data)
      
       
      
      
    });
  };

  const filterItem = ()=>{

      const filterCharacters = characters.filter((char)=>{
        
        if (char.name.toLowerCase().includes(search.toLowerCase())) {
            return characters;
        }
      })
     
        setCharacters(filterCharacters);
                    
  }

  
  
  useEffect(getCharacters, [])
  useEffect(()=>{
    if (search) {
      filterItem();
    }else{
      getCharacters()
    }
  }, [search]);


  return (
    <div className="global">
    <IntoBar handleChange={(e)=> setSearch(e.target.value)}></IntoBar>
      <CharacterGallery charactersGallery={characters}></CharacterGallery>
    <Menu></Menu>
    </div>
  );
}
