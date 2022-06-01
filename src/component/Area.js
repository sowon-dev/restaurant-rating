import * as React from 'react';
import Card from '../component/ActionAreaCard';
import dataList from "../db/data.json"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Area() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
    	setValue(newValue);
  	};
	
	return (<> 	
	<Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
		centered
      >
        <Tab label="서면" />
        <Tab label="해운대" />
        <Tab label="센텀" />
        <Tab label="수영" />
		<Tab label="덕천" />
        <Tab label="사상" />
        <Tab label="부산진" />
      </Tabs>
    </Box>	
		
	{dataList.restaurants.map((data, index) => (
		<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
	) )}
	</>);
}