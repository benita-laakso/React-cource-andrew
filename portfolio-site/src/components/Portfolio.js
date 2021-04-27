import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio =()=>{
  return ( <div><h1>This is Portfolio Homepage</h1>
    <p>Here is what Ihave done</p>
    <Link to="portfolio/1">Item one</Link>
    <Link to="portfolio/2"> Item two</Link>
    </div>
);
};


export default Portfolio;