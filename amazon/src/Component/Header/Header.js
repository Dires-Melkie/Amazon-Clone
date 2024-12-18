import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import {SlocationPin} from "react-icons/sl";
import {BsSearch} from "react-icons/sl";
import {BiCart} from "react-icons/sl";

const Header = () => {
  return (
    <>
        <section>
            <div className='header_container'>
                <div className='logo_container'>
                    <Link to='/'>
                        <img src='https://pnging.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
                    </Link>
                    <div className='delivery'>
                        <span>
                            <SlocationPin />
                        </span>
                        <div>
                            <p>Delivet to</p>
                            <span>Ethiopia</span>
                        </div>
                    </div>
                </div>
                <div className='search'>
                    <select name='' id=''>
                        <option value={2}>All</option>
                    </select>
                    <input type='text' />
                    <BsSearch size={25} />
                </div>
                <div className='order_container'>
                    <Link to='#' className='language'>
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/
                        1024px-Flag_of_the_United_States.svg.png' alt='languge logo' />
                        <select name='' id=''>
                            <option value={2}>EN</option>
                        </select>
                    </Link>
                    <Link to='/Auth'>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </Link>
                    <Link to='/Orders'>
                        <p>returns</p>
                        <span>& Orders</span>
                    </Link>
                    <Link to='/Cart' className='cart'>
                        <BiCart size={35} />
                        <span>0</span>
                    </Link>
                </div>
            </div>
        </section>    
    </>
  )
}

export default Header
