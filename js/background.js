
function destroyWindows(){
	chrome.windows.getCurrent({'populate': true}, function(currentWindow){
		let numTabs = currentWindow.tabs.length;
		chrome.storage.local.get(function(tabLimit){
			let limit = 6
			let checked = tabLimit['masochist-tabs-checked']
			if(tabLimit['masochist-tabs-tab-count']){
				limit = tabLimit['masochist-tabs-tab-count']
			}
			if(numTabs > limit){
				chrome.windows.remove(currentWindow.id)
			}
			if (numTabs == limit){
				if(checked){
					chrome.notifications.create(null, {"type": "basic", "title": "Masochist Tabs, WARNING", "message": "Be careful! One more tab and you'll overextend you limit and your browser will close!", "iconUrl": "icons/mt128.png"}, function(notifiactionId){});			
				}
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