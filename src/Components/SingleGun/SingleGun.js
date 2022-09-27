import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = ({ singleGun, setCartCount, cartCount, subTotal, setSubTotal, setCartDetails}) => {
    const [modalDetail, setModalDetail] = useState(null)
    const { name, action, category, img, price, id} = singleGun;
    
    
    const addToCart = () =>{
        setCartCount(cartCount+1);
        setSubTotal(subTotal+parseInt(price));

        let productsCart;
        const lsStoredProducts = localStorage.getItem('products');
        if(lsStoredProducts){
            productsCart = JSON.parse(lsStoredProducts);
        }
        else{
            productsCart = {};
        }

        const lsProducts = productsCart[name];
        if(lsProducts){
            productsCart[name] = price;
        }
        else{
            productsCart[name] = price;
        }
        localStorage.setItem('products', JSON.stringify(productsCart));

        const localStorageStoredProducts = localStorage.getItem('products');
        setCartDetails(JSON.parse(localStorageStoredProducts));
        
        
    }
    return (

        <div>
            <div className="card w-full bg-slate-500 shadow-xl p-3 h-96">
                <figure>
                    <img className='rounded-lg h-52 w-80' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center mb-3'>
                        <h1 className="card-title text-xl text-secondary text-center">{name}</h1>
                        <div className="badge badge-secondary mt-[5px]">{category}</div>
                    </div>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline bg-success">{price}$</div>
                        <div className="badge badge-outline bg-error text-secondary font-bold">{action}</div>
                    </div>
                    <div>
                        <button onClick={addToCart} className="btn btn-sm btn-secondary mr-2">Add To Cart</button>
                        
                        {/* Modal Button */}
                        <label onClick={() => setModalDetail(singleGun)} htmlFor="my-modal-6" className="btn btn-sm btn-accent modal-button">Details</label>
                    </div>
                </div>
                {
                    modalDetail && <Modal modalDetail={modalDetail} setModalDetail= {setModalDetail} key={id}></Modal>
                }
            </div>
        </div>
        
    );
};

export default SingleGun;