import React from 'react'



export default function Sub(props) {
	
	return (
		<div>
			<div>{props.user.forEach((i) => (1 == 1) && (<div>ggggg</div>))}</div>
			<div>
			{(1 == 1) && (<div>ffff</div>)}
			</div>
		</div>
	)
}
