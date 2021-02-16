import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.const";
import { HousesGallery } from "./HousesGallery/HousesGallery";
 
export function HousesPage() {
 
 const [casas, setCasas] = useState([]);
 
 const getCasas = () => {
 API.get('/api/show/houses').then((res) => {
 
 const localHouseWithImage = [];
 
 for (const house of res.data) {
 if (house.logoURL != undefined) {
 localHouseWithImage.push(house);
 }
 }
 setCasas(localHouseWithImage);
 })
 }
 
 useEffect(getCasas, []);
 return (
 <div>
 <h1>CASAS</h1>
 <HousesGallery casa={casas}/>
 </div>
 );
}