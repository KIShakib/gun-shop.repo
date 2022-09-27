import React from 'react';

const Modal = ({ modalDetail, setModalDetail }) => {

    const { name, action, bullet, capacity, category, img, price} = modalDetail;
    const handleClose = () => {
        setModalDetail(null)
    }
    
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-secondary my-3">{name}</h3>
                    <img className='w-64 mx-auto rounded-lg' src={img} alt="" />
                    <div className='my-3'>
                        <div className="card-actions justify-center my-4">
                            <div className="badge badge-secondary">Category: {category}</div>
                            <div className="badge badge-outline bg-error text-secondary font-bold">Action: {action}</div>
                        </div>
                        <div className='my-4'>
                            <div className="badge badge-outline bg-error text-secondary font-bold mr-4">Capacity: {capacity}</div>
                            <div className="badge badge-secondary">Bullet: {bullet}</div>
                        </div>
                        <div className="badge badge-outline bg-success">Price: {price}$</div>
                    </div>
                    <div className="modal-action">
                        <label onClick={handleClose} htmlFor="my-modal-6" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;