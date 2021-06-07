import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SubjectIcon from '@material-ui/icons/Subject';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './Sidebar.css';
import db from '../../firebase';

function Sidebar() {
	const [channels, setChannels] = useState([]);

	const getIds = async () => {
		const citiesRef = db.collection('users');
		const snapshot = await citiesRef.get();
		snapshot.forEach((doc) => {
			setChannels([...channels, doc.data()]);
			//console.log(doc.id, '=>', doc.data());
		});
	};

	//runs when the component is load
	useEffect(() => {
		getIds();
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebar_top">
				<div className="sidebar_top_left">
					Chat
					<ExpandMoreIcon />
				</div>
				<div className="sidebar_top_right">
					<SubjectIcon />
					<AddBoxIcon />
				</div>
			</div>
			<div className="sidebar_bottom">{channels.map((channel) => channel.name)}</div>
		</div>
	);
}

export default Sidebar;
