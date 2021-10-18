import React, {useState, useEffect} from 'react';
import '../css/cartScreen.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import logo from '../assets/logo-black.png'

const ListofCart = ({cartcontents, removeItem}) => {

  const [listCart, setCart] = useState([cartcontents])
  const [amount, setAmount] = useState([1])

  const Decrease = () => {
    if (amount < 1){
      setAmount(1)
    }
    else{
      setAmount(amount-1)
    }
  }

  const Increase = () => {
    if (amount > 99){
      setAmount(99)
    }
    else{
      setAmount(amount+1)
    }
  }

  const TotalPrice = () =>{
    let total = 0
    
    for(let i=0; i<cartcontents.length; i++){
      let cartItemPrice = Number(cartcontents[i].price)
      let cartItemAmount = Number(cartcontents[i].amount)
      total = total + (cartItemPrice * cartItemAmount)
    }

    return total
  }

  return(
    <div className="cartDisplay">
      <table className="cartTable">
        <tr>
          <th>ITEM</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>ITEM TOTAL</th>
        </tr>

        {cartcontents.map((item) => (
          <tr>
            <td>{item.photo}</td>
            <td>{item.price}</td>
            <td>
              <div className="quantityBtn">
                  <button onClick = {Decrease} className="decrement"> - </button>
                  <input type="number" value={amount} className="qtyInput"/>
                  <button onClick = {Increase} className="incriment"> + </button>
              </div>
            </td>
            <td>{setAmount(item.quantity)}</td>
          </tr>
        ))}

      </table>
      
        <Link to='/Checkout'>
          <button className="checkoutButton">Checkout   <i className="inline-icon material-icons">trending_flat</i></button>  
        </Link>


          {/* {cartcontents.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.productid}`}><img src={item.photo} alt="bread"></img></Link><br></br>
              Product Name: {item.name}<br></br>
              Price: {item.price} <br></br>
              Amount: {setAmount(item.quantity)}
              <div className="quantityBtn">
                <button onClick = {Decrease} className="decrement"> - </button>
                <input type="number" value={amount} className="qtyInput"/>
                <button onClick = {Increase} className="incriment"> + </button>
              </div>
              <button onClick={() => removeItem(item)}>Delete Item</button>
            </li>
          ))}         */}
  
      </div>
       
      )
}


// const Cart = ({cartcontents, removeItem}) => {

//   const [listCart, setCart] = useState([cartcontents])
//   const [amount, setAmount] = useState([1])

//   const Decrease = () => {
//     if (amount < 1){
//       setAmount(1)
//     }
//     else{
//       setAmount(amount-1)
//     }
//   }

//   const Increase = () => {
//     if (amount > 99){
//       setAmount(99)
//     }
//     else{
//       setAmount(amount+1)
//     }
//   }

//   const TotalPrice = () =>{
//     let total = 0
    
//     for(let i=0; i<cartcontents.length; i++){
//       let cartItemPrice = Number(cartcontents[i].price)
//       let cartItemAmount = Number(cartcontents[i].amount)
//       total = total + (cartItemPrice * cartItemAmount)
//     }

//     return total
//   }

// }


  
  // const ListofCart = () => {

  //   return(
  //     <div className="cartScreen">

  //     {cartcontents.map((item) => (
  //       <li key={item.id}>
  //         <Link to={`/products/${item.productid}`}><img src={item.photo} alt="bread"></img></Link><br></br>
  //         Product Name: {item.name}<br></br>
  //         Price: {item.price} <br></br>
  //         Amount: {setAmount(item.quantity)}
  //         <div className="quantityBtn">
  //           <button onClick = {Decrease} className="decrement"> - </button>
  //           <input type="number" value={amount} className="qtyInput"/>
  //           <button onClick = {Increase} className="incriment"> + </button>
  //         </div>
  //         <button onClick={() => removeItem(item)}>Delete Item</button>
  //       </li>
  //     ))}

  //     <h1>Hello World</h1>
      

  //   </div>
    
    
  //   )
  // }
  
  // return (
  //   <>
  //     <h3>User Login details here</h3>
  //     {/* {ListofCart} */}
  //     Total Price: {TotalPrice}
  //   </>
  // )
  


export default ListofCart;