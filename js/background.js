
function destroyWindows(){
	chrome.windows.getCurrent({'populate': true}, function(currentWindow){
		let numTabs = currentWindow.tabs.length;
		chrome.storage.local.get(function(tabLimit){
			let limit = 6
			if(tabLimit['masochist-tabs-tab-count']){
				limit = tabLimit['masochist-tabs-tab-count']
			}
			if(numTabs > limit){
				chrome.windows.remove(currentWindow.id)
			}
		})

	})
}



function init(){
	chrome.tabs.onCreated.addListener(function(tab){
		destroyWindows();
	});

}


init();