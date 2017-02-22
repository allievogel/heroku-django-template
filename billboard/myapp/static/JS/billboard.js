myapp = {};

myapp.addnewpost = function(){
    $("#textadd").slideUp();
    $("#newpostdiv").slideDown();
    $("#confirmbox").slideDown();

};

myapp.createnewpost = function(){
    $("#newpostdiv").fadeOut().delay(200);
    $("#confirmbox").fadeOut().delay(400);
    $("#newButton").slideDown().delay(500).fadeIn();

    $.ajax("/newpost",{
    type: "POST",
    data:{"text":$("#newtext").val(),
          "title":$("#newtitle").val(),
          "author":$("#newauthor").val()
    },
    success: function(data)
    {
        $("#row").html(data + $("#row").html())
        board.updateall();
        $("#newtext").val(""),
        $("#newtitle").val(""),
        $("#newauthor").val("")
    }});

}

myapp.formatDate = function(date){
    var day = date.getDate();
    var month = date.getMonth() + 1;
    if (month<=9){
        month = '0' + String(month)
    }
    var year = date.getFullYear();
    var finaldate = day + "/" + month + "/" + year;
    return finaldate
}

myapp.start = function (){
    $(document).ready(function(){
        $("#newpostdiv").hide();
        $("#confirmbox").hide();
        $("#newButton").bind("click", myapp.addnewpost);

        $(".confirm_btn").bind("click",myapp.createnewpost);
        $(".pubdate").text(myapp.formatDate(new Date));

    })

};

myapp.start();