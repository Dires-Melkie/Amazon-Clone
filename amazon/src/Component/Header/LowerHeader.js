import React from 'react'
import {AiOutlinemenu} from "react-icons/ai";
import "./Header.css"
const LowerHeader = () => {
  return (
    <div className='lower_container'>
        <ul>
            <li>
                <AiOutlinemenu />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Costumer service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>sell</li>
        </ul>     
    </div>
  )
}

export default LowerHeader
