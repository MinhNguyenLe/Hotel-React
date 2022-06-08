import React from "react"
import Card from "./Card"
import Tdata from "./Tdata"
import "./Testimonial.css"
import { Link } from "react-router-dom"

const AllItem = () => {
  const reviewStorage = JSON.parse(localStorage.getItem("review"))
  console.log(reviewStorage)
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container' style={{ marginBottom: 20 }}>
          <Link to='/create-review'>
            <button className="primary-btn">Create new review</button>
          </Link>
          <button onClick={() => {
            localStorage.removeItem("review")
            window.location.reload();
          }} style={{ marginLeft: 20 }} className="primary-btn">Delete all my reviews</button>
        </div>
        <div className='container grid1'>
          {reviewStorage && reviewStorage.length && reviewStorage.map((value, index) => {
            return <Card key={index} {...value} />
          })}
          {Tdata.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default AllItem
