import React from 'react';

const CartDetails = ({product}) => {
    return (
        <div>
            <div  className='flex flex-col justify-around'>
                <h4 className='text-[10px]'>{product} :</h4>
            </div>
        </div>
    );
};

export default CartDetails;