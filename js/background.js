
function destroyWindows(){
	chrome.tabs.query({'currentWindow': true},function(tabs){

	})

	chrome.windows.getCurrent({'populate': true}, function(currentWindow){
		let numTabs = currentWindow.tabs.length;
		if(numTabs > 6){
			chrome.windows.remove(currentWindow.id)
		}
	})
}



function init(){
	chrome.tabs.onCreated.addListener(function(tab){
		destroyWindows();
	});

}


init();