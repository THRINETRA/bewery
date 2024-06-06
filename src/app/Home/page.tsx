"use client";
import React, { ReactNode, useState } from "react";
import MainTemplate from "@/template";
import Breweries, { Brewery } from "@/containers/Maincontent/page";

// interface Props {
//   children?: ReactNode;
// }

const Mainrender: React.FC = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  const filterData = (name: string) => {
    const filteredData = breweries.filter((brewerie) => {
      return (
        brewerie.name.toLowerCase().includes(name.toLowerCase()) ||
        brewerie.city.toLowerCase().includes(name.toLowerCase()) ||
        brewerie.brewery_type.toLowerCase().includes(name.toLowerCase())
      );
    });
    setBreweries(filteredData);
    return filteredData;
  };

  return (
    <MainTemplate filterData={filterData}>
      <Breweries setBreweries={setBreweries} breweries={breweries} />
    </MainTemplate>
  );
};

export default Mainrender;
