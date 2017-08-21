import React from 'react';

const Layout = ({restaurantName, headerPicture}) => ( 
	<header>
		HEADER
		name: {restaurantName}
		<img src={headerPicture} />
		
  </header>	
)

export default Layout;
