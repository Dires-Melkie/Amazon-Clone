import React from 'react'
import {catagoryInfos} from './catagoryFullInfos'
import CatagoryCard from './CatagoryCard' 
import './Catagory.css'

const Catagory = () => {
  return (
    <section className='catagory_container'>
        {
            catagoryInfos.map((infos)=>(
                <CatagoryCard data = {infos}/>
            ))
        }
    </section>
  )
}

export default Catagory
