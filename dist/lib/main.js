require.config({
	baseUrl : 'dist/lib',
	paths : {
		'common'   : 'common',
		'language' : 'language',
		'index'    : 'index',
		'tweenlite': 'TweenLite',
		'easepack' : 'EasePack',
		'raf'      : 'rAF',
	}
});
require(['common','language','index','tweenlite','easepack','raf'],function(common,la){
	$(function(){
		var lang = common.GetRequest()["lang"];
		var anchora = common.GetRequest()["anchor"];
		if(lang == undefined){
			lang = 'eng'
		};
		if(lang == 'eng' || lang == undefined || lang == 'undefined'){
			la.lag(1);
			la.load(1);
			la.lbImg(1)
			la.hf(1);
			la.fs(1)
			la.ima(1)
			la.Email(1)
			$('.china-flag').show();
			$('.lcente').css('letter-spacing',0)
		}else if(lang == 'ch' || lang == undefined || lang == 'undefined'){
			la.lag(0);
			la.load(0);
			la.lbImg(0)
			la.hf(0);
			la.fs(0);
			la.ima(0);
			la.Email(0)
			$('.usa-flag').show();
		}else{
			la.lag(2);
			la.load(2);
			la.lbImg(2)
			la.hf(2);
			la.fs(2);
			la.ima(2);
			la.Email(2)
			// $('.usa-flag').show();
		};
		$('body').show();
		
		//点击中英文切换按钮
		/*$('#index-flag').click(function(){
			if(lang == 'eng' || lang == undefined || lang == 'undefined'){
				window.location.href = window.location.pathname +"?lang=ch";
				return false;
			}else{
				window.location.href = window.location.pathname +"?lang=eng";
				return false;
			}
		});*/

		$('.zmList').on("click","li",function(){
			var aa = $(this).data("name");
			var opt = $(this).text();
			if(aa=="1"){
				return;
			}
			if(opt=="中文"){
				window.location.href = window.location.pathname +"?lang=ch";
				return false;
			}else if(opt=="English"){
				window.location.href = window.location.pathname +"?lang=eng";
				return false;
			}else if(opt=="日本語"){
				window.location.href = window.location.pathname +"?lang=ja";
				return false;
			}
		});
		

		if(lang=="eng"){
			$('.zmList li:eq(0)').text("English")
			$('.zmList li:eq(1)').text("中文")
			$('.zmList li:eq(2)').text("日本語")
			$('.zmList li:eq(3)').text("English")
		}else if(lang=="ch"){
			$('.zmList li:eq(1)').text("English")
			$('.zmList li:eq(0)').text("中文")
			$('.zmList li:eq(2)').text("日本語")
			$('.zmList li:eq(3)').text("中文")
		}else if(lang=="ja"){
			$('.zmList li:eq(2)').text("English")
			$('.zmList li:eq(1)').text("中文")
			$('.zmList li:eq(0)').text("日本語")
			$('.zmList li:eq(3)').text("日本語")
		}else{
			$('.zmList li:eq(0)').text("English")
			$('.zmList li:eq(1)').text("中文")
			$('.zmList li:eq(2)').text("日本語")
			$('.zmList li:eq(3)').text("English")
		}

		$('#indexPage').attr("href","index.html" +"?lang="+lang);
		$('#indexLogo').attr("href","index.html" +"?lang="+lang);
		$('#projecta').attr("href","index.html" +"?lang="+lang+"&anchor=project");
		$('#roadmapa').attr("href","index.html" +"?lang="+lang+"&anchor=roadmap");
		$('#teama').attr("href","index.html" +"?lang="+lang+"&anchor=team");
		$('#faqa').attr("href","index.html" +"?lang="+lang+"&anchor=faq");
		$('#newsa').attr("href","index.html" +"?lang="+lang+"&anchor=news");
		//web锚点定位
		$('#indexPageWeb').attr("href","webindex.html" +"?lang="+lang);
		$('#indexLogoWeb').attr("href","webindex.html" +"?lang="+lang);
		$('#projectaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=project");
		$('#roadmapaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=roadmap");
		$('#teamaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=team");
		$('#faqaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=faq");
		$('#newsaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=news");
		
		
		$('.haa').on('click', function() {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 10
			}, 600);
			return false;
		});
		$(function(){
			if(anchora !== undefined){
			setTimeout(function(){
				var ac = '#' + anchora
				$('html, body').animate({
					scrollTop: $(ac).offset().top - 10
				}, 600);
				return false;
			},50)
		};
		})
		$('.faq').click(function(){
				window.location.href = 'FAQ.html?lang='+lang
			})
		$('.whiteBook').each(function(idx,ele){
			$(ele).hover(function(){
				$(ele).find($('.wb-tr')).animate({
					marginTop : "-44px"
				},350)
			},function(){
				$(ele).find($('.wb-tr')).animate({
					marginTop : "15px"
				},350)
			});
		});
		$('#reg').click(function(){
			window.location.href = 'reg.html?lang='+lang;
			return false;
		})
		$('#webreg').click(function(){
			window.location.href = 'webreg.html?lang='+lang;
			return false;
		})
		//点击查看世界大图
		$('.map').click(function(){
			$('#mong').show();
			$('#mong-box').show();
			common.popup($('.mong-img'));
			$('.close').click(function(){
				$('#mong').hide();
				$('#mong-box').hide();
			})
		});
	})
})

require.config({
	baseUrl : 'dist/lib',
	paths : {
		'common'   : 'common',
		'language' : 'language',
		'index'    : 'index',
		'tweenlite': 'TweenLite',
		'easepack' : 'EasePack',
		'raf'      : 'rAF',
	}
});
require(['common','language','index','tweenlite','easepack','raf'],function(common,la){
	$(function(){
		var lang = common.GetRequest()["lang"];
		var anchora = common.GetRequest()["anchor"];
		if(lang == undefined){
			lang = 'eng'
		};
		if(lang == 'eng' || lang == undefined || lang == 'undefined'){
			la.lag(1);
			la.load(1);
			la.lbImg(1)
			la.hf(1);
			la.fs(1)
			la.ima(1)
			la.Email(1)
			$('.china-flag').show();
			$('.lcente').css('letter-spacing',0)
		}else{
			la.lag(0);
			la.load(0);
			la.lbImg(0)
			la.hf(0);
			la.fs(0);
			la.ima(0);
			la.Email(0)
			$('.usa-flag').show();
		};
		$('body').show();
		
		//点击中英文切换按钮
		$('#index-flag').click(function(){
			if(lang == 'eng' || lang == undefined || lang == 'undefined'){
				window.location.href = window.location.pathname +"?lang=ch";
				return false;
			}else{
				window.location.href = window.location.pathname +"?lang=eng";
				return false;
			}
		});
		$('#indexPage').attr("href","index.html" +"?lang="+lang);
		$('#indexLogo').attr("href","index.html" +"?lang="+lang);
		$('#projecta').attr("href","index.html" +"?lang="+lang+"&anchor=project");
		$('#roadmapa').attr("href","index.html" +"?lang="+lang+"&anchor=roadmap");
		$('#teama').attr("href","index.html" +"?lang="+lang+"&anchor=team");
		$('#faqa').attr("href","index.html" +"?lang="+lang+"&anchor=faq");
		$('#newsa').attr("href","index.html" +"?lang="+lang+"&anchor=news");
		//web锚点定位
		$('#indexPageWeb').attr("href","webindex.html" +"?lang="+lang);
		$('#indexLogoWeb').attr("href","webindex.html" +"?lang="+lang);
		$('#projectaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=project");
		$('#roadmapaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=roadmap");
		$('#teamaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=team");
		$('#faqaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=faq");
		$('#newsaWeb').attr("href","webindex.html" +"?lang="+lang+"&anchor=news");
		
		
		$('.haa').on('click', function() {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 10
			}, 600);
			return false;
		});
		$(function(){
			if(anchora !== undefined){
			setTimeout(function(){
				var ac = '#' + anchora
				$('html, body').animate({
					scrollTop: $(ac).offset().top - 10
				}, 600);
				return false;
			},50)
		};
		})
		$('.faq').click(function(){
				window.location.href = 'FAQ.html?lang='+lang
			})
		$('.whiteBook').each(function(idx,ele){
			$(ele).hover(function(){
				$(ele).find($('.wb-tr')).animate({
					marginTop : "-44px"
				},350)
			},function(){
				$(ele).find($('.wb-tr')).animate({
					marginTop : "15px"
				},350)
			});
		});
		$('#reg').click(function(){
			window.location.href = 'reg.html?lang='+lang;
			return false;
		})
		$('#webreg').click(function(){
			window.location.href = 'webreg.html?lang='+lang;
			return false;
		})
		//点击查看世界大图
		$('.map').click(function(){
			$('#mong').show();
			$('#mong-box').show();
			common.popup($('.mong-img'));
			$('.close').click(function(){
				$('#mong').hide();
				$('#mong-box').hide();
			})
		});
	})
})
require.config({baseUrl:'dist/lib',paths:{'common':'common','language':'language','index':'index','tweenlite':'TweenLite','easepack':'EasePack','raf':'rAF',}});require(['common','language','index','tweenlite','easepack','raf'],function(common,la){$(function(){var lang=common.GetRequest()["lang"];var anchora=common.GetRequest()["anchor"];if(lang==undefined){lang='eng'};if(lang=='eng'||lang==undefined||lang=='undefined'){la.lag(1);la.load(1);la.lbImg(1)
    la.hf(1);la.fs(1)
    la.ima(1)
    la.Email(1)
    $('.china-flag').show();$('.lcente').css('letter-spacing',0)}else{la.lag(0);la.load(0);la.lbImg(0)
    la.hf(0);la.fs(0);la.ima(0);la.Email(0)
    $('.usa-flag').show();};$('body').show();$('#index-flag').click(function(){if(lang=='eng'||lang==undefined||lang=='undefined'){window.location.href=window.location.pathname+"?lang=ch";return false;}else{window.location.href=window.location.pathname+"?lang=eng";return false;}});$('#indexPage').attr("href","index.html"+"?lang="+lang);$('#indexLogo').attr("href","index.html"+"?lang="+lang);$('#projecta').attr("href","index.html"+"?lang="+lang+"&anchor=project");$('#roadmapa').attr("href","index.html"+"?lang="+lang+"&anchor=roadmap");$('#teama').attr("href","index.html"+"?lang="+lang+"&anchor=team");$('#faqa').attr("href","index.html"+"?lang="+lang+"&anchor=faq");$('#newsa').attr("href","index.html"+"?lang="+lang+"&anchor=news");$('#indexPageWeb').attr("href","webindex.html"+"?lang="+lang);$('#indexLogoWeb').attr("href","webindex.html"+"?lang="+lang);$('#projectaWeb').attr("href","webindex.html"+"?lang="+lang+"&anchor=project");$('#roadmapaWeb').attr("href","webindex.html"+"?lang="+lang+"&anchor=roadmap");$('#teamaWeb').attr("href","webindex.html"+"?lang="+lang+"&anchor=team");$('#faqaWeb').attr("href","webindex.html"+"?lang="+lang+"&anchor=faq");$('#newsaWeb').attr("href","webindex.html"+"?lang="+lang+"&anchor=news");$('.haa').on('click',function(){$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top-10},600);return false;});$(function(){if(anchora!==undefined){setTimeout(function(){var ac='#'+anchora
    $('html, body').animate({scrollTop:$(ac).offset().top-10},600);return false;},50)};})
    $('.faq').click(function(){window.location.href='FAQ.html?lang='+lang})
    $('.whiteBook').each(function(idx,ele){$(ele).hover(function(){$(ele).find($('.wb-tr')).animate({marginTop:"-44px"},350)},function(){$(ele).find($('.wb-tr')).animate({marginTop:"15px"},350)});});$('#reg').click(function(){window.location.href='reg.html?lang='+lang;return false;})
    $('#webreg').click(function(){window.location.href='webreg.html?lang='+lang;return false;})
    $('.map').click(function(){$('#mong').show();$('#mong-box').show();common.popup($('.mong-img'));$('.close').click(function(){$('#mong').hide();$('#mong-box').hide();})});})})
