import React from 'react';
import Activities from './../Activities/index';
import Register from './../Register/index';
import Rooms from './../Rooms/index';

function BookingSteps() {
    return (
        <>
            <section className='mb-5 mt-5 ml-2'>
                <h1>Rooms & Rates</h1>
                <p>Plan your perfect stay at our hotel</p>
                <img src={`/images/book-steps-1.png`} alt='' className='booking-step' />
            </section>
            <Rooms />
            <Activities />
            <Register />
        </>
    )
}

export default BookingSteps;
