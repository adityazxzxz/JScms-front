import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()

const jsx = (<Router history={history}><AppRouter/></Router>)

ReactDOM.render(jsx,document.getElementById('root'))

let hasRendered = false;

// const renderApp = () => {
//   if(!hasRendered){
//     ReactDOM.render(
//       jsx,
//       document.getElementById('root')
//     );
//     hasRendered = true;
//   }
// }



// const session = JSON.parse(localStorage.getItem('session'))
// if(session){
//   if(history.location.pathname === '/'){
//     history.push('/dashboard')
//     renderApp()
//   }
// }else{
//   history.push('/')
//   renderApp()
// }



//

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
