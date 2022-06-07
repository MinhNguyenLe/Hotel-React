import React from 'react';
import SelectList from './../SelectList/index';
import './style.scss';

const discount = 10

function Reservation() {
    const price = 100;
    const total = 100;

    return (
        <section className='card'>
            <h2 className='mb-4'>
                Reservation Summary
            </h2>
            <div className='d-flex justify-content-between'>
                <h3>
                    room name
                </h3>
                <SelectList name='rooms' start={1} />
            </div>
            <div className='d-flex justify-content-between mb-3'>
                <div>
                    <div className='font-weight-bold'>Check in</div>
                    <div>From 15.00h</div>
                </div>
                <div>
                    <div className='font-weight-bold'>Check out</div>
                    <div>Before 12.00h</div>
                </div>
            </div>
            <div className='mb-3'>
                <div className='font-weight-bold'>Reservation date</div>
                <div>From <strong>11/11/2022</strong> to <strong>11/11/2022</strong></div>
            </div>
            <div className='mb-3'>
                <div className='font-weight-bold'>People</div>
                <div>2 Adults</div>
                <div>0 Children</div>
            </div>
            <div className='card-total'>
                {discount > 0 && (
                    <>
                        <div>
                            <div>Promo Code</div>
                            <div>-{discount}%</div>
                        </div>
                        <div>
                            <div>Room Price</div>
                            <div>€ <del>{price}</del></div>
                        </div>
                    </>
                )}
                <div className='mb-3'>
                    <div>
                        <div className='price'>Total</div>
                    </div>
                    <div className='price'>€ {discount
                        ? (total - discount / 100 * total).toFixed(2)
                        : total}
                    </div>
                </div>
            </div>
            <button type='button' className='btn btn-primary btn-group-justified'>
                Continue
            </button>
        </section>
    )
}

export default Reservation;