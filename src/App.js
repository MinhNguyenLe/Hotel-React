import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import BookingSteps from './components/BookingSteps/index';
import Confirmation from './components/Confirmation/index';
import NotFound from './components/NotFound/index';
import DefaultLayout from './layouts/default/index';
import BookingRoutes from './routes/booking-routes';

import Home from "pages/Home"

import { propertiesGetDetails } from "config/axios"

import { useSelector, useDispatch } from "react-redux"
import { addRoom } from "redux/rootAction"

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    propertiesGetDetails().then((response) => {
      dispatch(addRoom(response.data))
    }).catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    console.log("state in redux", state)
  }, [state]);

  return (
    <>
      <Switch>
        <BookingRoutes path="/home" exact component={BookingSteps} />
        <Route path="/" exact>
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
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
