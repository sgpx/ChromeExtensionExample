let query = {text:""};
let myCallback = (e) => {
	console.log("history");
	console.log(e);
};
chrome.runtime.onInstalled.addListener(function() {
	console.log(chrome.history.search(query,myCallback));
});
