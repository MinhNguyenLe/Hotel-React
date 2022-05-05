import React from 'react';
<<<<<<< HEAD
=======
import Activities from './../Activities/index';
>>>>>>> e8906ff4e86f4bb96e9e8674b4b10bfd823cb663
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
<<<<<<< HEAD
=======
            <Activities />
>>>>>>> e8906ff4e86f4bb96e9e8674b4b10bfd823cb663
            <Register />
        </>
    )
}

export default BookingSteps;
