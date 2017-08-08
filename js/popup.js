$(document).ready(function(){

	chrome.storage.local.get(null, function(tabLimit){
		let limit = 6
		if (tabLimit['masochist-tabs-tab-count']){
			limit = tabLimit['masochist-tabs-tab-count']
		}
		$("select#tabcount").attr("selected", limit);
		$("#tabcount option[value=" + limit + "]").attr('selected', 'selected');
	})
	

	$('#tabcount').change(function(){
		chrome.storage.local.set({"masochist-tabs-tab-count": $('#tabcount').val()})
	})

});
