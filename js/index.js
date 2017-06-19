//tab
	$('.item2 .tab3 h4').click(function(){
		$('.item2 .tab-item').eq($(this).index()).show().siblings().hide()
	})

	//经过li 改变图片
	var liH = $('.item4 .cons li').height()
	var liW = $('.item4 .cons li').width()
	$('.item4 .cons .bg-li').hover(function(){
		//改变背景
		$(this).find('span').css({'background-position':'0 -160px','z-index':100})

		console.log($(this).index())

		//console.log($('.item4 .cons .bg-li').length)//5
		if($(this).index()== 0){ //经过第一张图片时
			$(this).find('.gs').eq(0).css('z-index',99).animate({'left':0,'top':2*liH,'opacity':1},500)
			$(this).find('.gs').eq(1).css('z-index',99).animate({'left':liW,'top':2*liH,'opacity':1},500)
		}else if($(this).index() == 2){  //经过第二张图片时
			$(this).find('.gs').eq(0).css('z-index',99).animate({'left':-liW,'top':0,'opacity':1},500)
		}else if($(this).index() == 4){  //经过第二张图片时
			$(this).find('.gs').eq(0).css('z-index',99).animate({'left':0,'top':-liH,'opacity':1},500)
			$(this).find('.gs').eq(1).css('z-index',99).animate({'left':0,'top':liH,'opacity':1},500)
		}else if($(this).index() == 5){  //经过第二张图片时
			$(this).find('.gs').eq(0).css('z-index',99).animate({'left':-liW,'top':liH,'opacity':1},500)
		}else if($(this).index() == 8){  //经过第二张图片时
			$(this).find('.gs').eq(0).css('z-index',99).animate({'left':-liW*2,'top':-liH,'opacity':1},500)
			$(this).find('.gs').eq(1).css('z-index',99).animate({'left':-2*liW,'top':0,'opacity':1},500)
			$(this).find('.gs').eq(2).css('z-index',99).animate({'left':-liW,'top':0,'opacity':1},500)
		}
	},function(){
		$(this).find('span').css({'background-position':'0 0','z-index':1})
		$(this).find('.gs').animate({'left':0,'top':0,'opacity':0},500).css('z-index',-1)
	})

	//图片
	$('.item3 .pics a').hover(function(){
		$(this).find('h5').stop().animate({'bottom':0,},500)
	},function(){
		$(this).find('h5').stop().animate({'bottom':-40,},500)
	})
	$('.item3 .pics a h5').hover(function(){
		$(this).css({'color':'blue','text-decoration':'underline'})
	},function(){
		$(this).css({'color':'#fff','text-decoration':'none'})
	})


	$(document).scroll(function(){
		var WH = window.innerHeight;
		var H = $('.item').height()
		var Top = $(document).scrollTop();
		if(Top >=0 && Top < H-WH){
			$('.home').css({'background-position':'50% '+-(Top/5)+'px'})
			$('.home .hand').css({'background-position':'50% '+(Top)+'px'})
			//第二屏的笔往上
			//$('.item1 .pen').css({'background-position':'50% '+-(H-Top)+'px'})
		}else if( Top >= H-WH && Top < 2*H-WH){ 
			$('.item1').css({'background-position':'50% '+-((Top-H)/5)+'px'})
			$('.item1 .qiqiu').css({'background-position':'50% 0'})
			$('.item1 .pen').css({'background-position':'50% '+(Top-H)+'px'})
		}else if(Top >= 2*H-WH && Top < 3*H-WH){
			$('.item2').css({'background-position':'50% '+-((Top-2*H)/5)+'px'})
			//第四屏的小灯往上走
			//$('.item3 .deng').css({'background-position':'50% '+(Top-3*H)+'px'})
		}else if(Top >= 3*H-WH && Top < 4*H-WH){
			$('.item3').css({'background-position':'50% '+-((Top-3*H)/5)+'px'})
			$('.item3 .deng').css({'background-position':'50% '+(Top-3*H)/2+'px'})
			$('.item3 .light').css({'background-position':'50% '+(Top-3*H)/4+'px'})

		}else if(Top >= 4*H-WH && Top < 5*H){
			console.log(Top)
			$('.item4').css({'background-position':'50% '+-((Top-4*H)/5)+'px'})
			$('.item4 .people').css({'background-position':'50% '+(Top-4*H)/2+'px'})
			$('.item4 .clock').css({'background-position':'50% '+(Top-4*H)/4+'px'})
			$('.item5 .hand').css({'background-position':'50% '+(Top-5*H)+'px'})
		}else if(Top >= 5*H-WH && Top < 6*H){
			$('.item5').css({'background-position':'50% '+-((Top-5*H)/4)+'px'})
			$('.item5 .hand').css({'background-position':'50% '+(Top-5*H)+'px'})
		}
	})


