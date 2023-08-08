import React, { createContext, useState, useEffect } from 'react'
import './Home.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import data from '../Data';
import Cart from './Cart';
import {LoginContext} from './Context/LoginContext';



const Home = () => {
    const Navigate = useNavigate();
    const [cards, setCards] = useState(data);


    const filterData = (type) => {
        const filteritem = data.filter((elem) => {
            return elem.catigoes == type;
        })
        setCards(filteritem);
    }



    const [first, setfirst] = useState("hello")


    return (
        
             <LoginContext.Provider value={first}>
                <div id='home' className='home-main'>
                    <div className='home-left'>
                        <h1 className='home-txt'>UpCLoth<span className='span'  > -Buy Clothese Now</span></h1>
                        <h1>India Number 1 <span>Clothing</span> Brand</h1>
                        <h4>20% Dicount In Every Sales</h4>
                        <p>
                            (UpCloth) is a contemporary clothing store in the heart of downtown that offers chic and stylish clothing for both men and women. From romantic lace and flowy maxi dresses to edgy leather jackets and timeless trench coats, this store has something for everyone.
                        </p>
                        <a href='#product'><button>BUY NOW</button></a>
                    </div>
                    <div className='home-right'>
                        <img src='../bg-pic.svg'></img>
                    </div>
                </div>

                <div id='product' className='product-main'>
                    <h1>All Products<span className='span2'>!</span></h1>
                    <div className="container">
                        <div className="product-left">
                            <h5>Filter By Category</h5>
                            <div className='div'>
                            <div className="filter">
                                <i className='bx bxs-right-arrow-circle'></i>
                                <p onClick={() => setCards(data)} >All</p>
                            </div>
                            <div className="filter">
                                <i className='bx bxs-right-arrow-circle'></i>
                                <p onClick={() => filterData('woman')} >Women</p>
                            </div>
                            <div className="filter">
                                <i className='bx bxs-right-arrow-circle'></i>
                                <p onClick={() => filterData('man')}>Men</p>
                            </div>
                            <div className="filter">
                                <i className='bx bxs-right-arrow-circle'></i>
                                <p>Child</p>
                            </div>
                            <div className="filter">
                                <i className='bx bxs-right-arrow-circle'></i>
                                <p>New Fashion</p>
                            </div>
                            </div>
                        </div><hr />
                        <div className="product-right">
                            <div className="box">

                                {
                                    cards.map((v) => {
                                        return (
                                            <div className="card" key={v.id}>
                                                <img src={v.img}></img>
                                                <div className="price">
                                                    <p>{v.name}</p>
                                                    <p className='p'>{v.price}</p>
                                                </div>
                                                <p className='desc'>{v.desc}</p>
                                                <div className="footer">
                                                    <button>More Details</button>
                                                    <button onClick={() => {





                                                    }}>ADD TO CART</button>
                                                </div>
                                            </div>

                                        );
                                    })
                                }






                            </div>
                        </div>
                    </div>
                </div>

                </LoginContext.Provider>
        



    )
}

export default Home
