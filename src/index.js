import React from 'react';
import ReactDOM from 'react-dom';
import { MainAPP } from './MainAPP';

import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <MainAPP />
  </Router>,
  document.getElementById('root')
);
