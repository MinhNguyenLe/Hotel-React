import React from 'react';
import './style.scss';

const discount = 10

<<<<<<< HEAD
function Room({ data, selected, overview }) {
    return (
        <>
            {
                data.images.map((image, index) => (
                    <div key={index} className={`card ${selected ? `card-active` : ``} flex flex-row pl-0`}>
                        <img src={image} alt={data.name} className='card-img' />
                        <div>
                            <h3>{data.name}</h3>
                            <p>{overview.title}</p>
                            {
                                overview.content.map((c) => (<p>{c}</p>))
                            }
                            <p>Size: {overview.content.length * 20}m2</p>
                            <div className='d-flex align-items-end justify-content-between'>
                                <div>
                                    <img src="/images/icons/double-bed.svg" width="40" alt='' />
                                    <div>Beds: {overview.content.length}</div>
                                </div>
                                <div>
                                    People: {overview.content.length * 2}
                                </div>
                                <div className='price'>
                                    {discount > 0 && (
                                        <>
                                            <div className='font-weight-normal text-right'><small>€ <del>{(data.roomId / 1000000).toFixed(2)}</del></small></div>
                                            <div>€{(data.roomId / 1000000 - discount / 100 * data.roomId / 1000000).toFixed(2)}</div>
                                        </>
                                    )}
                                    {!discount && <span>€ {(data.roomId / 1000000).toFixed(2)}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
=======
function Room({ info, selected }) {
    const { price } = info;

    return (
        <div className={`card ${selected ? `card-active` : ``} flex flex-row pl-0`}>
            <img src={`/images/${info.photo}`} alt={info.name} className='card-img' />
            <div>
                <h3>{info.name}</h3>
                <p>{info.desc}</p>
                <p>Size: {info.size}m2</p>
                <div className='d-flex align-items-end justify-content-between'>
                    <div>
                        <img src="/images/icons/double-bed.svg" width="40" alt='' />
                        <div>Beds: {info.beds}</div>
                    </div>
                    <div>
                        People: {info.capacity}
                    </div>
                    <div className='price'>
                        {discount > 0 && (
                            <>
                                <div className='font-weight-normal text-right'><small>€ <del>{price}</del></small></div>
                                <div>{(price - discount / 100 * price).toFixed(2)}</div>
                            </>
                        )}
                        {!discount && <span>€ {price}</span>}
                    </div>
                </div>
            </div>
        </div>
>>>>>>> e8906ff4e86f4bb96e9e8674b4b10bfd823cb663
    )
}

export default Room
