
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import'normalize.css/normalize.css'
import './styles/styles.scss';


//https://reactrouter.com/web/guides/quick-start
ReactDOM.render(<AppRouter/>, document.getElementById('app'));
