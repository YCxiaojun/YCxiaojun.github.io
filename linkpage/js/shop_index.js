$(document).ready(function(){
	$(".details_nav").mouseover(function(){
		$(this).css("display","block");
		$('.' + d_id).css("display","block");
	});
	$(".details_nav").mouseout(function(){
		$(this).css("display","none");
		$('.' + d_id).css("display","none");
	});
	$(".nav_list>li").mouseover(function(){
		d_id = $.attr(this,'id');
		$(".details_nav").css("display","block");
		$('.' + d_id).css("display","block");
		$('#' + d_id).css("background","#396daf");
		$('#' + d_id +">" + "a").css("color","#fff");
	});
	$(".nav_list>li").mouseout(function(){
		$(".details_nav").css("display","none");
		$('.' + d_id).css("display","none");
		$('#' + d_id).css("background","#f7f7f7");
		$('#' + d_id +">" + "a").css("color","#000");
	});

	//中间主banner 
	var index = 0;
	var imgnum = $('.b_m_l_top>ul>li').length;
	var nmun='';
	var imgwidth = $('.b_m_l_top>ul>li').width();
	var allimgwidth = imgwidth*imgnum;
	
	//设置主banner宽度
	$('.b_m_l_top>ul').css('width',allimgwidth);

	//主banner按钮显隐、轮播启停
	$('.b_m_l_top').hover(function(){
		clearInterval(p);
		$('.ban_btn').fadeIn();
	},function(){
		pic();
		$('.ban_btn').fadeOut();
		});
	
	//
	function pic(){
		p=setInterval(function(){
			index++;
			if(index>=imgnum){
				index=0;
			}
			selectimg(index);
		},4000);
	}
	
	function selectimg(index){
		$('.b_m_l_top>ul').stop(true,true).animate({'margin-left':'-' + imgwidth*index + 'px'},600);
		$('.img_btn').eq(index).addClass('active').siblings('li').removeClass('active');
	}
	
	$('.l_icon').click(function(){
		index-=1;
		if(index<0){ index="imgnum-1;" }="" selectimg(index);="" });="" $('.r_icon').click(function(){="" index+="1;" if(index="">imgnum-1){
				index=0;
			}
		selectimg(index);
		
	});

	$('.img_btn').eq(0).addClass('active');
	
	$('.img_btn').each(function(i){
		$(this).click(function(){
		    index=i;
			$('.b_m_l_top>ul').stop(true,true).animate({'margin-left':'-' + imgwidth*i + 'px'},600);
			$('.img_btn').eq(index).addClass('active').siblings('li').removeClass('active');
		});
	});	

	pic();

	//右侧小banner
	var sm_index = 0;
	var sm_imgnum = $('.sm_banner>li').length;
	var sm_imgwidth = $('.sm_banner>li').width();

	$('.b_main_r_top').hover(function(){
		clearInterval(sm_p);
	},
		function(){
			sm_pic();
	});

	function sm_pic(){
		sm_p=setInterval(function(){
			sm_index++;
			if(sm_index>=sm_imgnum){
				sm_index=0;
			}
			sm_selectimg(sm_index);
		},3000);
	};

	function sm_selectimg(sm_index){
		$('.sm_banner').stop(true,true).animate({'margin-left':'-' + sm_imgwidth * sm_index + 'px'},600);
		$('.slide_1>i').eq(sm_index).addClass('sm_active').siblings('i').removeClass('sm_active');
	};

	$('.slide_1>i').eq(0).addClass('sm_active');

	$('.slide_1>i').each(function(i){
		$(this).click(function(){
		    sm_index=i;
			$('.sm_banner').stop(true,true).animate({'margin-left':'-' + sm_imgwidth*i + 'px'},600);
			$('.slide_1>i').eq(sm_index).addClass('sm_active').siblings('i').removeClass('sm_active');
		});
	});
	sm_pic();

	//每日精品轮播
	
	var news_index = 0;
	var news_imgnum = $('.n_m_b_slide>li').length;
	var news_imgwidth = $('.n_m_b_slide>li').width();

	$('.news_main_bottom').hover(
	function(){
		clearInterval(news_p);
	},
	function(){
		news_pic();
	}
	);

	function news_pic(){
		news_p = setInterval(function(){
			news_index++;
			if(news_index >= news_imgnum){
				news_index = 0;
			}
			news_selectimg(news_index);
		},3500);
	};

	function news_selectimg(news_index){
		$('.n_m_b_slide').stop(true,true).animate({'margin-left':'-' + news_imgwidth * news_index + 'px'},1000);
		$('.n_m_b_l_dot').eq(news_index).addClass('news_active').siblings('i').removeClass('news_active');
	};

	$('.left_dot').click(function(){
		news_index-=1;
		if(news_index<0){ news_index="news_imgnum-1;" }="" news_selectimg(news_index);="" });="" $('.right_dot').click(function(){="" news_index+="1;" if(news_index="">news_imgnum-1){
				news_index=0;
			}
		news_selectimg(news_index);
		
	});

	$('.n_m_b_l_dot').eq(0).addClass('news_active');

	$('.n_m_b_l_dot').each(function(i){
		$(this).click(function(){
		    news_index=i;
			$('.n_m_b_slide').stop(true,true).animate({'margin-left':'-' + news_imgwidth*i + 'px'},1000);
			$('.n_m_b_l_dot').eq(news_index).addClass('news_active').siblings('i').removeClass('news_active');
		});
	});
	news_pic();
});</0){></0){>