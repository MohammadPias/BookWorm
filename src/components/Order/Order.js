import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import CartAccount from '../Cart/CartAccount';
import { removeFromDb } from '../Hooks/AddToDb';
import useCart from '../Hooks/useCart';
import useFirebase from '../Hooks/useFirebase';
import NavMenu from '../shared/Navbar/NavMenu';

const Order = () => {
    const { user } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const { books } = useCart();
    console.log(books)

    const notify = () => {
        toast.success('Your order is placed successfully')
    };

    let totalPrice = 0;
    for (const book of books) {
        totalPrice = totalPrice + parseInt(book.price);
    }

    const onSubmit = (data) => {
        console.log(data)
        const cartBooks = {
            books,
            ...data,
            displayName: user?.displayName,
            email: user?.email
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(cartBooks)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    notify();
                    reset();
                    removeFromDb()
                }
            })
    };
    return (
        <div>
            <NavMenu />
            <div className='w-75 mx-auto mt-5'>
                <div className="row g-3">
                    <div className="col-lg-8">
                        <fieldset className='border border-light p-4 shadow-sm'>
                            <h6 className='text-center fw-bold text-secondary'>Shipping</h6>
                            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                                <div className='col-lg-6'>
                                    <label type="text">Name</label>
                                    <input readOnly Value={user?.displayName} {...register("name")} />
                                </div>
                                <div className='col-lg-6'>
                                    <label type="text">Email</label>
                                    <input readOnly Value={user?.email} {...register("email")} />
                                </div>
                                <div className='col-lg-12'>
                                    <label type="text">Address</label>
                                    <input {...register("adress")} />
                                </div>
                                <div className='col-lg-6'>
                                    <label type="number">Phone Number</label>
                                    <input  {...register("item")} />
                                </div>
                                <div className='col-lg-6'>
                                    <label type="number">Price</label>
                                    <input  {...register("price")} />
                                </div>
                                <div className="col-12">
                                    <input type="submit" />

                                </div>
                            </form>
                        </fieldset>
                    </div>
                    <div className="col-lg-4">
                        <CartAccount />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;