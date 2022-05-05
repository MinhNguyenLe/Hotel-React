<<<<<<< HEAD
import React from 'react';
import Room from '../Room/index';
import { useSelector } from "react-redux"

function Rooms() {
    const rooms = useSelector(state => state.rooms.list)

    const overview = useSelector(state => state.hotel.overview.overviewSections)

    return (
        <section>
            {rooms && rooms.length ? rooms.map((room, i) => <Room key={i} data={room} overview={overview[i]} selected={false} />) : "Loading"}
=======
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
>>>>>>> e8906ff4e86f4bb96e9e8674b4b10bfd823cb663
        </section>
    )
}

export default Rooms
