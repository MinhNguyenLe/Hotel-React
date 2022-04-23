import React from 'react';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';

function DefaultLayout({ children }) {
    return (
        <div className='app'>
            <Header />
            <main className='container mt-6 py-3'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
