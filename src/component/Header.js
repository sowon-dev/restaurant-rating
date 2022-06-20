import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

class Header extends Component {
	render() {
		const Item = styled(Paper)(({ theme }) => ({
		  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		  backgroundColor: '#142d4c',
		  ...theme.typography.body2,
		  padding: theme.spacing(1),
		  textAlign: 'center',
		  color: theme.palette.text.secondary,
		}));
		
		return(
			<header className="App-header">
				 <Grid container columns={12}>
					<Grid item="ture" xs="auto"> 
						<Item><TextField id="outlined-basic" label="검색어를 입력하세요." fullWidth variant="filled" focused item="ture" /></Item>
					</Grid>
					<Grid item="ture" xs={2}>
						<Item><Button href="#" variant="contained" item="ture" >검색</Button></Item>
					</Grid>
					<Grid item="ture" xs={2}>
						<Item><Button href="/write" variant="contained" item="ture" >맛집추가</Button></Item>
					</Grid>
				</Grid>
			</header>
		);
	}
}

export default Header;