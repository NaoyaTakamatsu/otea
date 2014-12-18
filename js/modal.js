$(function() {
    /*$(document).ready(function(){
     $('#modal-open').badger('2');}*/
    /*$('#modal-open').badger('2');*/

//モーダルウィンドウを出現させるクリックイベント
    $("#modal-open").click(function() {

        //オーバーレイを出現させる
        $("body").append('<div id="modal-overlay style=" z-index:1;display:none;position:fixed;top:0;left:0;width:100%;height:120%; background-color:rgba(0,0,0,0.75);width:100%; height:120%; background-color:rgba(0,0,0,0.75);"></div>');
        $("#modal-overlay").fadeIn("slow");

        //コンテンツをセンタリングする
        centeringModalSyncer();

        //コンテンツをフェードインする
        $("#modal-content").fadeIn("slow");

        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $("#modal-overlay,#modal-close").unbind().click(function() {

            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $("#modal-content,#modal-overlay").fadeOut("slow", function() {

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove();

            });

        });

    });

//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $(window).resize(centeringModalSyncer);

//センタリングを実行する関数
    function centeringModalSyncer() {

        //画面(ウィンドウ)の幅、高さを取得
        var w = $(window).width();
        var h = $(window).height();

        //コンテンツ(#modal-content)の幅、高さを取得
        var cw = $("#modal-content").outerWidth({margin: true});
        var ch = $("#modal-content").outerHeight({margin: true});

        //センタリングを実行する
        $("#modal-content").css({"left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px"})

    }

});