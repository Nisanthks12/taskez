import './Home.css';
import './task.css';
import './sidenav.css';
import React from 'react';
import SideNav from './SideNav';
import TaskBox from './TaskBox';


const Home = () => {

	return (
		<div className='App'>
			<SideNav />

			<TaskBox />
		</div>

	);
}

export default Home;