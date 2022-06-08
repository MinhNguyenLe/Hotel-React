import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogData from "../BlogData"
import EmptyFile from "../../../Common/Empty/EmptyFile"
import HeadTitle from "../../../Common/HeadTitle/HeadTitle"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const mockInfo = {
  id: 1,
  date: "January 01, 2020",
  catgeory: "Business ",
  title: "The Most Advance Business Plan",
  cover: "/images/singlepage/blog-1.jpg",
  para: "With views overlooking Michigan Avenue and a bright and airy atmosphere, the spacious one-bedroom Michigan Avenue Suites are the most popular among guests.",
  desc: "Separate bedroom and living areas offer contemporary interiors with a cosmopolitan attitude and are divided by an artisan crafted glass wall ",
}

const BlogSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  const rooms = useSelector(state => state.rooms.list)

  useEffect(() => {
    let item = rooms.find((item) => item.roomId == id)
    if (item) {
      setItem(item)
    }
  })
  return (
    <>
      <HeadTitle />

      {mockInfo && item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/rooms' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex_space'>
              <div className='main-content'>
                <img src={item.images[1]} alt='' />

                <div className='category flex_space'>
                  <span>{mockInfo.date}</span>
                  <Link to='/checkout'>
                    <button className='primary-btn'>Choose this room</button>
                  </Link>
                </div>

                <h1> {mockInfo.title} </h1>
                <p>{mockInfo.desc}</p>
                <p>{mockInfo.desc}</p>

                <h2>Two Column Text Sample</h2>

                <div className='para flex_space'>
                  <p>{mockInfo.para}</p>
                  <p>{mockInfo.para}</p>
                </div>
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='category-list'>
                  <h1>Categories</h1>
                  <hr />
                  <ul>
                    {BlogData.map((item) => {
                      return (
                        <li>
                          <i className='far fa-play-circle'></i>
                          {mockInfo.catgeory}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default BlogSingle
