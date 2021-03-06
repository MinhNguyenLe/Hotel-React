import React from 'react';
import Room from '../Room/index';
import { useSelector } from "react-redux"

function Rooms() {
    const rooms = useSelector(state => state.rooms.list)

    const overview = useSelector(state => state.hotel.overview.overviewSections)

    return (
        <section>
            {rooms && rooms.length ? rooms.map((room, i) => <Room key={i} data={room} overview={overview[i]} selected={false} />) : <div style={{ marginLeft: 100, fontSize: 40 }}>Loading</div>}
        </section>
    )
}

export default Rooms
