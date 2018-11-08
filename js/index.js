
$(function(){
	$('.contentLeft ul').on({
		click:function(){
			if($(this).text()=="首页"){
				$('.contentRight').load();
				return;
			}
			if($(this).text()=="栏目管理"){
				$('.contentRight').load('kd_lm.html');
				return;
			}
			if($(this).text()=="资讯管理"){
				$('.contentRight').load('kd_zx.html');
				return;
			}
			if($(this).text()=="用户管理"){
				$('.contentRight').load('kd_yh.html');
				return;
			}
		}
	},'li');
})






