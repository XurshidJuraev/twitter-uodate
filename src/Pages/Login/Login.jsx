import React from 'react';
import { Context } from '../../Context/Authentication';
import {NavLink} from 'react-router-dom'
import home from '../../Components/Footer/Footer'
// import home from '../../Components/Main/Main'
import home2 from '../../Components/Main/Main'
import home3 from '../../Components/Header/Header'



function Login() {
	// const { setToken } = React.useContext(Context);

	// const handleSubmit = (evt) => {
	// 	evt.preventDefault();

	// 	const { user_email, user_password } = evt.target.elements;

	// 	fetch('https://reqres.in/api/login', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			email: user_email.value.trim(),
	// 			password: user_password.value.trim(),
	// 		}),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => setToken(data?.token));
	// };
	return (
		<form >
			<input
				type='email'
				// defaultValue='eve.holt@reqres.in'
				// name='user_email'
			/>
			<input
				type='password'
				// defaultValue='cityslicka'
				// name='user_password'
			/>

			<button><NavLink to=''>LogIn</NavLink></button>
		</form>
	);
}

export default Login;
