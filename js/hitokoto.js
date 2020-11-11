$.get("https://v1.hitokoto.cn/?c=d",function(data,status){
	if (status == 'success'){
		$('.hitokoto').text(data.hitokoto);
	}else{
		$('.hitokoto').text('也许正义会迟到,但它永远不会缺席!');
	}
});