chrome.runtime.onInstalled.addListener(function() {
  

    chrome.storage.sync.set({authtoken: ''}, function() {
	console.log('Initialized');
    })
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'owe.channels.dev.repay.localhost'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  
})