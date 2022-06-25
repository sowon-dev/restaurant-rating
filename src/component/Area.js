import * as React from 'react';
import Card from '../component/ActionAreaCard';
import dataList from "../db/data.json"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import _ from 'lodash'

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
    console.log("dataList.restaurants: ", dataList.restaurants)
	const areaList = _.uniqBy(dataList.restaurants.map((restaurant) => restaurant.areaNm));
	const styleBody = {
		margin: "0 auto",
	}
	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }} style={{margin:"0 auto"}}>
			  <Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons="auto"
				aria-label="scrollable auto tabs example"
			  >
			  {
				areaList.map((areaNm, index) => (
					<Tab label={areaNm} key={index}/>
				))
			  }
			  </Tabs>
			</Box>
			{
				areaList.map((areaNm, index) => (
					<TabPanel value={value} index={index} key={index}>
						{dataList.restaurants.filter(data => ( data.areaNm === areaNm)).map((data, index) => (
							<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} style={{margin:"0 auto"}} />
						))}
					</TabPanel>
				))		
			}
		</Box>
	);
}

// style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh"}}