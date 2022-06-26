import React, { useState } from "react";
import './App.css';
import Area from './component/Area';
import Write from './component/Write';
import { Route, Link, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OriDataList from "./db/data.json"

function App() {
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState("");
  const onChangeSearch = (e) => {
	  e.preventDefault();
	  setSearch(e.target.value);
  }
  const onSearch = (e) => {
    e.preventDefault();
	console.log("OriDataList.restaurants: ", OriDataList.restaurants);
	console.log("lists: ", lists);
	 setLists(OriDataList.restaurants);
	console.log("search: ", search);
    if (search === null || search === '') { //검색어가 없을 경우 전체 리스트 반환

    } else { //검색 구현
		debugger
    	const filterData = OriDataList.restaurants.filter( restaurant => restaurant.name == search);
    	setLists(filterData)
		console.log("filterData: ", lists);
    }
    setSearch('')
  }
  return (
	<div className="App">	 
		<title>맛집 별점표</title>
		<header className="App-header">
			 <Grid container columns={12}>
				 <Grid item="ture" xs={2}>
					<Link to="/"><Button variant="contained" item="ture" className="btn">HOME</Button></Link>
				</Grid>
				<form onSubmit={e => onSearch(e)}>
					<Grid item="ture" xs={6}> 
						<TextField id="outlined-basic" onChange={onChangeSearch} label="검색어를 입력하세요." fullWidth variant="filled" focused item="ture"  />
					</Grid>
					<Grid item="ture" xs={1}>
						<Button type='submit' variant="contained" item="ture">검색</Button>
					</Grid>
				</form>
				<Grid item="ture" xs={3}>
					<Link to="/write"><Button variant="contained" item="ture">맛집추가</Button></Link>
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
