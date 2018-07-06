function GetRequest() {
	var urll = location.search;
	var url = decodeURI(urll)
	//获取url中"?"符后的字串
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
var Request = undefined;
Request = GetRequest();

function popup(popupName) {
	var _scrollHeight = $(document).scrollTop(), //获取当前窗口距离页面顶部高度
		_windowHeight = $(window).height(), //获取当前窗口高度
		_windowWidth = $(window).width(), //获取当前窗口宽度
		_popupHeight = popupName.height(), //获取弹出层高度
		_popupWeight = popupName.width(); //获取弹出层宽度
	_posiTop = (_windowHeight - _popupHeight) / 2;
	_posiLeft = (_windowWidth - _popupWeight) / 2;
	popupName.css({
		"left": _posiLeft + "px",
		"top": _posiTop + "px",
		"display": "block"
	}); //设置position
};