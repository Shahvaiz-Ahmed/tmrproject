import React from 'react';
import RecomendedItemCard from './RecomendedItemCard';
import './Static/css/RecomendedItems.css'

function RecomendedItems() {
  return (
    <div className='classContainer'>
      <h1>RecomendedItems:</h1>
      <div className="Itemcards">        
      <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/>
        <RecomendedItemCard/></div> 
    </div>
  )
}

export default RecomendedItems