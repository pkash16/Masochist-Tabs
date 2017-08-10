$(document).ready(function(){

	initialize()

	function initialize(){
		chrome.storage.local.get(null, function(tabLimit){
			let limit = 6
			let checked = false
			if (tabLimit['masochist-tabs-tab-count']){
				limit = tabLimit['masochist-tabs-tab-count']
			}
			if (tabLimit['masochist-tabs-checked']){
				checked = tabLimit['masochist-tabs-checked']
			}
			$('#checkboxid').prop("checked", checked)
			$("select#tabcount").attr("selected", limit);
			$("#tabcount option[value=" + limit + "]").attr('selected', 'selected');
		})
	}
	

	$('#tabcount').change(function(){
		if ($('#checkboxid').is(":checked")){
			chrome.storage.local.set({"masochist-tabs-tab-count": $('#tabcount').val(), "masochist-tabs-checked": true}, initialize)
		}else{
			chrome.storage.local.set({"masochist-tabs-tab-count": $('#tabcount').val(), "masochist-tabs-checked": false}, initialize)
		}
	})

	$('#checkboxid').change(function(){
		if ($('#checkboxid').is(":checked")){
			chrome.storage.local.set({"masochist-tabs-tab-count": $('#tabcount').val(), "masochist-tabs-checked": true}, initialize)
		}else{
			chrome.storage.local.set({"masochist-tabs-tab-count": $('#tabcount').val(), "masochist-tabs-checked": false}, initialize)
		}
	})

});
