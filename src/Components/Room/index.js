import React from 'react';
import './style.scss';
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

const discount = 10

function Room({ data, selected, overview }) {
    const history = useHistory();

    return (
        <>
            {
                data.images.map((image, index) => (
                    <div style={{ maxHeight: '600px' }} key={index} className={`card ${selected ? `card-active` : ``} flex flex-row pl-0`}>
                        <img style={{ maxHeight: '600px', width: 'auto' }} src={image} alt={data.name} className='card-img' />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                            <button onClick={() => {
                                localStorage.setItem("infoBooking", JSON.stringify({
                                    price: (data.roomId / 1000000 - discount / 100 * data.roomId / 1000000).toFixed(2),
                                    roomName: data.name
                                }))
                                history.push(`/room-detail/${data.roomId}`);
                                window.location.reload();
                            }} className='primary-btn'>
                                READ MORE <i className='fa fa-long-arrow-right'></i>
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Room
