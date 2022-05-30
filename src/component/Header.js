import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Header(){
	return(
		<header className="App-header">
			 <Grid container spacing={2}>
				<Grid item xs={10}>
					<TextField id="outlined-basic" label="검색어를 입력하세요." fullWidth variant="outlined"/>
				</Grid>
				<Grid item xs={2}>
					<Button href="#" variant="outlined" item xs={4} >맛집추가</Button>
				</Grid>
			</Grid>
	    </header>
	);
}