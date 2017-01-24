$('.nav-tabs a[data-toggle="tab"]').click(function(e) {
	var scroll = $(document).scrollTop();
	var tabs = $(this).closest('.nav-tabs');
	window.location.hash = this.hash;
	$("html, body").scrollTop( tabs.offset().top );
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	var target = this.href.split('#');
	var tab = $('.nav a').filter('[href="#'+target[1]+'"]');
	var tabs = tab.closest('.nav-tabs');
	$("html, body").scrollTop( tabs.offset().top );
	tab.tab('show');
	resize_regions();
});

$(document).on('click','[data-toggle="collapse"]',function(e) {
	e.preventDefault();
});

$('[data-toggle=tooltip]').tooltip({container: 'body', html: true});

$('[data-toggle=popover]').popover({container: 'body', html: true});
