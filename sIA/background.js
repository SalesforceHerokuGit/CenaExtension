// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url.match( /(chrome:\/\/|chrome.google.com)/ ) ) {
    alert("Chrome blocks Shia on this page:( Try on another one!");
  } else {
    chrome.tabs.executeScript({file: "inject.js"});
    chrome.tabs.executeScript({ file: "inject2.js" });
  }
});

chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.executeScript(null, { file: "inject.js" }, function(){
    chrome.tabs.executeScript(null, { file: "inject2.js" })
  })
  
});