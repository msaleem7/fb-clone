import React from 'react';
import './header.css';

import { useSelector } from 'react-redux';
import SignOutButton from '../signoutbutton/signoutbutton';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import { Avatar, IconButton } from '@material-ui/core';

function Header() {
	const user = useSelector((state) => state.user.currentUser);

	return (
		<div className='header'>
			<div className='header__left'>
				<a href='/'>
					<img
						className='header__image'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png'
						alt=''
					></img>
				</a>
				<div className='header__input'>
					<SearchIcon />
					<input type='text' placeholder='Search Facebook' />
				</div>
			</div>
			<div className='header__middle'>
				<div className='header__options'>
					<HomeIcon></HomeIcon>
				</div>
				<div className='header__options'>
					<FlagIcon></FlagIcon>
				</div>
				<div className='header__options'>
					<SubscriptionsIcon></SubscriptionsIcon>
				</div>
				<div className='header__options'>
					<StorefrontIcon></StorefrontIcon>
				</div>
				<div className='header__options'>
					<SupervisedUserCircleIcon></SupervisedUserCircleIcon>
				</div>
			</div>
			<div className='header__right'>
				<a href={`/${user.displayName}`} alt=''>
					<div className='header__info'>
						<Avatar src={user.photoURL}></Avatar>
						<h4>{user.displayName}</h4>
					</div>
				</a>
				<IconButton>
					<AddIcon></AddIcon>
				</IconButton>
				<IconButton>
					<ForumIcon></ForumIcon>
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon></NotificationsActiveIcon>
				</IconButton>
				<SignOutButton />
			</div>
		</div>
	);
}

export default Header;
