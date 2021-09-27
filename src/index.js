import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brand-svg-icons'
import { faCheckSquare, faCoffee, faClock, faBackward, faPlay, faPause, faForward} from '@fortawesome/free-solid-svg-icons'
// import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons' 
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faClock, faBackward, faPlay, faPause, faForward)
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
