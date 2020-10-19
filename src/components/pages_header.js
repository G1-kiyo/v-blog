// JavaScript source code
import React from "react"
import { Link } from "gatsby"

const PagesHeader = () => (
	<header
		className="title"
		style={{
			borderWidth: 2,
			borderStyle: `solid`,
			borderColor: `#663399`,
			height: 82}}>
		<Link to="https://www.baidu.com" ><img
			id='v_picture'
			alt="首页"
			src='https://i.ibb.co/YXLFt1G/1.jpg'
			style={{
				width: 78,
				height: 78,
				marginLeft:50,
				marginBottom:-55,
				backgroundColor:`white`}}
		/></Link>
		
	</header>
)
export default PagesHeader