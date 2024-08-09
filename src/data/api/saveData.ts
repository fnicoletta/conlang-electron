// import storage from 'electron-json-storage';
//
// const fs = window.require('fs');


export function saveData(data: unknown, file: 'words') {
	// const jsonData = JSON.stringify(data);
	// const userDataPath = storage.getDataPath();
	//
	// if (file === 'words')
	// 	fs.writeFile(`${userDataPath}/ConlangWizard/words.json`, jsonData, () => {
	// 		throw new Error('Failed to save words');
	// 	});
	console.log(data, file);
}