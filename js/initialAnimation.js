var x = document.getElementById("backdrop");
setTimeout(function()
{ 
    $("#backdrop").fadeTo("slow", 0);
    $("#backdrop").css("display", "none");
 }, 5000);