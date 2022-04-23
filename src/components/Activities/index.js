import React, { useState, useEffect } from 'react';

function Activities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('./activities.json')
            .then(res => res.json())
            .then(res => setActivities(res))
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <section>
                {activities && activities.map((activity, i) => (
                    <div className={`card card-active flex flex-row pl-0`} key={i}>
                        <img src={`/images/${activity.photo}`} className='card-img' alt={activity.name} />
                        <div>
                            <h3>{activity.name}</h3>
                            <p>{activity.desc}</p>
                            <div className='d-flex align-items-end justify-content-between'>
                                <div>
                                    <button className='btn btn-link p-0'>Add to my stay</button>
                                </div>
                                <div className='price'>
                                    € {activity.price}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <div className='d-flex justify-content-between mt-3'>
                <button className='btn'>&lt; Back</button>
                <button className='btn'>Skip &gt;</button>
            </div>
        </>
    )
}

export default Activities;