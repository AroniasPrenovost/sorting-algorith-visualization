// `functionArg` from './sortFunctions' 

function compareData(generatedData, functionArg) {
	let data = generatedData;
 	let c = 0;
 	let shuffled;
 	
 	// if key is in original spot, +.1 opacity 
 	while (c < 5000) {
 		shuffled = functionArg(Object.entries(data));
	 	for (let e = 0; e < shuffled.length; e++) {
 			if (shuffled[e][1].key === data[e].key) {
				data[e].opacity = data[e].opacity + .1;	
			}
		}
	c++;
	}	

	return data; 
}

export {compareData};
