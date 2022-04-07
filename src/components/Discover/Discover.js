import React, { useState } from 'react';
import Books from './AllBooks/Books';
import './Discover.css';

const Discover = () => {
    const [value, setValue] = useState('')
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <div className="row g-3">
                <div className="col-lg-2 shadow-sm min-vh-100">
                    <div className='side-nav-container'>
                        <h6 className='ms-2'>Category</h6>
                        <select value={value} onChange={handleOnChange}>
                            <option value="0">allbooks</option>
                            <option value="1">hostory</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className='book-container'>
                        {/* <h3 className='text-center fw-bold'>All books</h3> */}
                        <Books />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;