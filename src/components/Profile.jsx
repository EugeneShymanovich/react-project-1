import React from 'react';
import './Profile.css'
const Profile = () => {
	return (
		<div className="Profile">
			<div>
				<img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
			</div>
			<div>ava + decribtion</div>
			<div>
				My posts
				<div>New posts</div>
				<div className='posts'>
				<div className='item'>
					post 1</div>
				<div className='item'>
					post 2</div>
			</div>
			</div>
		</div>
	);
};

export default Profile;
