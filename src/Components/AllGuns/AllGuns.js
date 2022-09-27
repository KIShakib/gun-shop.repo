import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGuns = ({setCartCount, cartCount, subTotal, setSubTotal, searchFieldValue, cartProduct, setCartProduct, productPrice, setProductPrice, cartDetails, setCartDetails}) => {
    const [allguns, setAllguns] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json?fbclid=IwAR2eY3YCPFKFW9HCnwAM5QID90_e2ImnRAv0Okl6Mrbhg85R8V9U6_yIodc`)
            .then(res => res.json())
            .then(data => setAllguns(data))
    }, []);

    if(searchFieldValue){
        const searchFieldValueToLowerCase = searchFieldValue.toLowerCase();

        const singleGun = allguns.filter(gun => 
            gun.name.toLowerCase().includes(searchFieldValueToLowerCase)
            );

        return(
            <div className='mb-6'>
                <h1 className='my-8 text-4xl font-bold font-serif'>TOP GUN STORE BC</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-[80%] mx-auto'>
                    {
                        singleGun.map(singleGun => 
                        <SingleGun 
                            singleGun={singleGun} key={singleGun.id} setCartCount={setCartCount} cartCount={cartCount} subTotal={subTotal} setSubTotal={setSubTotal} cartProduct={cartProduct} setCartProduct={setCartProduct}  productPrice={productPrice} setProductPrice={setProductPrice} cartDetails={cartDetails} setCartDetails={setCartDetails}>
                        </SingleGun>
                        )
                    }
                </div>
            </div>
        )
    }




    return (
        <div className='mb-6'>
            <h1 className='my-8 text-4xl font-bold font-serif'>TOP GUN STORE BC</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-[80%] mx-auto'>
                {
                    allguns.map(singleGun => 
                    <SingleGun 
                        singleGun={singleGun} key={singleGun.id} setCartCount={setCartCount} cartCount={cartCount} subTotal={subTotal} setSubTotal={setSubTotal} cartProduct={cartProduct} setCartProduct={setCartProduct} productPrice={productPrice} setProductPrice={setProductPrice}  cartDetails={cartDetails} setCartDetails={setCartDetails}>
                    </SingleGun>
                    )
                }
            </div>
        </div>   
    );
};

export default AllGuns;