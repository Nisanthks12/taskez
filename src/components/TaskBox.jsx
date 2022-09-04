import React from 'react';
import Column from './Column';
import Search_icon from '../assets/search_icon.svg';


const TaskBox = () => {

	const initialData = {
		"To Do": [],
		"In Progress": [],
		"Completed": []
	};

	const [events, setEvents] = React.useState(initialData);

	React.useEffect(() => {
		if (!events.length) {
			localStorage.setItem('events', JSON.stringify(initialData));
			setEvents(JSON.parse(localStorage.getItem('events')));
		} else {
			localStorage.setItem('events', JSON.stringify(events));
		}
	}, []);


	return (
		<div className='task-box'>
			<header className='task-box-header'>
				<div className='search-user-welcome-pic'>
					{/* Search Bar */}
					<div className='search-container'>
						<img src={Search_icon} alt='search icon' className='search-icon' />
						<input type='search' placeholder='Search' className='search-bar' />
					</div>

					{/* User pics */}
					<div className='user-pics'>
						<img src='https://mdbootstrap.com/img/new/avatars/1.jpg' className='user-pic' alt='user-pic' />
						<img src='https://mdbootstrap.com/img/new/avatars/2.jpg' className='user-pic' alt='user-pic' />
						<img src='https://mdbootstrap.com/img/new/avatars/3.jpg' className='user-pic' alt='user-pic' />
						<img src='https://mdbootstrap.com/img/new/avatars/4.jpg' className='user-pic' alt='user-pic' />
					</div>
					<div className='profile-container'>
						{/* Welcome Message */}
						<div className='welcome-message'>Hi User</div>
						{/* Profile pic */}
						<img src='https://mdbootstrap.com/img/new/avatars/1.jpg' className='user-pic' alt='profile-pic' />
					</div>
				</div>
				<div className='task-box-title'>Projects</div>
			</header>
			<div className='task-box-body'>
				<Column
					tag='To Do'
					events={events}
					setEvents={setEvents}
				/>
				<Column
					tag='In Progress'
					events={events}
					setEvents={setEvents}
				/>
				<Column
					tag='Completed'
					events={events}
					setEvents={setEvents}
				/>
			</div>
		</div>
	);
};

export default TaskBox;