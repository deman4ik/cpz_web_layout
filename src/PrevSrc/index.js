import React from 'react';

import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//меню
import ExampleMenu from './menu/menu.jsx';

//таблица

// import ChartTP from './tables/totalPerformance/Chart.jsx';
// import { getData } from "./tables/totalPerformance/utils"
// import ChartComponent from "./tables/totalPerformance/totalPerfomance.jsx"
// import { TypeChooser } from "react-stockcharts/lib/helper"


//BalanceBlock
import BalanceBlock from './tables/balanceBlock/balanceBlock.jsx';
import BalanceBlockElem from './tables/balanceBlock/balanceBlockElem.jsx';

import * as serviceWorker from './serviceWorker';

import  DataBlock  from './dataBlock/dataBlock.jsx';

import  RobotsPage  from './robotsPage/robotsPage.jsx';

import  SettingsPage  from './settingsPage/settingsPage.jsx';




/* подключения */



render(<ExampleMenu/>, document.getElementById('main-container'))








serviceWorker.unregister();
