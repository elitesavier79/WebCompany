$(document).ready(function(){
	// untuk gerak halaman
  $(".nav-link").click(function(e){
    var gerak = $(this).attr("href");
    var elementGerak = $(gerak);

    $("html,body").animate({
    	scrollTop: elementGerak.offset().top -50
    }, 1500, "swing");

   	e.preventDefault();
    });
  
  //untuk class active
  $("ul li a").click(function(){
  	$("li a").removeClass("active");
  	$(this).addClass("active");
  });


});