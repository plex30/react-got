import React, { useContext, useEffect, useState } from "react";
import { API } from "../../shared/consts/api.const";
import { CharacterGallery } from "./components/CharactersGallery";
import './CharacterPage.scss'
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import { Menu } from "../../core/components/Menu/Menu";
import { LoadingContext } from "../../core/components/Loading/context/LoadingContext";

let allChar = [];
export function CharactersPage() {
 
  const [characters, setCharacters] = useState([]);
  const [search , setSearch] = useState([]);
  const {setIsLoading} = useContext(LoadingContext);

  const getCharacters = () => {
    setIsLoading(true)
    API.get("/api/show/characters").then((res) => {
      setIsLoading(false)
        allChar = res.data;
        setCharacters(res.data)
      
       
      
      
    });
  };

  const filterItem = ()=>{

      const filterCharacters = allChar.filter((char)=>{
        
        if (char.name.toLowerCase().includes(search.toLowerCase())) {
            return char;
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
    <div className="c-charactersPage">
    <IntoBar handleChange={(e)=> setSearch(e.target.value)}></IntoBar>
      <CharacterGallery charactersGallery={characters}></CharacterGallery>
    <Menu></Menu>
    </div>
  );
}
