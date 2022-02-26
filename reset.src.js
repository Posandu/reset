const $ = (...args) =>
	document.querySelectorAll(...args).length === 1
		? document.querySelector(...args)
		: document.querySelectorAll(...args);
        
const log = (...stuff) => console.log(...stuff);
