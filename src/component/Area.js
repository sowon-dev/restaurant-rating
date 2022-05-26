import * as React from 'react';
import Card from '../component/ActionAreaCard';
import dataList from "../db/data.json"

export default function Area(props) {
	return <> 
	{dataList.restaurants.map((data, index) => (
		<Card key={index} area={data.areaNm} name={data.name} star={data.star} menu={data.menu} link={data.link} />
	) )}
	</>;
}