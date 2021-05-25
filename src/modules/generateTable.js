const generateTable = () => {
	let myTableDiv = document.getElementById('myDynamicTable');
	let table = document.createElement('TABLE');
	table.border = '1';
	let tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);
	for (let i = 0; i < 61; i++) {
		let tr = document.createElement('TR');
		tableBody.appendChild(tr);
		for (let j = 0; j < 61; j++) {
			let td = document.createElement('TD');
			td.width = '50';
			if (j === 0) {
				let p = document.createElement('p');
				p.classList.add('rotate');
				let t = document.createTextNode(i-1);
				p.appendChild(t);
				td.appendChild(p);
				td.classList.add('outer');
			}  
			if (i === 0 && j !== 0) {
				td.appendChild(document.createTextNode(j-1));
				td.classList.add('outer');
			}
			if (i !== 0 && j !== 0) {
				td.classList.add('color');
				// apply color based on data 
			}

			let modalId = 'modal_' + i+j; 
			td.onmouseover = function(e) {
				e.preventDefault();
				if (!this.classList.contains('outer')) {
					// add modal 
					let newElement = document.createElement('div');
					newElement.id = modalId; 
					newElement.classList += 'modal-overlay';
					newElement.style.margin = (e.clientY /1.5) + 'px 0px 0px ' + (e.clientX / 1.5) + 'px'; 
					newElement.innerText = 'Frequency: ' + this.dataset.frequency + ''; 
					document.body.append(newElement)
				}
			}

			td.onmouseout = function(e) {
				e.preventDefault();
				if (!this.classList.contains('outer')) {
					// remove modal 
					document.getElementById(modalId).outerHTML = '';
				}
			}
			
			tr.appendChild(td);
		}
	}

	myTableDiv.appendChild(table);
}

export {generateTable};
