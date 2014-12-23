//新着確認後の処理
$(function(){
	$("#modal-open").click(function() {
           	//alert("ようこそ！");
           	var news=0;
           	var sampleNode=document.getElementById("new_count");
        		sampleNode.innerHTML="";
           	//$("#new_count").remove(); 
	});
});
//oteafriends申請ボタンの申請済み処理
$(function() {
        $(".oteafriends_right").click(function(){
        	var pushed_design = {
    		"background-color":"#ff905a",
    		"border-color":"#ff905a"
	}
	$(this).css(pushed_design).text("申請済み");;
	/*var button_id=0;
	for (var i = 0; i <100 ; i++) {
		if (button_id==i) {
			$(".oteafriends_right").css(pushed_design).text("申請済み");;	
		};
	};*?
	/*switch(.oteafriends_right.id){
		class='0';
		$(0).css(pushed_design).text("申請済み");;
		break;
		class="1"

	}*/
            //$(".oteafriends_right").css(pushed_design).text("申請済み");;
        });　　
    });