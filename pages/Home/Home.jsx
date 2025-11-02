import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// AppDownload removed per request

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
  <Header/>
  <ExploreMenu setCategory={setCategory} category={category}/>
  <FoodDisplay category={category}/>
    </>
  )
}

export default Home
