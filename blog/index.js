/*
window.onload = function () {
	alert(document.body);
};

var a = function () {};
alert(typeof a);


$(function () {
	alert(document.body);
});


$().ready(function () {
	alert(document.body);
});
*/

$(function () {
	//��������
	$('#header .member').hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$('#header .member_ul').show();
	}, function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$('#header .member_ul').hide();
	});
	
	//��¼��
	var login = $('#login');
	var screen = $('#screen');
	login.center(350, 250).resize(function () {
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .login').click(function () {
		login.center(350, 250);
		login.css('display', 'block');
		screen.lock();
	});
	$('#login .close').click(function () {
		login.css('display', 'none');
		screen.unlock();
	});
	
	//��ק
	login.drag($('#login h2').last());
});


/*
window.onload = function () {
	
	//��������
	$().getClass('member').hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$().getClass('member_ul').show();
	}, function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$().getClass('member_ul').hide();
	});
	
	//��¼��
	var login = $().getId('login');
	var screen = $().getId('screen');
	login.center(350, 250).resize(function () {
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$().getClass('login').click(function () {
		login.center(350, 250);
		login.css('display', 'block');
		screen.lock();
	});
	$().getClass('close').click(function () {
		login.css('display', 'none');
		screen.unlock();
	});

	
	//��ק
	login.drag([$().getTagName('h2').getElement(0)]);
	
	

	
};
*/















