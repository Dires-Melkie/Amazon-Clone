import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import LayOut from '../../Component/LayOut/LayOut'
import Catagory from '../../Component/Catagory/Catagory'
import Product from '../../Component/Product/Product'

const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Catagory />
      <Product />
    </LayOut>
  )
}

export default Landing
