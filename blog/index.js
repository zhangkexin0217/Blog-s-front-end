

window.onload = function () {
	
	//�����˵�
	$().getClass('member').hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$().getClass('member_ul').show();
	}, function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$().getClass('member_ul').hide();
	});
	
	//������¼
	var login = $().getId('login');
	var screen = $().getId('screen');
	login.center(350, 250);
	$().resize(function () {
		login.center(350, 250);
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$().getClass('login').click(function () {
		login.css('display', 'block');
		screen.lock();
	});
	$().getClass('close').click(function () {
		login.css('display', 'none');
		screen.unlock();
	});
	
	//��ק
	login.drag();
	
	//var oDiv = document.getElementById('login');
	
	


	

	
};
















