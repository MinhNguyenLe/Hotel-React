import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
import Reviewer from "./Components/Reviewer/Reviewer"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
/*-------------blog------------ */
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { propertiesGetDetails, propertiesGetHotelPhotos } from "./config/axios"
import { setDefaultHotelInformation, setListImages, setDefaultData } from "./redux/rootActions"
import { listImagesHotel, listRoomImages } from "./utils"
import Rooms from "./Components/Rooms"
import ReviewForm from "Components/ReivewForm/ReviewForm"
import Profile from "Components/Profile/Profile"
import Checkout from "Components/Checkout/Checkout"
import Service from "Components/Service/Service"

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    Promise.all([
      propertiesGetDetails(),
      propertiesGetHotelPhotos()
    ]).then(([propertiesGetDetails, propertiesGetHotelPhotos]) => {
      //hotel
      dispatch(setDefaultHotelInformation(propertiesGetDetails.data))

      // images
      dispatch(setListImages(listImagesHotel(propertiesGetHotelPhotos.data.hotelImages)))

      // rooms
      dispatch(setDefaultData(listRoomImages(propertiesGetHotelPhotos.data.roomImages, propertiesGetDetails.data.data.body.propertyDescription.roomTypeNames)))
    }).catch(err => console.log(err))
  }, []);

  useEffect(() => {
    console.log("state in redux", state)
  }, [state]);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/room-detail/:id' component={BlogSingle} />
          <Route path='/reviewer' component={Reviewer} />
          <Route path='/create-review' component={ReviewForm} />
          <Route path='/rooms' component={Rooms} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/mypage' component={Profile} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/service' component={Service} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App