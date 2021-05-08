var hamBtn = $("[data=hamburger-menu]");
var Bar1 = hamBtn.find("b:nth-child(1)");
var Bar2 = hamBtn.find("b:nth-child(2)");
var Bar3 = hamBtn.find("b:nth-child(3)");



hamBtn.click(function() 
{
    $(this).toggleClass("active");

    if (hamBtn.hasClass("active")) 
    {
        Bar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
        Bar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
                .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
        hamBtn.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
    } 
    else 
    {
        hamBtn.velocity("reverse");
        Bar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
                .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
        Bar1.velocity("reverse", {delay: 800});
    }
});

