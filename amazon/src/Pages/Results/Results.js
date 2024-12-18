import React, { useEffect, useState } from 'react'
import './Results.css'
import LayOut from'../../Component/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import { productUrl } from '../../Api/endPoint'
import axios from 'axios'
import ProductCard from '../../Component/Product/ProductCard'

const Results = () => {
  const [results, setResults] = useState([]);
  const {categoryName}= useParams()
  useEffect(()=>{
  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
    setResults(res.data)
  }).catch((err)=>{
    console.log(err)
  })
  },[])
  return (
    <LayOut>
      <section>
        <h1 style={{padding: "30px"}}>Results</h1>
        <p style={{padding: "30px"}}>Catagory/{categoryName}</p>
        <hr />
          <div className='products_container'>
            {results?.map((product) =>(
              <ProductCard
              key={product.id}
              product={product} 
              />
            ))
            
            }
          </div>
      </section> 
    </LayOut>
  )
}

export default Results
