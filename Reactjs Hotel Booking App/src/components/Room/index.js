import React from 'react';
import './style.scss';

const discount = 10

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
    )
}

export default Room
