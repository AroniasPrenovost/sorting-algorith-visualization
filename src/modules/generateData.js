const generateData = () => {
	var newDataSet = [];
	let i = 0; 
	while (i < 3600) {
		let item = {}
		let r = i; // order 1, 2, 3... 
		item.key = r;
		item.baseColor = 'white';
		item.color1 = '#e1e1ef';
		item.color2 = '#dad2f1';
		item.color3 = '#dbc2ef';
		item.color4 = '#e1afe7';
		item.color5 = '#ea9bd9';
		item.color6 = '#f484c5';
		item.color7 = '#fd6cab';
		item.color8 = '#ff518c';
		item.color9 = '#ff3268';
		item.color10 = '#fb0741';
		item.opacity = .0;  
		newDataSet.push(item)
		i++; 
	}
	
	return newDataSet;  
} 
 
export {generateData};
