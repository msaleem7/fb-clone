import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase';

import firestore from '../../firebase';
import './messageSender.css';

import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';

function MessageSender() {
	const user = useSelector((state) => state.user.currentUser);

	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		firestore.collection('posts').add({
			username: user.displayName,
			profileSrc: user.photoURL,
			message: input,
			image: imageUrl,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
		setImageUrl('');
	};

	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				<Avatar src={user.photoURL} />
				<form>
					<input
						className='messageSender__message'
						placeholder={`What's on your mind? ${user.displayName}`}
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<input
						placeholder='image URL (Optional)'
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
					/>
					<button type='submit' onClick={handleSubmit}>
						Hidden Button
					</button>
				</form>
			</div>
			<div className='messageSender__bottom'>
				<div className='messageSender__options'>
					<VideocamIcon style={{ color: 'red' }} />
					<h3>Live Video</h3>
				</div>
				<div className='messageSender__options'>
					<PhotoLibraryIcon style={{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className='messageSender__options'>
					<MoodIcon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
}

export default MessageSender;
