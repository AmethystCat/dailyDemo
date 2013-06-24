$(document).ready(function() {
	$('nav a,footer a.up').click(function(e) {
		/*如果以上获取的超链接被点击，则将页面滑动到相应的锚点处**/
		$.scrollTo(this.hash||0,1500);
		e.preventDefault();;/*防止点击超链接后页面刷新*/
	});
});