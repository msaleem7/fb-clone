import React from 'react';
import './login.css';

import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import { signInStart } from '../../redux/user/user.actions';

function Login() {
	const dispatch = useDispatch();

	return (
		<div className='login'>
			<div className='login__logo'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/1200px-Facebook_f_Logo_%28with_gradient%29.svg.png'
					alt=''
				/>
				<img
					src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
					alt=''
				/>
			</div>
			<Button type='submit' onClick={() => dispatch(signInStart())}>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
