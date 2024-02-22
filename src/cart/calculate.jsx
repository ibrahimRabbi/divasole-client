import React, { useContext } from 'react';
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';
 




const Calculate = ({data}) => {
    let quantitiy = 0
    let amount = 0  
    let discount = 10;
    let subTotal = 0
     
  
    data.forEach(v => {
        quantitiy = quantitiy + v.qnty
        amount +=  v.qnty * v.price
    });

    if (amount>0) {
    subTotal = amount - discount
    }
    
     
    return (
        <div className='border rounded-lg h-96 lg:sticky p-5 top-28'>
            <h1 className='text-center font-semibold'>Shopping Summery</h1>
            <div className='mt-5 text-zinc-950 text-sm'>
                <h1 className="  mt-2">Quantitiy : {quantitiy}</h1>
                <h1 className="  mt-2">Total Amount : {amount}-TK</h1>
                <h1 className="   mt-2">Total Vat : 00-TK</h1>
                <h1 className=" mt-2">Discount : {discount}-TK</h1>
                <div className="divider"></div>
                <h1 className="text-2xl text-gray-900 font-semibold rounded-lg mt-2">Sub Total : {subTotal}-TK</h1>
                <Link to='/place-order' state={{subTotal,items:data}} className='bg-gradient-to-r mt-16 block from-red-500 to-amber-500 p-2 text-center font-semibold text-zinc-900 text-sm rounded-lg w-full'>proceed to Checkout</Link>
            </div>
        </div>



    );
};

export default Calculate;