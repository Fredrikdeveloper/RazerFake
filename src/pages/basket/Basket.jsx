import React from 'react'
import { useCart } from "react-use-cart";
import  '../basket/StyleBasket.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'



const Basket = () => {
  
  const { items, isEmpty, updateItemQuantity, removeItem, clearCartMetadata   } = useCart();

  let total = 0;

  const del = (e) => {
    window.location.reload()
  }

  return (
    <div className='Basket-bg'>
      <Navbar />
      <div className='Basket-first__line mt-5'>
      <div className='Basket-first__line-text'>
        <h5>Devices</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Total</h5>
      </div>
    </div>

      

    {isEmpty ? <div className='empty-border'><h1 className='event-empty'>Cart is empty</h1></div>  : null}

    {items.map((item) => {
      const priceCount = item.count * item.price;
      total += priceCount; 
       


      if (item.count >= 1) {
        return (
          <div>
           


            <div className='d-flex justify-content-center flex-wrap'>
            <div id="remove" className='basket-card my-5' key={item.id}>
            <div className='basket-img'>
            <h6>{item.name}</h6>
            <img src={item.image} alt="" />
            </div>
            <div>
            <p>{priceCount} $</p>
            </div>
            <div className='btn-Menues'>
            <button onClick={() => updateItemQuantity(item.id, item.count--)}> -  </button>
            <p>{item.count}</p>
            <button onClick={() => updateItemQuantity(item.id, item.count++)}> + </button>
            </div>
             <div className='trash-bag'> 
             <i onClick={() => removeItem(item.id)} class="fa-regular fa-trash-can"></i>
             </div>
          </div>
            </div>
          </div>
        );
      } else {
        removeItem(item.id);
      }
    })}
             <div>
        <h2 className='container py-3 text-light'>Cart Totals</h2>
        
         <div className='basket-line'></div>
         <div className='basket-pricess container d-flex justify-content-between'>
          <h3 className='basket-white-text'>Total:</h3>
           <h3 className='basket-white-text'>{total} $</h3>
           <button className='delete-all-card' onClick={(e) =>  {
           del()
            localStorage.clear()
            }}>Order</button>
           
         </div> 
         
      </div>

   
    <Footer />
  </div>
  )
}

export default Basket
