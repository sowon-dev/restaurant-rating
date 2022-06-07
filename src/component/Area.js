import * as React from 'react';
import Card from '../component/ActionAreaCard';
import dataList from "../db/data.json"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
	
export default function Area() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
    	setValue(newValue);
  	};
	
	return (<> 	
	<Box sx={{ width: '100%' }}>
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
		<TabPanel value={value} index={0}>
			{dataList.restaurants.filter(data => ( data.areaNm === '서면')).map((data, index) => (
				<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
			))}
		</TabPanel>
		<TabPanel value={value} index={1}>
			{dataList.restaurants.filter(data => ( data.areaNm === '해운대')).map((data, index) => (
				<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
			))}
		</TabPanel>
		<TabPanel value={value} index={2}>
			{dataList.restaurants.filter(data => ( data.areaNm === '센텀')).map((data, index) => (
				<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
			))}
		</TabPanel>
		<TabPanel value={value} index={3}>
			{dataList.restaurants.filter(data => ( data.areaNm === '수영')).map((data, index) => (
				<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
			))}
		</TabPanel>
		<TabPanel value={value} index={4}>
			{dataList.restaurants.filter(data => ( data.areaNm === '덕천')).map((data, index) => (
				<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
			))}
		</TabPanel>
		<TabPanel value={value} index={5}>
			{dataList.restaurants.filter(data => ( data.areaNm === '사상')).map((data, index) => (
				<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
			))}
		</TabPanel>
		<TabPanel value={value} index={6}>
			{dataList.restaurants.filter(data => ( data.areaNm === '부산진')).map((data, index) => (
				<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
			))}
		</TabPanel>
	</Box>

	</>);
}

// {dataList.restaurants.map((data, index) => (
//<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
// ))} 