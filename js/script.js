//Wherever we use '$' it means either we are creating a jquery object or weare using a jquery file 
// In the below code snippet we are saying "This code will run when the document or say page is ready(page is same asthe document)"

//While using countUp.js always remember to remove the last line 'export( countUP )' otherwise the code will not work and will give different types of erros.

$(window).on("load", function(){

	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });


})




$(document).ready(function() {

	//'$' sign is used when we use jquery files but since our typed.js is just a plain javascript file thus we will treat it differently.
	// '#' mean 'id' here it means 'id of slides'.
	$('#slides').superslides({
		//Don't forget to put ',' between various properties.
		animation: 'fade',
		play: 5000,
		pagination: false //Pagination is the 3 dot cursor that is present at the bottom of the homepage and we are getting rid of it by this command.
	});

	// To add typing effect using typed.js 
	var typed = new Typed(".typed", {
		strings: ["Budding Software Developer.", "iOS Development.", "Web Enthusiast." ,"Student."],
		typeSpeed: 70,
		loop: true, //This line will make sure when all the three strings are typed this process will start again fromthe first string
		startDelay: 1000, //Wait 1000 mili seconds before starting typing effect
		showCursor: false
	});

	//To add owl carousel js file to create carousel effect in our technical skillls section.
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    //In responsive we are basically deciding how many charts must be shownbased on the screen size the site is being used on like if the size is between 0 to 480  then just show 1 at a time and if the size is between 480 to 768 then show 2 items and further.
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	//From here we are working to add pie charts.
	
    //To make sure that the aniation of pie chart starts when we reach that part of the website
    var skillsTopOffSet = $(".skillsSection").offset().top; //This line basically stores the position of the technical section in our website.

    var statsTopOffSet = $(".statsSection").offset().top; //This line basically stores the position of the STATS section in our website.

    var countUpFinished = false;
    //creating a jquery object and this means that when thewindow is scrolled it will perform the code given inthe function
    $(window).scroll(function() {

    	//pageYOffset implies how far are you from the top of the webpage. the more you scroll down the value will increase.

    	if(window.pageYOffset > skillsTopOffSet - $(window).height() + 200) {

	    		// the above line says that if the YOffset value is greater than the (skill's topoffset - window height(if we would not subtract this height of the windown then it would start to workonly whe the user would reach the end of the teachnical skill part that is theorange part) + 200(we added 200 pixels to not to start justwhen the user reached that orange partrather start when user crosses 200 more pixels so that animation can be really visible to him) i.e. if it has reached the top part of the technical skills section and is moving forward */
		    	//To add easypiechart js file to use pie charts in our technical skills section.
		    	$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152, 
				onStep: function(from, to, percent){
					$(this.el).find('.percent').text(Math.round(percent));
				}//What this function basically does is that as we know our pie charts are animated thus when the bar of the pie increases the no.should alsl increase with the moment of the bar of the pie chart.

   		 	});

    	}

    		//From here we are working on our STATS ACTION to add a counter effect for our elements..
   	   	if(!countUpFinished && window.pageYOffset > statsTopOffSet - $(window).height() + 200) {

				$(".counter").each(function(){
					var element = $(this);
					var endVal = parseInt(element.text());
					element.countup(endVal);
				})

				countUpFinished = true;

   	    }	

    });


    $("[data-fancybox]").fancybox();

    

    $("#filters a").click(function() {

    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	var selector = $(this).attr("data-filter");

    	$("[data-fancybox]").fancybox();

   		 $(".items").isotope({
	    		filter: selector,
	    		animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });

   		 return false;

    })


//From here we are working to add NAVIGATION BAR.


	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
	});






    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

	function stickyNavigation() {


		var body = $("body");
		if($(window).scrollTop() >= navTop){
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

	}    

});







