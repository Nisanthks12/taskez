import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
	return (
		<div className='side-nav'>
			<h1 className='event-bar-title fg1'>.taskez</h1>

			<div className='event-container fg4'>
				<div className='event over-hide'>
					Overview
				</div>
				<div className='event over-hide'>
					Stats
				</div>
				<div className='event selected-event'>
					Project
				</div>
				<div className='event over-hide'>
					Chat
				</div>
				<div className='event over-hide'>
					Calendar
				</div>
			</div>

			<div className='event-bar-footer fg1'>
				<div className='event-bar-footer-item'>
					<div className='event'>Setting</div>
				</div>
				<Link to='/'>
					<div className='event-bar-footer-item'>
						<div className='event'>Log Out</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default SideNav;