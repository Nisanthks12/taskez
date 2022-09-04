import React from 'react';
import uuid from 'react-uuid';

const Column = ({ tag, events, setEvents }) => {

	const handleAdd = () => {
		const name = prompt('Enter task name:');
		const details = prompt('Enter details:');
		if (!(name && details)) return;

		console.log(events);

		const newTask = {
			id: uuid(),
			name: name,
			details: details
		};

		const copyEvents = { ...events };
		copyEvents[tag].splice(0, 0, newTask);

		setEvents(copyEvents);
	};


	return (
		<div className='column'>
			<header className='column-header'>
				<div className='column-title'>{tag}</div>
				<div className='task-count'>0</div>
			</header>

			<div className='add-task-button' onClick={handleAdd}>
				+
			</div>

			<div className='task-container'>

				{events[tag]?.map((item) => (
					<div key={item.id} className='task'>
						<h2 className='task-name over-hide'>{item.name}</h2>
						<p className='task-details'>{item.details}</p>
					</div>
				))
				}

			</div>

		</div>
	);
};

export default Column;