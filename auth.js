chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({authtoken: ''}, function() {
	console.log('Initialized');
    })
})
