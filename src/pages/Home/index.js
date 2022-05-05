import React from 'react'
import Cover from 'components/Cover';
import Banner from 'components/Banner';
import Services from 'components/Services';

import { Link } from 'react-router-dom';

function Home() {

    return (
        <React.Fragment>
            <Cover>
                <Banner
                    title="luxurious rooms"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Cover>
            <Services />
        </React.Fragment>
    )
}

export default Home
