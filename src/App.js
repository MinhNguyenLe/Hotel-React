import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
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
    <Router>
      <Switch>
        <BookingRoutes path="/" exact component={BookingSteps} />
        <Route path="/confirmation">
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
    </Router>
  );
}

export default App;
