import * as React from 'react';
import Card from './component/ActionAreaCard.jsx';
import data from "./db/data.json"

export default function Area(props) {
	return (
		{
			data.restaurants.map((d) =>{
			<Card area={d.areaNm} name={d.name} star={d.star} menu={d.menu}  link={d.link} />
			<br />
			})
		}
		
		// <Card area="서면" name="맛찬들왕소금구이" star="★★★★★" menu="" link="http://naver.me/xcukMcIK" />
		// <br />
		// <Card area="서면" name="덕자네방앗간(폐업)" star="★★☆☆☆" menu="" link="" />
		// <br />
		// <Card area="서면" name="아비꼬 NC백화점서면점" star="★★★☆☆" menu="" link="http://naver.me/G2Uxqbmj" />
		// <br />
	);
}