import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import './index.css'
import Main from './main'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
<React.StrictMode>
    <Main />
</React.StrictMode>   
</BrowserRouter>, document.getElementById('root'))
