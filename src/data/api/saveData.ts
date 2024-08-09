export function saveData(data: unknown, file: 'words') {
	const jsonData = JSON.stringify(data);
	localStorage.setItem(file, jsonData);
}