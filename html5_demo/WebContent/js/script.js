$(document).ready(function() {
	$('nav a,footer a.up').click(function(e) {
		/*������ϻ�ȡ�ĳ����ӱ��������ҳ�滬������Ӧ��ê�㴦**/
		$.scrollTo(this.hash||0,1500);
		e.preventDefault();;/*��ֹ��������Ӻ�ҳ��ˢ��*/
	});
});