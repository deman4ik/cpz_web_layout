import React from 'react';

import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Root from './root/root.jsx';

import * as serviceWorker from './serviceWorker';

render(<Root/>, document.getElementById('main-container'))

serviceWorker.unregister();
