import React from 'react';
import './sideBarRow.css';

import { Avatar } from '@material-ui/core';

function SideBarRow({ title, Icon, src }) {
	return (
		<a href={`/${title}`}>
			<div className='sidebarrow'>
				{src && <Avatar src={src} />}
				{Icon && <Icon />}
				<h4>{title}</h4>
			</div>
		</a>
	);
}

export default SideBarRow;
