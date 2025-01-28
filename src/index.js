import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';
// This is an important note!
// bootstrap and tachyons are bundled, if there is a clash in css naming the latest import library will take over
// Because tachyons is last it will override any conflict in styles with bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(<App />)

// If using React version lower than 18:
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
