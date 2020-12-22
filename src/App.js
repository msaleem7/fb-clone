import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';

import Feed from './components/feed/feed';
import Header from './components/header/header';
import Login from './components/login/login';
import SideBar from './components/sideBar/sideBar';
import Widgets from './components/widgets/widgets';

function App() {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<div className='app'>
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className='app__body'>
						<SideBar />
						<Feed />
						<Widgets
							title='valorant'
							src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FValorantGG&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
						/>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
