import React, { useEffect, useState } from 'react';
import RecomendedItemCard from './RecomendedItemCard';
import './Static/css/RecomendedItems.css';
import { CarouselWrapper } from "react-pretty-carousel";

function RecomendedItems() {
  const [items, setItems] = useState(3);

  useEffect(() => {
    if (window.innerWidth > 1452 || window.screen.width > 1452) setItems(3);
    else if ((window.innerWidth < 1452 && window.innerWidth > 900) || (window.screen.width < 1452 && window.screen.width > 900)) setItems(2);
    else if (window.innerWidth < 900 || window.screen.width < 900) setItems(1);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1452 || window.screen.width > 1452) setItems(3);
      else if ((window.innerWidth < 1452 && window.innerWidth > 900) || (window.screen.width < 1452 && window.screen.width > 900)) setItems(2);
      else if (window.innerWidth < 900 || window.screen.width < 900) setItems(1);
    });
  }, []);
  return (
    <div className='classContainer'>
      <h1><strong>Recomended Items:</strong></h1>
      <div className="Itemcards"> 
      <CarouselWrapper className="car" items={items} mode="gallery">
      <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
      </CarouselWrapper>
      </div> 
    </div>
  )
}

export default RecomendedItems