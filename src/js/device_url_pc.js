if(device.mobile() || device.tablet()){
	if(window.navigator.userAgent.toLowerCase().match('ucbrowser')) window.location.replace("index_uc.html" + window.location.search + window.location.hash);
	else window.location.replace("/" + window.location.search + window.location.hash);
}