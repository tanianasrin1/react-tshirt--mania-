import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home= () => {
    const [tShirts, setTShirts] = useTShirts()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id)
        if(!exists){
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else{
            alert('item already added')
        }
        // const newCart = [...cart, selectedItem]
        // setCart(newCart)
    }
    
    const handleRemoveFromCart  = (selectedItem) => {
      
          const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id )
          setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                
                {
                   tShirts.map(tShirt => <TShirt
                     key = {tShirt._id}
                     tShirt = {tShirt}
                     handleAddToCart = {handleAddToCart}
                   ></TShirt>) 
                }
            </div>
            <div className="cart-container">
               <Cart 
               handleRemoveFromCart = {handleRemoveFromCart}
               cart = {cart} 
               ></Cart>
            </div>
        </div>
    );
};

export default Home;