import * as React from 'react';
import Button from '@mui/material/Button';

export default function Write(){
	return(
		<form action="/api/write" method="post">
			<div>
				<input type='text' name='areaNm' placeholder='지역'/> 
			</div>
			<div>
				<input type='text' name='name' placeholder='식당명'/> 
			</div>
			<div>
				<input type='url' name='link' placeholder='네이버플레이스 링크'/> 
			</div>
			<div>
				<input type='text' name='menu' placeholder='메뉴'/> 
			</div>
			<div>
				별점입력
			</div>
			<div>
				<Button type="button" id="goToHome">뒤로가기</Button>
				<Button type="button" id="reset">초기화</Button>
				<Button type="submit">저장</Button>
			</div>
		</form>
	);
}
