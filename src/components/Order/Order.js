import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartAccount from '../Cart/CartAccount';
import { removeFromDb } from '../Hooks/AddToDb';
import useCart from '../Hooks/useCart';
import useFirebase from '../Hooks/useFirebase';
import NavMenu from '../shared/Navbar/NavMenu';

const Order = () => {
    const { user } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const { books, setBooks } = useCart() || [];
    const { orderId } = useParams();


    const book = books?.find(bk => bk._id === orderId);
    const quantity = book?.quantity;
    const price = book?.price;
    const bookPrice = quantity * price;
    const tax = bookPrice > 100 ? bookPrice * 15 / 100 : 0;
    const total = bookPrice + 15 + tax;

    const notify = () => {
        toast.success('Your order is placed successfully')
    };



    const onSubmit = (data) => {
        console.log(data)
        const cartBooks = {
            ...book,
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
                    removeFromDb(book?._id);
                    setBooks([]);
                }
            })
    };
    return (
        <div>
            <NavMenu />
            {
                !books?.length ?
                    <div className='w-50 mx-auto d-flex justify-content-center'><Spinner animation="grow" /></div>
                    :
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
                                            <input {...register("address")} />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label type="number">Phone Number</label>
                                            <input  {...register("phone")} />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label type="number">Total Price</label>
                                            <input readOnly value={`${total} $`}  {...register("totalPrice")} />
                                        </div>
                                        <div className="col-12">
                                            <input type="submit" />

                                        </div>
                                    </form>
                                </fieldset>
                            </div>
                            <div className="col-lg-4">
                                <CartAccount
                                    image={book?.img}
                                    quantity={quantity}
                                    bookPrice={bookPrice}
                                    shipping={15}
                                    tax={tax}
                                    total={total}
                                    title={book.title}
                                    books={books}
                                    id={'placeOrder'}
                                />
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Order;