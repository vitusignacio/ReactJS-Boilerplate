import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router,
  	Route,
  	Link 
	} from 'react-router-dom';

import { BaseHelper } from './helpers/base.helper';

import { Main } from './components/main/Main';
import { About } from './components/about/About';

require('./base.sass');

ReactDOM.render(
    (
    	<Router>
    	  <div>
	    	  <ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		      </ul>

		      <Route exact path="/" component={Main}/>
		      <Route path="/about" component={About}/>
		  </div>
	    </Router>
    ),
    document.getElementById("root")
);
