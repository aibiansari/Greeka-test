// Cards.tsx

import { cardData } from "@/app/assets/data";
import React from "react";
import Card from "./Card";

const Cards: React.FC = () => {
  return (
    <>
      {cardData.map((data: any) => (
        <Card key={data.id} {...data} />
      ))}
    </>
  );
};

export default Cards;
