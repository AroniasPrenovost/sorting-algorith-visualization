import {generateData} from './modules/generateData';
import {compareData} from './modules/compareData';
import {generateTable} from './modules/generateTable';
import {es6shuffle, es6shuffleTwo, prototype, nativeSwap, fisherYates} from "./modules/sortFunctions";

// initialize 
generateTable();

// pass sorted outcome to the table
const populateTable = args => {
let colors = document.getElementsByClassName('color');
	for(let i = 0; i < colors.length; i++){
		// monotone heat map 
		/* if (!args) {
   			colors[i].style.backgroundColor = '#c7ecee';
   		} else {
			colors[i].style.backgroundColor = args[i].baseColor;
			colors[i].style.opacity = args[i].opacity;
   		}
   	*/

		// color spectrum 
		if (!args) {
			colors[i].style.backgroundColor = '#22a6b3';
			colors[i].dataset.frequency = ''; 
		} else {
			
			// round to 1 decimal point 
			args[i].opacity = Number((Math.round(args[i].opacity * 10) / 10).toFixed(1));

			// assign frquency
			colors[i].dataset.frequency = args[i].opacity * 10; 

			if (args[i].opacity === .0) {
				colors[i].style.backgroundColor = args[i].baseColor;
			} else if (args[i].opacity < .1) {
				colors[i].style.backgroundColor = args[i].color1;
			} else if (args[i].opacity < .2) {
				colors[i].style.backgroundColor = args[i].color2;
			} else if (args[i].opacity < .3) {
				colors[i].style.backgroundColor = args[i].color3;
			} else if (args[i].opacity < .4) {
				colors[i].style.backgroundColor = args[i].color4;
			} else if(args[i].opacity < .5) {
				colors[i].style.backgroundColor = args[i].color5;
			}else if (args[i].opacity < .6) {
				colors[i].style.backgroundColor = args[i].color6;
			} else if(args[i].opacity < .7) {
				colors[i].style.backgroundColor = args[i].color7;
			} else if (args[i].opacity < .8) {
				colors[i].style.backgroundColor = args[i].color8;
			} else if (args[i].opacity < .9) {
				colors[i].style.backgroundColor = args[i].color9;
			}else {
				colors[i].style.backgroundColor = args[i].color10;
			}
		}
	}
}

// populate empty table 
populateTable();

// shuffle dropdown 
let current = null;
let tableData = null; 
document.addEventListener('DOMContentLoaded', function(event) {
	document.getElementById('shuffleSelect').addEventListener('click', function() {
		if (this.value !== current) {

			current = this.value; 

			switch(this.value) {
				case 'es6Shuffle':
					tableData = compareData(generateData(), es6shuffle); 
					break;
				case 'es6ShuffleTwo':
					tableData = compareData(generateData(), es6shuffleTwo); 
					break;
				case 'prototype':
					tableData = compareData(generateData(), prototype); 
					break;
				case 'nativeSwap': 
					tableData = compareData(generateData(), nativeSwap); 
					break; 
				case 'fisherYates': 
					tableData = compareData(generateData(), fisherYates); 
					break;
				default:
					// tableData = compareData(generateData(), es6shuffle); 
			} 

			populateTable(tableData);
		}
	}); 	
}); 
