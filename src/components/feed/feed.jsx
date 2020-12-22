import React from 'react';
import { useState, useEffect } from 'react';
import './feed.css';

import firestore from '../../firebase';

import MessageSender from '../messageSender/messageSender';
import Post from '../post/post';
import StoryReel from '../storyReel/storyReel';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		firestore
			.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
			);
	}, []);

	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />
			{posts.map((post) => (
				<Post
					key={post.id}
					username={post.data.username}
					profileSrc={post.data.profileSrc}
					message={post.data.message}
					image={post.data.image}
					timestamp={post.data.timestamp}
				/>
			))}
		</div>
	);
}

export default Feed;
