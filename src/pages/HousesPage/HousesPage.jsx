import React, { useContext, useEffect, useState } from "react";
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import { LoadingContext } from "../../core/components/Loading/context/LoadingContext";
import { Menu } from "../../core/components/Menu/Menu";
import { API } from "../../shared/consts/api.const";
import { HousesGallery } from "./HousesGallery/HousesGallery";
import './HousesPage.scss';

export function HousesPage() {
  const [casas, setCasas] = useState([]);
  const [search , setSearch] = useState([]);
  const localHouseWithImage = [];
  const {setIsLoading} = useContext(LoadingContext);

  const getCasas = () => {
    setIsLoading(true)
    API.get("/api/show/houses").then((res) => {
      setIsLoading(false)
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
    <div className="c-housesPage">
      <IntoBar handleChange={(e)=> setSearch(e.target.value)}></IntoBar>
      <HousesGallery casa={casas} />
      <Menu></Menu>
    </div>
  );
}
