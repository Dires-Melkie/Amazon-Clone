import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import LayOut from'../../Component/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../Component/Product/ProductCard'
import Loder from '../../Component/Loder/Loder'
const ProductDetail = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{ 
      setProduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  },[])
  return (
    <LayOut>
      {isLoading? (<Loder />):( <ProductCard 
        product={product}
        flex={true}
        renderDesc={true}
      />)}
    </LayOut>
  )
}

export default ProductDetail
