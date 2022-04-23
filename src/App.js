import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import "./bootstrap.min.css";

import BookingSteps from './components/BookingSteps/index';
import Confirmation from './components/Confirmation/index';
import NotFound from './components/NotFound/index';
import DefaultLayout from './layouts/default/index';
import BookingRoutes from './routes/booking-routes';

import { propertiesGetDetails } from "config/axios"

import { useSelector, useDispatch } from "react-redux"
import { addRoom } from "redux/rootAction"

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    propertiesGetDetails().then(function (response) {
      dispatch(addRoom(response.data))
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    console.log("state in redux", state)
  }, [state]);

  return (
    <>
      <BookingRoutes path="/" exact component={BookingSteps} />
      <Switch>
        <Route path="/confirmation">
          <DefaultLayout>
            <Confirmation />
          </DefaultLayout>
        </Route>
        <Route exact path="/hotels" >
          <DefaultLayout>
            <Confirmation />
          </DefaultLayout>
        </Route>
        <Route exact path="/hotels/rooms">
          <DefaultLayout>
            <Confirmation />
          </DefaultLayout>
        </Route>
        <Route exact path="/hotels/room/detail/:id">
          <DefaultLayout>
            <Confirmation />
          </DefaultLayout>
        </Route>
        <Route exact path="/hotels/room/detail/:id/booking">
          <DefaultLayout>
            <Confirmation />
          </DefaultLayout>
        </Route>
        <Route>
          <DefaultLayout>
            <NotFound />
          </DefaultLayout>
        </Route>
      </Switch>
    </>
  );
}

export default App;
