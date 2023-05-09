import React from 'react';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client';
//ReactDOM.render(<App />, document.getElementById('root'));


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);