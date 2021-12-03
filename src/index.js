import React from 'react';
import ReactDOM from "react-dom"
import App from './App';
import {BrowserRouter} from "react-router-dom"; //browser router hace el pasaje de una vista a otra

ReactDOM.render(
  
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


