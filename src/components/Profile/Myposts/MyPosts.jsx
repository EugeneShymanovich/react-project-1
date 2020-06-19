import React from 'react';
import s from './MyPosts.module.css';
const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkQ1st30T1CSyaALjjFsp-Aq_47nXYvfEheDOPV34l-k6yeK38&usqp=CAU'/>
				<div className={s.item}>post 1</div>
								<div className="item">post 2</div>
				<div className="item">post 3</div>
				<div className="item">post 4</div>
				<div className="item">post 5</div>
				<div className="item">post 6</div>
			</div>
		</div>
	);
};

export default MyPosts;
