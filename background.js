function executeMain() {
	chrome.tabs.executeScript({
		file: "main.js"
	});
}

chrome.browserAction.onClicked.addListener(executeMain);
