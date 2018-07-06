;(function($){

	$("#wrap").on("swipeUp",function(){
		var index=$(this).find("li.on").index()+1,
			WH=$(window).height(),
			len=$(this).find("li").length;
			if(index>=len) index=0;
			$(this).find("li").eq(index).addClass("on").siblings().removeClass("on");
			$(this).find("ul").animate({
				"margin-top":-index*WH+"px"
			},500,"ease")
	})

	$("#wrap").on("swipeDown",function(){
		var index=$(this).find("li.on").index()-1,
			WH=$(window).height();
			if(index<=0) index=0;
			$(this).find("li").eq(index).addClass("on").siblings().removeClass("on");
			$(this).find("ul").animate({
				"margin-top":-index*WH+"px"
			},500,"ease")
	})


})(Zepto)