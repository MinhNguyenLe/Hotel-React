import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import "./bootstrap.min.css";
import "./bootstrap-icons.css";

import BookingSteps from './components/BookingSteps/index';
import Confirmation from './components/Confirmation/index';
import NotFound from './components/NotFound/index';
import DefaultLayout from './layouts/default/index';
import BookingRoutes from './routes/booking-routes';

import { getMetaData } from "config/axios"

function App() {
  useEffect(() => {
    getMetaData().then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

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
        <Route exact path="/hotels/:country/:locale/:currency">
          <DefaultLayout>
            <Confirmation />
          </DefaultLayout>
        </Route>
        <Route path="/b/a">
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
