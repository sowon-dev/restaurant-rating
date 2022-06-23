import * as React from 'react';
import './App.css';
import Area from './component/Area';
import Write from './component/Write';
import { Route, Link, Routes, Switch } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
	<div className="App">	 
		<title>맛집 별점표</title>
		<header className="App-header">
			 <Grid container columns={12}>
				 <Grid item="ture" xs={2}>
					<Link to="/"><Button variant="contained" item="ture" >HOME</Button></Link>
				</Grid>
				<Grid item="ture" xs={6}> 
					<TextField id="outlined-basic" label="검색어를 입력하세요." fullWidth variant="filled" focused item="ture"  />
				</Grid>
				<Grid item="ture" xs={1}>
					<Button href="#" variant="contained" item="ture" >검색</Button>
				</Grid>
				<Grid item="ture" xs={3}>
					<Link to="/write"><Button variant="contained" item="ture" >맛집추가</Button></Link>
				</Grid>
			</Grid>
		</header>
		<Routes>
		  <Route path="/" element={<Area />} />
		  <Route path="/write" element={<Write />} />
		  <Route path="/*" element={<h2>not found</h2>} />
		</Routes>
	</div>
  );
}

export default App;
