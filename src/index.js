import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fragrancia from  './pages/fragrancia/fragrancia'
import Consultar from './pages/consultar/consultar.js';
import Categoria from './pages/categoria/index.js';
import ContraRotulo from './pages/contraRotulo/index';
import Medida from './pages/medida/index.js';
import Responsavel from './pages/responsavel/index.js';
import CodigoDeBarras from './pages/codigoDeBarra/index.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
              <Route path="/" exact={true} component={App} />
              <Route path="/consultar" component={Consultar} />
              <Route path="/fragrancia" component={Fragrancia} />
              <Route path="/categoria" component={Categoria} />
              <Route path="/medida" component={Medida} />
              <Route path="/contra-rotoulo" component={ContraRotulo} />
              <Route path="/responsavel" component={Responsavel} />
              <Route path="/codigo-de-barras" component={CodigoDeBarras} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
