if(!device.mobile() && !device.tablet()){
    window.location.replace("pc.html" + window.location.search + window.location.hash);
}else{
	// alert($('.street_all_in').height());
	// alert('ucbrowser:'+ window.navigator.userAgent.toLowerCase().match('ucbrowser'));
	// if(window.navigator.userAgent.toLowerCase().match('ucbrowser')) window.location.replace("index_uc.html" + window.location.search + window.location.hash);
}