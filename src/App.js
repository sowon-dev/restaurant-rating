import * as React from 'react';
import './App.css';
import Header from './component/Header';
import Area from './component/Area';
import Write from './component/Write';
import { Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
	<div className="App">	  
	  <div>
		  <Header />
	  	  <title>맛집 별점표</title>
	  </div>
	  <div>
		  <Routes>
			<Route path="/" component={Area} exact={true} />
			<Route path="/write" component={Write} />
		  </Routes>
      </div>
	</div>
  );
}

export default App;
