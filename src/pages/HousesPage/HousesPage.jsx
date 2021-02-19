import React, { useEffect, useState } from "react";
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import { Menu } from "../../core/components/Menu/Menu";
import { API } from "../../shared/consts/api.const";
import { HousesGallery } from "./HousesGallery/HousesGallery";

export function HousesPage() {
  const [casas, setCasas] = useState([]);

  const getCasas = () => {
    API.get("/api/show/houses").then((res) => {
      const localHouseWithImage = [];

      for (const house of res.data) {
        if (house.logoURL != undefined) {
          localHouseWithImage.push(house);
        }
      }
      setCasas(localHouseWithImage);
    });
  };

  useEffect(getCasas, []);
  return (
    <div>
      <IntoBar></IntoBar>
      <HousesGallery casa={casas} />
      <Menu></Menu>
    </div>
  );
}
