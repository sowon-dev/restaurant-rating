import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
		<Link href={props.link} underline="hover" target="_blank">
			{/*<CardMedia 
				component="img" 
				height="140"
			 	image="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldbphinf.pstatic.net%2F20210204_86%2F1612443702490itpAf_JPEG%2FIgBkGhWODsI04WI8er6uWgZ6.jpg"
			 /> */}
			 <CardContent> 
			  <Typography gutterBottom variant="h5" component="div">
				{props.area} {props.name}
			  </Typography>
			  <Typography variant="body2" color="text.secondary">
				{props.star}
			  </Typography>
        	</CardContent>
		</Link>
      </CardActionArea>
    </Card>
  );
}
