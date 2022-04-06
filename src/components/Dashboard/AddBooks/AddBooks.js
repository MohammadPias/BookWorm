import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "./AddBook.css";


const AddBooks = () => {
    const { register, handleSubmit, setValue, reset } = useForm();

    const notify = () => {
        toast.success('Book is added successfully')
    }

    const onSubmit = (data) => {
        console.log(data)

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    notify();
                    reset();
                }
            })
    };
    return (
        <div className='w-75 mx-auto'>
            <fieldset className='border border-light p-4 shadow-sm'>
                <h6 className='text-center fw-bold text-secondary'>Add Books</h6>
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                    <div className='col-lg-6'>
                        <label type="text">Title</label>
                        <input {...register("title")} />
                    </div>
                    <div className='col-lg-6'>
                        <label type="text">Author</label>
                        <input {...register("author")} />
                    </div>
                    <div className='col-lg-6'>
                        <label>Description</label>
                        <textarea
                            className='w-100'
                            type="text"
                            {...register("info")}
                        />
                    </div>
                    <div className='col-lg-6'>
                        <label>Category</label>
                        <select className='w-100' {...register("category")}>
                            <option value="0">Action & Adventure</option>
                            <option value="1">Arts, Film & Photography</option>
                            <option value="2">Computers & Internet</option>
                            <option value="3">Medicine and Health</option>
                            <option value="4">Historical Fiction</option>
                        </select>
                    </div>
                    <div className='col-lg-6'>
                        <label type="number">Rating</label>
                        <input {...register("rating")} />
                    </div>
                    <div className='col-lg-6'>
                        <label type="number">Price</label>
                        <input {...register("price")} />
                    </div>
                    <div className='col-lg-12'>
                        <label type="text">Image</label>
                        <input {...register("img")} />
                    </div>
                    <div className="col-12">
                        <input type="submit" />

                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default AddBooks;











/* <form class="row g-3">
                <div class="col-lg-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-lg-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-lg-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-lg-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-lg-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-lg-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-lg-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-lg-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div class="col-lg-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form> */