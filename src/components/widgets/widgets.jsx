import React from 'react';
import './widgets.css';

function Widgets({ title, src }) {
	return (
		<div className='widgets'>
			<iframe
				title={title}
				src={src}
				width='260'
				height='100%'
				style={{ border: 'none', overflow: 'hidden' }}
				scrolling='no'
				frameBorder='0'
				allowtransparency='true'
				allow='encrypted-media'
			></iframe>
		</div>
	);
}

export default Widgets;
