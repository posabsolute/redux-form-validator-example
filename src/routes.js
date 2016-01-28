import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import Home from 'containers/App/home';
import SyncForm from 'components/syncForm/syncForm.js';
import AsyncForm from 'components/asyncForm/asyncForm.js';
import AsyncInput from 'components/asyncInput/asyncInput.js';
import AsyncFormInput from 'components/asyncFormInput/asyncFormInput.js';

export default (
  <Route path="/" component={App}>
  	<Route path="home" component={Home} />
    <Route path="syncform" component={SyncForm} />
    <Route path="asyncinput" component={AsyncInput} />
    <Route path="asyncforminput" component={AsyncFormInput} />
    <Route path="asyncform" component={AsyncForm} />
  </Route>
);
