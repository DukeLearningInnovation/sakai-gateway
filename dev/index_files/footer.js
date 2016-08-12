$(document).ready(function(){
			
	//============================================
	// Global functions
	//============================================

	$.fn.getClassIndex = function(){
		if($(this).attr('class')){
			return ($(this).attr('class').match(/views-row-([0-9]+)/)[1]-1);
		}
	}
	$.fn.getIndex = function(){
		  var parentSet=$(this).parent().children();
	    return $(parentSet).index(this);
	};
	
	$.fn.toggleCur = function(){
		  if($(this).hasClass("cur")){
			  return $(this).removeClass("cur");
		  } else {
			  return $(this).addClass("cur");
		  }
	};
	$.fn.loopNext = function(){
		 if($(this).is(":last-child")){
		   return $(this).siblings(":first");
		 } else {
       return $(this).next();
		 }
	};
	$.fn.loopPrev = function(){
		 if($(this).is(":first-child")){
		   return $(this).siblings(":last");
		 } else {
       return $(this).prev ();
		 }
	};
	

	//============================================
	// Cycle footer media
	//============================================
	$("#section-media .listMedia").after("<a href='#' id='mediaPrev' class='mediaNav' rel='prev'>Previous</a><a href='#' id='mediaNext' class='mediaNav' rel='next'>Next</a>");
	
  	$(".mediaNav").live("click", function(){
    var direction=$(this).attr("rel");
    clearInterval(mediaTime);
	  mediaMove(direction);
	  return false;
  	});
	

	//============================================
	// Media functions
	//============================================

	function mediaMove(direction){
	$("#section-media .listMedia").children("li:visible").fadeOut(function(){
		if (direction == "prev") {
		  $(this).loopPrev().fadeIn();
		} else {
		  $(this).loopNext().fadeIn();
		}
	});
}

// Make the footer-media items loop indefinitely
var mediaTime;

function mediaLoop(){
	mediaTime = setInterval(mediaMove,5000);
}

mediaLoop();


});	