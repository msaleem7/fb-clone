import React from 'react';
import './sideBar.css';

import { useSelector } from 'react-redux';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SideBarRow from '../sideBarRow/sideBarRow';

function SideBar() {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<div className='sideBar'>
			<SideBarRow title={user.displayName} src={user.photoURL} />
			<SideBarRow
				title='COVID-19 Information Center'
				Icon={LocalHospitalIcon}
			/>
			<SideBarRow title='pages' Icon={EmojiFlagsIcon} />
			<SideBarRow title='Freinds' Icon={PeopleIcon} />
			<SideBarRow title='Messenger' Icon={ChatIcon} />
			<SideBarRow title='Marketplace' Icon={StorefrontIcon} />
			<SideBarRow title='Videos' Icon={VideoLibraryIcon} />
			<SideBarRow title='See more' Icon={ExpandMoreIcon} />
		</div>
	);
}

export default SideBar;
