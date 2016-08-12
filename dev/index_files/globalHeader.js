jQuery(document).ready(function(){
	
	//============================================
	// Expand and hide the header
	//============================================
	
	jQuery("#header-global #browseAll").click(function(){
		var innerInfo=jQuery("#header-global-wrapInner");
		var outerInfo=jQuery("#header-global-wrapOuter")
		var linkObject=jQuery(this);
		fadeOpen(innerInfo,outerInfo,linkObject,"open");
		return false;
	})
	

	//============================================
	// Place .inField labels into their respective fields, remove the text on click
	//============================================
	
		jQuery("label.inField").each(function(){
			var thisFieldName=jQuery(this).attr("for");
			var thisText=jQuery(this).text();
			var thisField=jQuery("input[name="+thisFieldName+"]")

			jQuery(this).hide();
			jQuery(thisField).val(thisText).data("originalValue",thisText);

			jQuery(thisField).focus(function(){
				var originalValue=jQuery(this).data("originalValue");
				var currentValue=jQuery(this).val();
				if(originalValue==currentValue){
					jQuery(this).val("");
				};
			})
			jQuery(thisField).blur(function(){
				var originalValue=jQuery(this).data("originalValue");
				var currentValue=jQuery(this).val();
				if(currentValue==""){
					jQuery(this).val(originalValue);
				};
			});
		});

	// ======================================	
	// Search box (clear on click)
	// ======================================
	jQuery('#search-inHeader input.text').one('click', function(){
		jQuery(this).attr('value', '');
	});

});

function fadeOpen(innerObject,outerObject,linkObject,linkClass){
	var outerPosition=jQuery(outerObject).css("position");
	if((outerPosition!="absolute") && (outerPosition!="relative")){
		jQuery(outerObject).css("position","relative");
	};
	if(jQuery(innerObject).is(":visible")){
		jQuery(linkObject).removeClass(linkClass);
		jQuery(innerObject).fadeOut(200, function(){
			jQuery(outerObject).animate({
				height: "0"
			})
		});
	} else {
		jQuery(linkObject).addClass(linkClass);
		var innerHeight=jQuery(innerObject).css({
			"position" : "absolute",
			"left" : "-9999px",
			"display" : "block"
		}).height();
		jQuery(outerObject).animate({
			height: "+="+innerHeight
		}, 500, function(){
		  jQuery(innerObject).animate({opacity: "0.01", left: "0"}, 1).animate({
			  opacity: "1"
		  }, 500)
		});
	};
};
