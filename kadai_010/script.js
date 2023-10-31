$(function(){
    //ボタンアニメーション
    $('.button-more').on('mouseover',function(){
        $(this).animate({
            opacity:0.5,
            marginLeft:20,
        },100);
    });
    $('.button-more').on('mouseout',function(){
        $(this).animate({
            opacity:1.0,
            marginLeft:0,
        },100);
    });
    //カルーセル
    $('.carousel').slick({
    autoplay:true,
    dots: true,
    Infinity: true,
    autoplaySpeed: 5000,
    arrows: false,
    });

    // AjaxでSTATIC FORMSにデータを送信
    $('#submit').on('click',function(event){
        //formタグによる送信を拒否
        event.preventDefault();

        //入力チェックをした結果、エラーがあるかないか判定
        let result=inputCheck();

        //エラー判定とメッセージを取得
        let error=result.error;
        let message=result.message;

        //エラーがなかったらフォームを送信する
        if(error==false){
            //Ajaxでformを送信する
            $.ajax({
                url:'https://api.staticforms.xyz/submit',
                type: 'POST',
                dataType: 'json',
                data: $('#form').serialize(),
                succese:function(result){
                    alert('お問合せを送信しました。')
                },
                error: function(xhr,resp,text){
                    alert('お問合せを送信できませんでした。')
                }
            })
        }else{
            //エラーメッセージを表示する
            alert(message);
        }
    });

    // フォーカスが外れたとき（blur）にフォームの入力チェックをする
    $('#name').blur(function(){
        inputCheck();
    });
    $('#furigana').blur(function(){
        inputCheck();
    });
    $('#email').blur(function(){
        inputCheck();
    });
    $('#tel').blur(function(){
        inputCheck();
    });
    $('#message').blur(function(){
        inputCheck();
    });
    $('#prefecture').blur(function(){
        inputCheck();
    });
    $('#agree').blur(function(){
        inputCheck();
    });
    //お問い合わせフォームの入力チェック
    function inputCheck(){
        // エラーチェック結果
        let result;

        //エラーメッセージのテキスト
        let message='';

        //エラーがなければfalse、エラーがあればtrue
        let error=false;

        //お名前のチェック
        if($('#name').val()==''){
            //エラーあり
            $('#name').css('background-color', '#f79999');
            error=true;
            message+='お名前を入力してください。\n'
        }else{
            //エラーなし
            $('#name').css('background-dolor','#fafafa');
        }

        //フリガナのチェック
        if($('#furigana').val()==''){
            //エラーあり
            $('#furigana').css('background-color', '#f79999');
            error=true;
            message+='フリガナを入力してください。\n'
        }else{
            //エラーなし
            $('#furigana').css('background-dolor','#fafafa');
        }

        //お問い合わせのチェック
        if($('#message').val()==''){
            //エラーあり
            $('#message').css('background-color', '#f79999');
            error=true;
            message+='お問い合わせ内容を入力してください。\n'
        }else{
            //エラーなし
            $('#message').css('background-dolor','#fafafa');
        }

        //メールアドレスのチェック
        if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
            //エラーあり
            $('#email').css('background-color','#f79999');
            error=true;
            message+='メールアドレスが未入力、または「@」「.」が含まれていません。\n';
        }else{
            //エラーなし
            $('#email').css('background-dolor','#fafafa');
        }

        //電話番号のチェック（電話番号は必須でないので、未入力はOK、未入力でない場合は-が必要）
        if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
            //エラーあり
            $('#tel').css('background-color','#f79999');
            error=true;
            message+='電話番号に「-」が含まれていません。\n';
        }else{
            //エラーなし
            $('#tel').css('background-dolor','#fafafa');
        }

        //お住まいの都道府県のチェック
        if($('#prefecture').val()==''){
            //エラーあり
            $('#prefecture').css('background-color','#f79999');
            error=true;
            message+='都道府県を選択してください。\n';
        }else{
            //エラーなし
            $('#prefecture').css('background-dolor','#fafafa');
        }
        
        //個人情報のチェックボックスのチェック
        if($('#agree').prop('checked')==false){
            error=true;
            message+='個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\ns'
        }

        //エラーの有無で送信ボタンを切り替え
        if(error==true){
            $('#submit').attr('src', 'images/button-submit.png');
        }else{
            $('#submit').attr('src', 'images/button-submit-blue.png');
        }

        // オブジェクトでエラー判定とメッセージを返す
        result={
            error: error,
            message: message,
        }

        //戻り値としてエラーがあるかどうかを返す
        return result;
    }
});
