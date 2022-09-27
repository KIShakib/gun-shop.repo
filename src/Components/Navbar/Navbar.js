import React, { useState } from 'react';
import CartDetails from '../CartDetails/CartDetails';
import Price from '../Price/Price';

const Navbar = ({setSearchFieldValue, cartDetails}) => {
    const getSearchFieldValue = (event) =>{
        if(event.key === "Enter"){
            setSearchFieldValue(event.target.value)
        }
    }

    const productName = [];
    const productCost = [];

    for(const[key, value] of Object.entries(cartDetails)){
        productName.push(key);
        productCost.push(value);
    };
    const sum = productCost.reduce((init, cost) => {
        return (parseInt(init) + parseInt(cost));
    }, 0);



    const clearCart = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (
        <div>
            <div className="navbar bg-slate-500 shadow-lg px-10">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-4xl font-bold">Top Gun Store</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{productName.length}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow border-slate-400 border">
                            <div className="card-body">

                                <div>
                                    <div  className='flex justify-around  border border-blue-400 rounded-lg'>
                                        <div>
                                            {
                                                productName.map(product => <CartDetails product={product}></CartDetails>)
                                            }
                                        </div>
                                        <div>
                                            {
                                                productCost.map(price => <Price price={price}></Price>)
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-around'>
                                    <span className="font-bold">Items {productName.length}</span>
                                    <span className="font-bold">Subtotal: ${sum}</span>
                                </div>
                                <div className="card-actions">
                                    <button onClick={clearCart} className="btn btn-primary btn-block">Clear Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mx-3 h-8">
                        <input onKeyPress={getSearchFieldValue} type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt='abc' src="./handgun.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between" href='/'>
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;