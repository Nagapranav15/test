import React from 'react'
import Counter from './Counter'
import DataFetch from './DataFetch'
const Home = () => {

  const products = [
    { id: 1, name: 'Blanket', price: 200 },
    { id: 2, name: 'Pillow', price: 150 },
    { id: 3, name: 'Bed Sheet', price: 100 },
    // Add more products as needed
  ];


  return (
    <div>
    <DataFetch/>
  </div>
    
  )
}

export default Home