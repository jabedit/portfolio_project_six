$(document).ready(function(){
    /*waypoint js*/
    $(".js-service-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });
        
    
    
    
    /*mixitup*/
    var mixer = mixitup('.container');
    
});


function openNav(){
    document.getElementById('navbar').style.width = "100%";
}
function closeNav(){
    document.getElementById('navbar').style.width = "0";
}
