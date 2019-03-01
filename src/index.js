import React from 'react';

import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ExampleMenu from './menu/menu.jsx';

import * as serviceWorker from './serviceWorker';

render(<ExampleMenu/>, document.getElementById('main-container'))

serviceWorker.unregister();
