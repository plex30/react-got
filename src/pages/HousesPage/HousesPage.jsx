import React, { useEffect, useState } from "react";
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import { Menu } from "../../core/components/Menu/Menu";
import { API } from "../../shared/consts/api.const";
import { HousesGallery } from "./HousesGallery/HousesGallery";

export function HousesPage() {
  const [casas, setCasas] = useState([]);
  const [search , setSearch] = useState([]);
  const localHouseWithImage = [];

  const getCasas = () => {
    API.get("/api/show/houses").then((res) => {
      
      for (const house of res.data) {
        if (house.logoURL != undefined) {
          localHouseWithImage.push(house);
        }
      }
    
        setCasas(localHouseWithImage);
      
       
     
    })
  };

  const filterItem = ()=>{
    if (search) {
      const filterHouse = casas.filter((house)=>{
        
        if (house.name.toLowerCase().includes(search.toLowerCase())) {
            return casas;
        }
      })
      setCasas(filterHouse);
    }
      
               
  }

  useEffect(getCasas,[]);
  useEffect(()=>{
    if (search) {
      filterItem();
    }else{
      getCasas();
    }
  }, [search]);

  return (
    <div>
      <IntoBar handleChange={(e)=> setSearch(e.target.value)}></IntoBar>
      <HousesGallery casa={casas} />
      <Menu></Menu>
    </div>
  );
}
