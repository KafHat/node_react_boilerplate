/* Client side of app is written in ES6 */
import React from 'react';
import { render } from 'react-dom';
import Application from './components/Layout';

const app = document.getElementById('app');

render(<Application />, app);