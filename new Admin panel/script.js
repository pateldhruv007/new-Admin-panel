$("#Icon,#Google,#Profile,#Tables,#Login,#Register,#Logout").hide();


$("#sideBar>button").on("click",function(){
    $("#Icon,#Google,#Profile,#Tables,#Login,#Register,#Logout").hide();
    $($(this).attr("for")).show();

})