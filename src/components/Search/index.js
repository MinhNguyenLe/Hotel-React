import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SelectList from './../SelectList/index';
import './style.scss';

function Search() {
    const CustomInput = ({ value, onClick }) => (
        <div className='calendar' onClick={onClick}>
            <input type='text' className="form-item" value={value} />
            <i className="bi bi-calendar-week"></i>
        </div>
    );

    return (
        <section className='search d-flex align-items-center'>
            <div className='search-wrapper w-100 my-3'>
                <div className='container py-3 search-content'>
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        customInput={<CustomInput />}
                    />
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        customInput={<CustomInput />}
                    />
                    <SelectList name='adults' text='Adults' css='form-item' start={1} num={2} />
                    <SelectList name='children' text='Children' css='form-item' num={0} />
                    <button className='btn btn-primary'>Modify</button>
                </div>
            </div>
        </section>
    )
}

export default Search;
