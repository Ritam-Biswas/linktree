$(document).ready(function(){
    $(".link1").hover(function(){
        $(".link1 h4").css("color","#DDDCEC")
    },function(){
        $(".link1 h4").css("color","#1A1835")
    })

    $(".link2").hover(function(){
        $(".link2 h4").css("color","#DDDCEC")
    },function(){
        $(".link2 h4").css("color","#1A1835")
    })

    $(".link3").hover(function(){
        $(".link3 h4").css("color","#DDDCEC")
    },function(){
        $(".link3 h4").css("color","#1A1835")
    })
})

var typed = new Typed(".autotype",{
    strings:["Web Development","UI/UX Designing"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
})
