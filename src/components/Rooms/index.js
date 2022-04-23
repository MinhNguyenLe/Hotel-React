import React, { useState, useEffect } from 'react';
import Room from '../Room/index';

function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('./rooms.json')
            .then(res => res.json())
            .then(res => {
                let bySpace = res.filter(r => r.capacity >= parseInt(2) + parseInt(0))
                setRooms(bySpace);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <section>
            {rooms && rooms.map((room, i) => <Room key={i} info={room} selected={false} />)}
        </section>
    )
}

export default Rooms
