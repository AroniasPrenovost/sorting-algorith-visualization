const generateData = () => {
	var newDataSet = [];
	let i = 0; 
	while (i < 3600) {
		let item = {}
		let r = i; // order 1, 2, 3... 
		item.key = r;
		item.baseColor = 'white';
		item.color1 = '#ffbe76';
		item.color2 = '#ff7979';
		item.color3 = '#badc58';
		item.color4 = '#dff9fb';
		item.color5 = '#f9ca24';
		item.color6 = '#f0932b';
		item.color7 = '#eb4d4b';
		item.color8 = '#6ab04c';
		item.color9 = '#22a6b3';
		item.color10 = '#be2edd';
		item.opacity = .0;  
		newDataSet.push(item)
		i++; 
	}
	
	return newDataSet;  
} 
 
export {generateData};
