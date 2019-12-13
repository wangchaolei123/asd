import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/js/rem.js'
import './assets/css/reset.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import './assets/fonts/iconfont.css';
import axios from 'axios'
// import moment from 'moment';
Component.prototype.$axios = axios


axios.interceptors.response.use(response => {
    if (window.location.href.includes('/login')) {
        return response
    }
    if (!localStorage.getItem("username")) {
        window.open("http://localhost:3000/login", "_self")
    }
    if (response.data.code === -1) {
        alert("掉线，重登")
        window.open("http://localhost:3000/login", "_self")
    } else {
        return response
    }
})

// import qs from 'qs'
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// Component.prototype.$qs=qs
serviceWorker.unregister()
