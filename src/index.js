import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
//components
import App from './App';
import {Home} from './component/Home';
import {About} from './component/About';
import {Projects} from './component/Projects';
import {Articles} from './component/Articles';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/projects' element={<Projects />}/>
     <Route path='/articles' element={<Articles />}/>
     
     </Routes>
  </BrowserRouter>
  
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
