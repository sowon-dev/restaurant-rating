import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import StarRating from 'react-star-rating';

export default function Write(){
	const styleBtn = {
		margin: "0 10px",
	}
	return( 
		<form action="/api/write" method="post" centered>
			<div>
				<TextField name='areaNm' placeholder='지역' variant="outlined" margin="normal" /> 
			</div>
			<div>
				<TextField name='name' placeholder='식당명' variant="outlined" margin="normal" /> 
			</div>
			<div>
				<TextField name='link' placeholder='네이버플레이스 링크' variant="outlined" margin="normal" /> 
			</div>
			<div>
				<TextField name='menu' placeholder='메뉴' variant="outlined" margin="normal" /> 
			</div>
			<div>
				{/*<StarRating name="react-star-rating" totalStars={5} step={1} onRatingClick />*/}
			</div>
			<div>
				<Button href="/" variant="contained" style={styleBtn} >뒤로가기</Button>
				<Button type="button" id="reset" variant="contained" style={styleBtn}>초기화</Button>
				<Button type="submit" variant="contained" style={styleBtn} >저장</Button>
			</div>
		</form>
	);
}
