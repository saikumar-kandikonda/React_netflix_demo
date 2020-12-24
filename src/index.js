import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import sdata from './Netflixdata';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
<>

<h1 className="header">LIST OF TOP  NETFLIX SERIES 🤩</h1>
<div className="headerdata">
<h5>Implementation
  <ol>
    <li>Rendered data dynamically from an Arrays</li>
    <li>Used Map function to get data</li>
    <li>components and props</li>
  
  </ol>
</h5>
</div>
{sdata.map((value)=>{
  return (
<Card sname={value.sname}
        imgsrc={value.imgsrc}
        title={value.title} 
        links={value.links}/>
);
})}
</>,
document.getElementById('root')
);  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
