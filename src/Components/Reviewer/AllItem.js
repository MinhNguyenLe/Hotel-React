import React from "react"
import Card from "./Card"
import Tdata from "./Tdata"
import "./Testimonial.css"
import { Link } from "react-router-dom"

const AllItem = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container' style={{ marginBottom: 20 }}>
          <Link to='/create-review'>
            <button className="primary-btn">Create new review</button>
          </Link>
        </div>
        <div className='container grid1'>
          {Tdata.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default AllItem
